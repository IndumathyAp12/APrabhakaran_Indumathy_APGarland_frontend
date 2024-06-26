import React, { useEffect, useState } from 'react';
import { useGarlandContext } from '../contexts/GarlandContext';
import SearchBar from '../components/SearchBar';
import { useCartContext } from '../contexts/CartContext';

// Garlands component
const Garlands = () => {
   // Destructure necessary values and functions from GarlandContext and CartContext
  const { state, fetchGarlands } = useGarlandContext();
  const { addToCart } = useCartContext();
  const { garlands, loading, error } = state;
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query input

  useEffect(() => {
    fetchGarlands();// Fetch garlands when component mounts
  }, []);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity }); // Add product to cart with specified quantity
    setQuantity(1);
  };

  // Filtered garlands based on search query
  const filteredGarlands = garlands.filter(garland =>
    garland.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

    // Render the component
  return (
    <div className="container">
      <h1>Garlands</h1>
      {/* Pass value and onChange props to SearchBar */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="garland-list">
          {filteredGarlands.map(product => (
            <div key={product._id} className="garland-item">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <img src={product.imageUrl} alt={product.name} />
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                style={{ marginBottom: '10px' }}
              />
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Garlands;
