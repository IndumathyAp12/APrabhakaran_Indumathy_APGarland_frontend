import React, { useState } from 'react'; 
import axios from '../Axios'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import '../App.css'; 

// Register component
const Register = () => {
  // State for form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // State for handling errors
  const [error, setError] = useState('');

  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value from the input
    setFormData({
      ...formData,
      [name]: value // Update the formData state with the new input value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await axios.post('/users/register', formData); // Send a POST request to register the user
      navigate('/users/login'); // Navigate to the login page upon successful registration
    } catch (error) {
      setError('Error registering. Please try again.'); // Set error state if registration fails
      console.error('Error registering', error); // Log the error to the console
    }
  };

  // Render the component
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} 
      </form>
    </div>
  );
};

export default Register; 
