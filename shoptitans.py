import frida

class ShopTitans:
    def __init__(self, target="shoptitan.exe", jsfile="shoptitans.js"):
        self.target = target
        self.jsfile = jsfile
        self.session = None
        self.script = None
        self.payloads = {}

    def __enter__(self):
        if not self.attach():
            raise RuntimeError(f"Failed to attach to {self.target}")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.detach()

    def on_message(self, message, data):
        if message['type'] == 'send':
            payload = message.get('payload', {})
            event = payload.get('event')
            data = payload.get('data')
            self.payloads[event] = data
            print(f"[*] Received Event '{event}': {data}")
        elif message['type'] == 'error':
            print(f"[-] Frida Script Error: {message.get('description', 'Unknown error')}")
            print(f"[-] Stack: {message.get('stack', 'No stack trace')}")

    def attach(self):
        if self.session:
            print("[!] Already attached. Detach first if you want to re-attach.")
            return True

        try:
            print(f"[*] Attaching to {self.target}...")
            self.session = frida.attach(self.target)
            print(f"[*] Attached. Creating script...")
            source = open(self.jsfile, "r", encoding='utf-8').read()
            self.script = self.session.create_script(source)
            self.script.on('message', self.on_message)
            print(f"[*] Loading script: {self.jsfile}...")
            self.script.load()
            print(f"[*] Script loaded successfully.")
            return True
        except frida.ProcessNotFoundError:
            print(f"[-] Process '{self.target}' not found.")
            self.session = None
            self.script = None
            return False
        except frida.InvalidArgumentError as e:
            print(f"[-] Frida InvalidArgumentError (often means process died or access issue): {e}")
            if self.session:
                self.session.detach()
            self.session = None
            self.script = None
            return False
        except Exception as e:
            print(f"[-] An error occurred during attach: {e}")
            if self.script: # If script was created but load failed
                try:
                    self.script.unload()
                except Exception as ue:
                    print(f"[-] Error unloading script during cleanup: {ue}")
            if self.session:
                try:
                    self.session.detach()
                except Exception as de:
                    print(f"[-] Error detaching session during cleanup: {de}")
            self.session = None
            self.script = None
            return False
        
    def detach(self):
        if self.script:
            try:
                print("[*] Unloading script...")
                self.script.unload()
                print("[*] Script unloaded.")
            except frida.InvalidOperationError as e: # Common if process already closed
                 print(f"[-] Warning: Could not unload script (process might be gone): {e}")
            except Exception as e:
                print(f"[-] Error unloading script: {e}")
            finally:
                self.script = None
        
        if self.session:
            try:
                print(f"[*] Detaching from {self.target}...")
                self.session.detach()
                print(f"[*] Detached.")
            except frida.InvalidOperationError as e: # Common if process already closed
                 print(f"[-] Warning: Could not detach session (process might be gone): {e}")
            except Exception as e:
                print(f"[-] Error detaching session: {e}")
            finally:
                self.session = None
        
    def peak_result(self):
        if 'RandomItemQuality' not in self.payloads:
            return None
        
        data = self.payloads['RandomItemQuality']
        return data