from com_op import Op
from flask import Flask, request, jsonify
from flask_cors import CORS

op = Op()
app = Flask(__name__)
CORS(app)

@app.route('/find_window')
def find_window():
    class_name = request.args.get('class_name', '')
    title = request.args.get('title', '')
    hwnd = op.FindWindow(class_name, title)
    return jsonify({'hwnd': hwnd})

@app.route('/set_client_size')
def set_client_size():
    hwnd = request.args.get('hwnd', 0)
    width = request.args.get('width', 720)
    hight = request.args.get('hight', 480)
    op_ret = op.SetClientSize(hwnd, width, hight)
    return jsonify({'op_ret': op_ret})

@app.route('/set_window_state')
def set_window_state():
    hwnd = request.args.get('hwnd', 0)
    flag = request.args.get('flag', 1)
    op_ret = op.SetWindowState(hwnd, flag)
    return jsonify({'op_ret': op_ret})

@app.route('/move_window')
def move_window():
    hwnd = request.args.get('hwnd', 0)
    x = request.args.get('x', 0)
    y = request.args.get('y', 0)
    op_ret = op.MoveWindow(hwnd, x, y)
    return jsonify({'op_ret': op_ret})

@app.route('/bind_window')
def bind_window():
    hwnd = request.args.get('hwnd', 0)
    display = request.args.get('display', 'normal')
    mouse = request.args.get('mouse', 'normal')
    keypad = request.args.get('keypad', 'normal')
    mode = request.args.get('mode', 0)
    op_ret = op.BindWindow(hwnd, display, mouse, keypad, mode)
    return jsonify({'op_ret': op_ret})

@app.route('/unbind_window')
def unbind_window():
    op_ret = op.UnBindWindow()
    return jsonify({'op_ret': op_ret})

@app.route('/mouse_action')
def mouse_action():
    x = request.args.get('x', 0)
    y = request.args.get('y', 0)
    action = request.args.get('action', 'MoveTo')
    op_ret = op.MoveTo(x, y)
    if action == 'LeftClick':
        op_ret = op.LeftClick()
    elif action == 'RightClick':
        op_ret = op.RightClick()
    return jsonify({'op_ret': op_ret})

@app.route('/keypad_action')
def keypad_action():
    vk_code = request.args.get('vk_code', 13)
    action = request.args.get('action', 'KeyPress')
    if action == 'KeyPress':
        op_ret = op.KeyPress(vk_code)
    elif action == 'KeyDown':
        op_ret = op.KeyDown(vk_code)
    elif action == 'KeyUp':
        op_ret = op.KeyUp(vk_code)
    return jsonify({'op_ret': op_ret})

@app.route('/get_color')
def get_color():
    x = request.args.get('x', 0)
    y = request.args.get('y', 0)
    color = op.GetColor(x, y)
    return jsonify({'color': color})

@app.route('/find_color')
def find_color():
    x1 = request.args.get('x1', 0)
    y1 = request.args.get('y1', 0)
    x2 = request.args.get('x2', 720)
    y2 = request.args.get('y2', 480)
    color = request.args.get('color', '000000')
    sim = request.args.get('sim', 1.0)
    dir = request.args.get('dir', 0)
    op_ret, x, y = op.FindColor(x1, y1, x2, y2, color, sim, dir)
    return jsonify({'op_ret': op_ret, 'x': x, 'y': y})

@app.route('/capture')
def capture():
    x1 = request.args.get('x1', 0)
    y1 = request.args.get('y1', 0)
    x2 = request.args.get('x2', 720)
    y2 = request.args.get('y2', 480)
    file = request.args.get('color', '1.bmp')
    op_ret = op.Capture(x1, y1, x2, y2, file)
    return jsonify({'op_ret': op_ret})

@app.route('/find_pic')
def find_pic():
    x1 = request.args.get('x1', 0)
    y1 = request.args.get('y1', 0)
    x2 = request.args.get('x2', 720)
    y2 = request.args.get('y2', 480)
    file = request.args.get('file', '1.bmp')
    delta_color = request.args.get('delta_color', '000000')
    sim = request.args.get('sim', 1.0)
    dir = request.args.get('dir', 0)
    op_ret, x, y = op.FindPic(x1, y1, x2, y2, file, delta_color, sim, dir)
    return jsonify({'op_ret': op_ret, 'x': x, 'y': y})

if __name__ == '__main__':
    app.run(debug=True)