# in file app/auth/oauth.py
from flask import Blueprint, redirect, url_for, jsonify, session
from authlib.integrations.flask_client import OAuth
from app.services.userService import save_user_profile
auth_bp = Blueprint('auth', __name__)

def configure_oauth(app, client_id, client_secret):
    oauth = OAuth(app)

    google = oauth.register(
        name='google',
        client_id=client_id,
        client_secret=client_secret,
        jwks_uri='https://www.googleapis.com/oauth2/v3/certs', # Add this line
        access_token_url='https://accounts.google.com/o/oauth2/token',
        access_token_params=None,
        authorize_url='https://accounts.google.com/o/oauth2/auth',
        authorize_params=None,
        api_base_url='https://www.googleapis.com/oauth2/v1/',
        client_kwargs={'scope': 'openid email profile'}
    )

    # Google login endpoint
    @auth_bp.route('/auth/google')
    def google_login():
        redirect_uri = url_for('auth.google_authorize', _external=True)
        return google.authorize_redirect(redirect_uri)

    # Google OAuth callback endpoint
    @auth_bp.route('/auth/google/callback')
    def google_authorize():
        token = google.authorize_access_token()
        resp = google.get('userinfo')
        user_info = resp.json()
        save_user_profile(user_info)
        print("User Info:", user_info)  # Print user information
        # Store user_info in the session
        session['user_info'] = user_info

        # ... process user_info and log the user in ...
        return redirect('/')  # Redirect to the home page or dashboard

    @app.route('/api/user')
    def get_user():
        user_info = session.get('user_info', None)
        if user_info:
            user_data = {
                'email': user_info['email'],
                'profilePicture': user_info['picture']  # Profile picture URL
            }
            return jsonify(user_data)
        else:
            return jsonify(None)

    @auth_bp.route('/auth/logout')
    def logout():
        session.pop('user_info', None) # Remove the user info from the session
        return redirect('/') # Redirect to the home page
    
    return google
