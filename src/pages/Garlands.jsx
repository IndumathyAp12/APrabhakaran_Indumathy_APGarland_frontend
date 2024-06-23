import React, { useEffect } from 'react';
import { useGarlandContext } from '../contexts/GarlandContext';
import GarlandList from '../components/GarlandList';

const Garlands = () => {
  const { state, fetchGarlands } = useGarlandContext();

  useEffect(() => {
    fetchGarlands();
  }, []);

  const { garlands, loading, error } = state;

  return (
    <div>
      <h1>Garlands</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <GarlandList garlands={garlands} />}
    </div>
  );
};

export default Garlands;
