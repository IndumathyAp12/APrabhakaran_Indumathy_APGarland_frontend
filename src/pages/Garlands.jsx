import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GarlandList from '../components/GarlandList';

const Garlands = () => {
  const [garlands, setGarlands] = useState([]);

  useEffect(() => {
    axios.get('/api/garlands')
      .then(response => setGarlands(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Garlands</h1>
      <GarlandList garlands={garlands} />
    </div>
  );
};

export default Garlands;
