import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import ProfileDetails from './ProfileDetails';
import ChangePassword from './ChangePassword';
import { useAuthContext } from '../contexts/AuthContext';

const UserPage = () => {
  const { logout } = useAuthContext();

  return (
    <div className="container">
      <h1>User Page</h1>
      <nav>
        <ul>
          <li><Link to="order-history">Order History</Link></li>
          <li><Link to="profile-details">Profile Details</Link></li>
          <li><Link to="change-password">Change Password</Link></li>
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="profile-details" element={<ProfileDetails />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Routes>
    </div>
  );
};

export default UserPage;
