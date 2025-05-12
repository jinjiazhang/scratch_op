from com_op import Op
from shoptitans import ShopTitans
from flask import Flask, request, jsonify
from flask_cors import CORS

op = Op()
st = ShopTitans()
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
    ret = op.SetClientSize(hwnd, width, hight)
    return jsonify({'ret': ret})

@app.route('/set_window_state')
def set_window_state():
    hwnd = request.args.get('hwnd', 0)
    flag = request.args.get('flag', 1)
    ret = op.SetWindowState(hwnd, flag)
    return jsonify({'ret': ret})

@app.route('/move_window')
def move_window():
    hwnd = request.args.get('hwnd', 0)
    x = request.args.get('x', 0)
    y = request.args.get('y', 0)
    ret = op.MoveWindow(hwnd, x, y)
    return jsonify({'ret': ret})

@app.route('/bind_window')
def bind_window():
    hwnd = request.args.get('hwnd', 0)
    display = request.args.get('display', 'normal')
    mouse = request.args.get('mouse', 'normal')
    keypad = request.args.get('keypad', 'normal')
    mode = request.args.get('mode', 0)
    ret = op.BindWindow(hwnd, display, mouse, keypad, mode)
    return jsonify({'ret': ret})

@app.route('/unbind_window')
def unbind_window():
    ret = op.UnBindWindow()
    return jsonify({'ret': ret})

@app.route('/mouse_action')
def mouse_action():
    x = request.args.get('x', 0)
    y = request.args.get('y', 0)
    action = request.args.get('action', 'MoveTo')
    ret = op.MoveTo(x, y)
    if action == 'LeftClick':
        ret = op.LeftClick()
    elif action == 'RightClick':
        ret = op.RightClick()
    return jsonify({'ret': ret})

@app.route('/keypad_action')
def keypad_action():
    vk_code = request.args.get('vk_code', 13)
    action = request.args.get('action', 'KeyPress')
    if action == 'KeyPress':
        ret = op.KeyPress(vk_code)
    elif action == 'KeyDown':
        ret = op.KeyDown(vk_code)
    elif action == 'KeyUp':
        ret = op.KeyUp(vk_code)
    return jsonify({'ret': ret})

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
    ret, x, y = op.FindColor(x1, y1, x2, y2, color, sim, dir)
    return jsonify({'ret': ret, 'x': x, 'y': y})

@app.route('/capture')
def capture():
    x1 = request.args.get('x1', 0)
    y1 = request.args.get('y1', 0)
    x2 = request.args.get('x2', 720)
    y2 = request.args.get('y2', 480)
    file = request.args.get('color', '1.bmp')
    ret = op.Capture(x1, y1, x2, y2, file)
    return jsonify({'ret': ret})

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
    ret, x, y = op.FindPic(x1, y1, x2, y2, file, delta_color, sim, dir)
    return jsonify({'ret': ret, 'x': x, 'y': y})

@app.route('/attach_game')
def attach_game():
    ret = st.attach()
    return jsonify({'ret': ret})

@app.route('/detach_game')
def detach_game():
    ret = st.detach()
    return jsonify({'ret': ret})

@app.route('/peak_result')
def peak_result():
    result = st.peak_result()
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True, threaded=False)