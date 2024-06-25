import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container">
      <h1>Welcome, {user.username}</h1>
      <h2>Profile Details</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;