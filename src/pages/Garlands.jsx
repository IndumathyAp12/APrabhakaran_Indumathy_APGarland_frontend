import React, { useEffect, useState } from 'react';
import { useGarlandContext } from '../contexts/GarlandContext';
import GarlandList from '../components/GarlandList';
import GarlandForm from '../components/GarlandForm';

const Garlands = () => {
  const { state, fetchGarlands } = useGarlandContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGarlands, setFilteredGarlands] = useState([]);

  useEffect(() => {
    fetchGarlands();
  }, []);

  useEffect(() => {
    setFilteredGarlands(
      state.garlands.filter(garland =>
        garland.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, state.garlands]);

  const { loading, error } = state;

  return (
    <div className="container">
      <h1>Garlands</h1>
      <input
        type="text"
        placeholder="Search garlands"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <GarlandList garlands={filteredGarlands} />}
      <GarlandForm />
    </div>
  );
};

export default Garlands;
