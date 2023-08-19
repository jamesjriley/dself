from app.config.firebaseConfig import db

def save_user_profile(user_info):
    # Get a reference to the users collection
    users_ref = db.collection('users')

    # Add the user info to the users collection
    users_ref.add(user_info)
