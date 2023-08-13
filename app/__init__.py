# Inside app/__init__.py

from flask import Flask, send_from_directory
from app.config.secrets import get_secret
from app.auth.oauth import configure_oauth
from app.auth.oauth import auth_bp

def create_app():
    app = Flask(__name__, static_folder='../build', static_url_path='')

    # Retrieve secrets using the get_secret function
    google_client_id = get_secret('dself-395100', 'google-client-id')
    google_client_secret = get_secret('dself-395100', 'google-client-secret')
    flask_secret_key = get_secret('dself-395100', 'flask-secret-key') # Retrieve Flask secret key

    # Set the secret key for the Flask session
    app.secret_key = flask_secret_key

    # Configure OAuth using the retrieved client ID and secret
    google_oauth = configure_oauth(app, google_client_id, google_client_secret)
    # Register the authentication Blueprint
    app.register_blueprint(auth_bp)


    # Catch-all route to serve React app for any path not handled by Flask
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def index(path):
        return send_from_directory(app.static_folder, 'index.html')


    return app
