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

if __name__ == '__main__':
    app.run(debug=True)