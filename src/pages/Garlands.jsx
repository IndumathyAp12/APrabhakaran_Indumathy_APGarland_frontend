import React, { useEffect, useState } from 'react';
import { useGarlandContext } from '../contexts/GarlandContext';
import SearchBar from '../components/SearchBar';
import { useCartContext } from '../contexts/CartContext';

const Garlands = () => {
  const { state, fetchGarlands } = useGarlandContext();
  const { addToCart } = useCartContext();
  const { garlands, loading, error } = state;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchGarlands();
  }, []);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity });
    setQuantity(1);
  };

  return (
    <div className="container">
      <h1>Garlands</h1>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="garland-list">
          {garlands.map(product => (
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
