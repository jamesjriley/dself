import React from 'react';

function LoginPage() {
  // Function to handle the login button click
  const handleLoginClick = () => {
    // Redirect the user to the backend endpoint that starts the Google OAuth flow
    window.location.href = '/auth/google';
  };

  return (
    <div>
      <h1>Please Log In here</h1>
      <button onClick={handleLoginClick}>Log In with Google</button>
    </div>
  );
}

export default LoginPage;
