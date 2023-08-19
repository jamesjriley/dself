
//in src/pages/LoginPage.js
import React, { useEffect } from 'react';
import { useUser } from '../contexts/UserContext'; // Import useUser hook

function LoginPage() {
  // Function to handle the login button click
  const handleLoginClick = () => {
    // Redirect the user to the backend endpoint that starts the Google OAuth flow
    window.location.href = '/auth/google';
  };

  const { user, setUser } = useUser(); // Get the setUser function from the context

  useEffect(() => {
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.email) { // Check if data is not null and contains email property
          setUser(data); // Set the user in the context
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  

  return (
    <div>
      {user ? <h1>Welcome, {user.email}!</h1> : <div><h1>Please Log In here</h1><button onClick={handleLoginClick}>Log In with Google</button></div>}
    </div>
  );
}

export default LoginPage;
