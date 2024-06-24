import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/users/forgot-password', { email });
      alert('Password reset instructions have been sent to your email.');
    } catch (error) {
      console.error('Error sending password reset instructions', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Send Reset Instructions</button>
    </form>
  );
};

export default ForgotPassword;
