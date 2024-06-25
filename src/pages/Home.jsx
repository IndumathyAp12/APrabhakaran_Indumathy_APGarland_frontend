import React, { useState } from 'react';
import { useGarlandContext } from '../contexts/GarlandContext';
import GarlandList from '../components/GarlandList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const { state } = useGarlandContext();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGarlands = state.garlands.filter(garland =>
    garland.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <img src="/My first design.png" alt="Garland Shop Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <h1>Welcome to Garland Shop</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <GarlandList products={filteredGarlands} />
    </div>
  );
};

export default Home;
