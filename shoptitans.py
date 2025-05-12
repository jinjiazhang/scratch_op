import frida

received_data = {}
process_target = "shoptitan.exe"
script_content = "shoptitans.js"
frida_session = None
frida_script = None

def attach_process():
    frida_session = frida.attach(process_target)
    frida_script = frida_session.create_script(script_content)
    frida_script.on('message', on_message)
    frida_script.load()

def detach_process():
    frida_script.unload()
    frida_script.detach()

def on_message(message, data):
    if message['type'] == 'send':
        received_data[message['payload']['event']] = message['payload']['data']
    elif message['type'] == 'error':
        print(f"[-] Error: {message['stack']}")

def peak_next_result():
    if 'RandomItemQuality' not in received_data:
        return -1
    
    data = received_data['RandomItemQuality']
    # data['seed'], data['p4'],  data['p3'],  data['p2'],  data['p1']
    return 0
