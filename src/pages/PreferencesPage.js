import React, { useState, useEffect } from 'react';

function PreferencesPage() {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({
    selectedAIModel: '',
    promptPreferences: '',
    languagePreferences: ''
  });

  // Function to handle preference changes
  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  // Function to save preferences
  const savePreferences = () => {
    // TODO: Implement logic to save preferences to Firestore
    console.log('Preferences saved:', preferences);
  };

  useEffect(() => {
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.email) {
          setUser(data);
          // TODO: Load preferences from Firestore
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}!</h1>
          <img src={user.profilePicture} alt="Profile" />
          <div>
            <label>Preferred name:</label>
            <input type="text" name="namePreferences" value={preferences.namePreferences} onChange={handlePreferenceChange} />
          </div>
          <div>
            <label>Selected AI Model:</label>
            <select name="selectedAIModel" value={preferences.selectedAIModel} onChange={handlePreferenceChange}>
              {/* Options for different AI models */}
            </select>
          </div>
          <div>
            <label>Prompt Preferences:</label>
            <input type="text" name="promptPreferences" value={preferences.promptPreferences} onChange={handlePreferenceChange} />
          </div>
          <div>
            <label>Language Preferences:</label>
            <input type="text" name="languagePreferences" value={preferences.languagePreferences} onChange={handlePreferenceChange} />
          </div>
          <button onClick={savePreferences}>Save Preferences</button>
        </div>
      ) : (
        <h1>Please Log In</h1>
      )}
    </div>
  );
}

export default PreferencesPage;
