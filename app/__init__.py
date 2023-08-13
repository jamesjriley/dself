# Inside app/__init__.py

from flask import Flask, send_from_directory
from app.config.secrets import get_secret
from app.auth.oauth import configure_oauth

def create_app():
    app = Flask(__name__, static_folder='../build', static_url_path='')

    # Retrieve secrets using the get_secret function
    google_client_id = get_secret('dself-395100', 'google-client-id')
    google_client_secret = get_secret('dself-395100', 'google-client-secret')
    # Configure OAuth using the retrieved client ID and secret
    google_oauth = configure_oauth(app, google_client_id, google_client_secret)



    @app.route('/')
    def index():
        return send_from_directory(app.static_folder, 'index.html')

    return app
