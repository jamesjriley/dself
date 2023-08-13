from flask import Blueprint, redirect, url_for
from authlib.integrations.flask_client import OAuth

auth_bp = Blueprint('auth', __name__)

def configure_oauth(app, client_id, client_secret):
    oauth = OAuth(app)

    google = oauth.register(
        name='google',
        client_id=client_id,
        client_secret=client_secret,
        access_token_url='https://accounts.google.com/o/oauth2/token',
        access_token_params=None,
        authorize_url='https://accounts.google.com/o/oauth2/auth',
        authorize_params=None,
        api_base_url='https://www.googleapis.com/oauth2/v1/',
        client_kwargs={'scope': 'email'}
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
        # ... process user_info and log the user in ...
        return redirect('/')  # Redirect to the home page or dashboard

    return google
