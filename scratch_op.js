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
                    opcode: 'getHwnd',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'hwnd'
                }
            ]
        };
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

    getHwnd() {
        return this.hwnd || '';
    }
}

Scratch.extensions.register(new ScratchOpBlocks());
