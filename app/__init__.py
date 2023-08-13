# Inside app/__init__.py

from flask import Flask, send_from_directory

def create_app():
    app = Flask(__name__, static_folder='../build', static_url_path='')

    @app.route('/')
    def index():
        return send_from_directory(app.static_folder, 'index.html')

    return app
