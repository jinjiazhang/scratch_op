class ScratchOpBlocks {
    constructor() {
        this.hwnd = 0;
        this.host = 'http://localhost:5000';
    }

    getInfo() {
        return {
            id: 'scratchOpBlocks',
            name: 'OP',
            blocks: [
                {
                    opcode: 'getHwnd',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'hwnd'
                },
                {
                    opcode: 'findWindow',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'find window with class [CLASS_NAME] and title [TITLE]',
                    arguments: {
                        CLASS_NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        },
                        TITLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    }
                },
                {
                    opcode: 'setClientSize',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set client size of window [HWND] to width [WIDTH] and height [HEIGHT]',
                    arguments: {
                        HWND: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        WIDTH: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 720
                        },
                        HEIGHT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 480
                        }
                    }
                },
                {
                    opcode: 'setWindowState',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set window [HWND] state to [FLAG]',
                    arguments: {
                        HWND: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        FLAG: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'moveWindow',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'move window [HWND] to x [X] y [Y]',
                    arguments: {
                        HWND: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'bindWindow',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'bind window [HWND] with display [DISPLAY] mouse [MOUSE] keypad [KEYPAD] mode [MODE]',
                    arguments: {
                        HWND: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        DISPLAY: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'displayOptions',
                            defaultValue: 'normal'
                        },
                        MOUSE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'mouseOptions',
                            defaultValue: 'normal'
                        },
                        KEYPAD: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'keypadOptions',
                            defaultValue: 'normal'
                        },
                        MODE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'unbindWindow',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'unbind window'
                },
                {
                    opcode: 'mouseAction',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'mouse [ACTION] at x [X] y [Y]',
                    arguments: {
                        ACTION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'mouseActions',
                            defaultValue: 'MoveTo'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 360
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 240
                        }
                    }
                },
                {
                    opcode: 'keypadAction',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'keypad [ACTION] with key [VK_CODE]',
                    arguments: {
                        ACTION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'keypadActions',
                            defaultValue: 'KeyPress'
                        },
                        VK_CODE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 13
                        }
                    }
                }
            ],
            menus: {
                displayOptions: ['normal', 'gdi', 'dx'],
                mouseOptions: ['normal', 'windows', 'dx'],
                keypadOptions: ['normal', 'windows'],
                mouseActions: ['MoveTo', 'LeftClick', 'RightClick'],
                keypadActions: ['KeyPress', 'KeyDown', 'KeyUp']
            },
        };
    }
    
    getHwnd() {
        return this.hwnd || '';
    }

    findWindow(args) {
        const params = new URLSearchParams({
            class_name: args.CLASS_NAME,
            title: args.TITLE
        });
        const url = `${this.host}/find_window?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.hwnd = data.hwnd;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    moveWindow(args) {
        const params = new URLSearchParams({
            hwnd: args.HWND,
            x: args.X,
            y: args.Y
        });
        const url = `${this.host}/move_window?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Window moved:', data.op_ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    setClientSize(args) {
        const params = new URLSearchParams({
            hwnd: args.HWND,
            width: args.WIDTH,
            hight: args.HEIGHT
        });
        const url = `${this.host}/set_client_size?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Client size set:', data.op_ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    setWindowState(args) {
        const params = new URLSearchParams({
            hwnd: args.HWND,
            flag: args.FLAG
        });
        const url = `${this.host}/set_window_state?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Window state set:', data.op_ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    bindWindow(args) {
        const params = new URLSearchParams({
            hwnd: args.HWND,
            display: args.DISPLAY,
            mouse: args.MOUSE,
            keypad: args.KEYPAD,
            mode: args.MODE
        });
        const url = `${this.host}/bind_window?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Window bound:', data.op_ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    unbindWindow() {
        const url = `${this.host}/unbind_window`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Window unbound:', data.op_ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    mouseAction(args) {
        const params = new URLSearchParams({
            x: args.X,
            y: args.Y,
            action: args.ACTION
        });
        const url = `${this.host}/mouse_action?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Mouse action:', data.op_ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    keypadAction(args) {
        const params = new URLSearchParams({
            vk_code: args.VK_CODE,
            action: args.ACTION
        });
        const url = `${this.host}/keypad_action?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Keypad action:', data.op_ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

Scratch.extensions.register(new ScratchOpBlocks());
