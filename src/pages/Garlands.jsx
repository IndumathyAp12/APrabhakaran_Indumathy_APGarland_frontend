import React, { useEffect } from 'react';
import { useGarlandContext } from '../contexts/GarlandContext';
import SearchBar from '../components/SearchBar';
import { useCartContext } from '../contexts/CartContext';

const Garlands = () => {
  const { state, fetchGarlands } = useGarlandContext();
  const { addToCart } = useCartContext();
  const { garlands, loading, error } = state;

  useEffect(() => {
    fetchGarlands();
  }, []);

  const handleAddToCart = (garland) => {
    addToCart(garland);
    };

  return (
    <div className="container">
      <h1>Garlands</h1>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="garland-list">
          {garlands.map(garland => (
            <div key={garland._id} className="garland-item">
              <h2>{garland.name}</h2>
              <p>{garland.description}</p>
              <p>${garland.price}</p>
              <img src={garland.imageUrl} alt={garland.name} />
              <button onClick={() => handleAddToCart(garland)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Garlands;
