import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { state, login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    if (!state.error) {
      if (username === 'admin' && password === 'adminpassword') {
        navigate('/adminpage');
      } else {
        navigate('/userpage');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </form>
  );
};

export default Login;
