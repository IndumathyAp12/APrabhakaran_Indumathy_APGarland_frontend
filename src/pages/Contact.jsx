import React, { useState } from 'react';
import axios from '../Axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setErrorMessage('Error sending message, please try again later.');
      console.error('Error sending message:', error);
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {successMessage && (
        <p aria-live="polite" style={{ color: 'green' }}>
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p aria-live="polite" style={{ color: 'red' }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Contact;
