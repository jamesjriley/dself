import React, { useState, useEffect } from 'react';

function LoginPage() {
  // Function to handle the login button click
  const handleLoginClick = () => {
    // Redirect the user to the backend endpoint that starts the Google OAuth flow
    window.location.href = '/auth/google';
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => {
        if (data.email) { // Check that the response contains user information
          setUser(data);
        }
      });
  }, []);

  return (
    <div>
      {user ? <h1>Welcome, {user.email}!</h1> : <div><h1>Please Log In here</h1><button onClick={handleLoginClick}>Log In with Google</button></div>}
 
      
    </div>
  );
}

export default LoginPage;
