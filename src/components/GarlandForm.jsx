import React, { useState } from 'react';
import axios from 'axios';
import { useGarlandContext } from '../contexts/GarlandContext';

const GarlandForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { fetchGarlands } = useGarlandContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/garlands', { name, description, price, imageUrl });
      fetchGarlands(); 
      setName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding garland', error);
    }
  };

  return (
    <div className="container">
      <h1>Add Garland</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <button type="submit">Add Garland</button>
      </form>
    </div>
  );
};

export default GarlandForm;
