# Inside app/auth/oauth.py

from authlib.integrations.flask_client import OAuth

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

    return google
