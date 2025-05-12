class ScratchOpBlocks {
    constructor() {
        this.hwnd = 0;
        this.lastX = -1;
        this.lastY = -1;
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
                    opcode: 'getLastX',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'last x'
                },
                {
                    opcode: 'getLastY',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'last y'
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
                            defaultValue: 'Shop Titans'
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
                },
                {
                    opcode: 'getColor',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get color at x [X] y [Y]',
                    arguments: {
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
                    opcode: 'findColor',
                    blockType: Scratch.BlockType.REPORTER,
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'find color in area x1 [X1] y1 [Y1] x2 [X2] y2 [Y2] color [COLOR] sim [SIM] dir [DIR]',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 720
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 480
                        },
                        COLOR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '000000'
                        },
                        SIM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1.0
                        },
                        DIR: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'capture',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'capture area x1 [X1] y1 [Y1] x2 [X2] y2 [Y2] to file [FILE]',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 720
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 480
                        },
                        FILE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1.bmp'
                        }
                    }
                },
                {
                    opcode: 'findPic',
                    blockType: Scratch.BlockType.REPORTER,
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'find pic in area x1 [X1] y1 [Y1] x2 [X2] y2 [Y2] file [FILE] delta_color [DELTA_COLOR] sim [SIM] dir [DIR]',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 720
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 480
                        },
                        FILE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1.bmp'
                        },
                        DELTA_COLOR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '000000'
                        },
                        SIM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1.0
                        },
                        DIR: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'attachGame',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'attach game'
                },
                {
                    opcode: 'detachGame',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'detach game'
                },
                {
                    opcode: 'peakResult',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'peak result'
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

    attachGame() {
        const url = `${this.host}/attach_game`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Game attached:', data.ret);
                return data.ret;
            })
            .catch(error => {
                console.error('Error:', error);
                return false;
            });
    }

    detachGame() {
        const url = `${this.host}/detach_game`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Game detached:', data.ret);
                return data.ret;
            })
            .catch(error => {
                console.error('Error:', error);
                return false;
            });
    }

    peakResult() {
        const url = `${this.host}/peak_result`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Peak result:', data.result);
                return data.result;
            })
            .catch(error => {
                console.error('Error:', error);
                return -1;
            });
    }

    getHwnd() {
        return this.hwnd || 0;
    }

    getLastX() {
        return this.lastX || 0;
    }

    getLastY() {
        return this.lastY || 0;
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
                this.hwnd = 0;
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
                console.log('Window moved:', data.ret);
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
                console.log('Client size set:', data.ret);
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
                console.log('Window state set:', data.ret);
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
                console.log('Window bound:', data.ret);
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
                console.log('Window unbound:', data.ret);
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
                console.log('Mouse action:', data.ret);
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
                console.log('Keypad action:', data.ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    getColor(args) {
        const params = new URLSearchParams({
            x: args.X,
            y: args.Y
        });
        const url = `${this.host}/get_color?${params.toString()}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data.color;
            })
            .catch(error => {
                console.error('Error:', error);
                return '';
            });
    }

    findColor(args) {
        const params = new URLSearchParams({
            x1: args.X1,
            y1: args.Y1,
            x2: args.X2,
            y2: args.Y2,
            color: args.COLOR,
            sim: args.SIM,
            dir: args.DIR
        });
        const url = `${this.host}/find_color?${params.toString()}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                this.lastX = data.x;
                this.lastY = data.y;
                return data.ret == 0;
            })
            .catch(error => {
                this.lastX = -1;
                this.lastY = -1;
                console.error('Error:', error);
                return false;
            });
    }

    capture(args) {
        const params = new URLSearchParams({
            x1: args.X1,
            y1: args.Y1,
            x2: args.X2,
            y2: args.Y2,
            file: args.FILE
        });
        const url = `${this.host}/capture?${params.toString()}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Capture:', data.ret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    findPic(args) {
        const params = new URLSearchParams({
            x1: args.X1,
            y1: args.Y1,
            x2: args.X2,
            y2: args.Y2,
            file: args.FILE,
            delta_color: args.DELTA_COLOR,
            sim: args.SIM,
            dir: args.DIR
        });
        const url = `${this.host}/find_pic?${params.toString()}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                this.lastX = data.x;
                this.lastY = data.y;
                return data.ret == 0;
            })
            .catch(error => {
                this.lastX = -1;
                this.lastY = -1;
                console.error('Error:', error);
                return false;
            });
    }
}

Scratch.extensions.register(new ScratchOpBlocks());
