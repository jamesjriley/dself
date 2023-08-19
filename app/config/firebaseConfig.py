# in file app/config/firebaseConfig.py
import json
from firebase_admin import credentials, firestore, initialize_app
from app.config.secrets import get_secret

# Fetch secrets
project_id = "dself-395100"
firebase_credential_secret_name = "firebase-credentials"

# Get Firebase admin credentials from Google Secret Manager
firebase_credentials = get_secret(project_id, firebase_credential_secret_name)

# Create a credentials object using the secret JSON
cred = credentials.Certificate(json.loads(firebase_credentials))

# Initialize the Firebase app with the credentials
initialize_app(cred)

# Get a reference to the Firestore database
db = firestore.client()
