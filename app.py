from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='build', static_url_path='')

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
