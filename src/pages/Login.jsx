import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import '../App.css';

// Login component
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { state, login } = useAuthContext();// Destructure state and login function from AuthContext
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation
  
    // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (state.loading) {
      return; 
    }

    try {
      await login(username, password);

      if (!state.error) {
        if (username === 'admin' && password === 'adminpassword') {
          navigate('/adminpage');
        } else {
          navigate('/userpage');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Render the component
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={state.loading}>Login</button>
        {state.loading && <p>Loading...</p>}
        {state.error && <p style={{ color: 'red' }}>Error: {state.error}</p>}
      </form>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
