import React, { useState, useEffect } from 'react';
import { useGarlandContext } from '../contexts/GarlandContext';
import GarlandList from '../components/GarlandList';
import GarlandForm from '../components/GarlandForm';
import SearchBar from '../components/SearchBar';

const Garlands = () => {
  const { state, fetchGarlands } = useGarlandContext();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchGarlands();
  }, []);

  const { garlands, loading, error } = state;

  const filteredGarlands = garlands.filter(garland =>
    garland.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Garlands</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <GarlandList garlands={filteredGarlands} />}
      <GarlandForm />
    </div>
  );
};

export default Garlands;
