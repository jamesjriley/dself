# Inside app/__init__.py
import os
from flask import Flask, send_from_directory, current_app
from flask_cors import CORS
from app.config.secrets import get_secret
from app.auth.oauth import configure_oauth
from app.auth.oauth import auth_bp

def create_app():
    app = Flask(__name__, static_folder='../build', static_url_path='')
    CORS(app) # Enable CORS for all routes

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

    # Serve React app's index.html file for all unmatched routes
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        # Print the requested path
        print(f"Requested path: /{path}")

        # Print the static folder path
        print(f"Static folder path: {current_app.static_folder}")

        # Print the complete path to index.html
        index_path = os.path.join(current_app.static_folder, 'index.html')
        print(f"Complete path to index.html: {index_path}")

        # Check if the index.html file exists
        if os.path.exists(index_path):
            print("index.html file exists.")
        else:
            print("index.html file does NOT exist.")

        # Send the index.html file
        response = send_from_directory(current_app.static_folder, 'index.html')

        # Print the response status code
        print(f"Response status code: {response.status_code}")

        return response

    return app
