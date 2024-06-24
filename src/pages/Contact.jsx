import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send the form data to the backend (to the endpoint to handle )
      await axios.post('https://aprabhakaran-indumathy-apgarland-backend.onrender.com/api/contact', {
        name,
        email,
        message
      });

      // If successful, set submitted state to true
      setSubmitted(true);

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
      setError('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
