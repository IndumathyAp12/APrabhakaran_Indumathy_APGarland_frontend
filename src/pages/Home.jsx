import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const garlands = [
    { id: 2, name: 'Garland 2', image: '/images/pic 2.jpg' },
    { id: 3, name: 'Garland 3', image: '/images/pic 3.jpg' },
    { id: 4, name: 'Garland 4', image: '/images/pic 4.jpg' },
    { id: 5, name: 'Garland 5', image: '/images/pic 5.jpg' },
    { id: 6, name: 'Garland 6', image: '/images/pic 6.jpg' },
    { id: 8, name: 'Garland 8', image: '/images/pic 8.jpg' },
    { id: 9, name: 'Garland 9', image: '/images/pic 9.jpg' },
    { id: 10, name: 'Garland 10', image: '/images/pic 10.jpg' },
    { id: 11, name: 'Garland 11', image: '/images/pic 11.jpg' },
    { id: 12, name: 'Garland 12', image: '/images/pic 12.jpg' },
    { id: 13, name: 'Garland 13', image: '/images/pic 13.jpg' },
    { id: 14, name: 'Garland 14', image: '/images/pic 14.jpg' },
  ];

  const filteredGarlands = garlands.filter(garland =>
    garland.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <img src="/My first design.png" alt="Garland Shop Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <h1>Welcome to Garland Shop</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <div className="garland-tiles">
        {filteredGarlands.map(garland => (
          <div key={garland.id} className="garland-tile">
            <img src={garland.image} alt={garland.name} className="garland-image" />
            <p>{garland.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
