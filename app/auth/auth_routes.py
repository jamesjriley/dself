from flask import Blueprint, redirect, url_for

# Create a Blueprint for authentication routes
auth_bp = Blueprint('auth', __name__)

# Reference to the Google OAuth client (adjust as needed)
from .oauth import google

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
