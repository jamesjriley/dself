import React from 'react';
import { useUser } from '../contexts/UserContext';

function Logout() {
  const { setUser } = useUser();

  const handleLogoutClick = () => {
    // Clear the user information from the context
    setUser(null);

    // Clear the user information from the session
    fetch('/auth/logout')
      .then(() => {
        window.location.href = '/'; // Redirect to the home page
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <button onClick={handleLogoutClick}>Logout</button>
  );
}

export default Logout;
