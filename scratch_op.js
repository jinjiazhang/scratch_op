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
                }
            ]
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
}

Scratch.extensions.register(new ScratchOpBlocks());
