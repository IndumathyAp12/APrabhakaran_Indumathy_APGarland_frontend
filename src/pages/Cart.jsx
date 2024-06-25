import React from 'react';
import { useCartContext } from '../contexts/CartContext';

const Cart = () => {
  const { state, removeFromCart } = useCartContext();
  const { items } = state;

  // Check if items exists and is an array
  if (!items || !Array.isArray(items)) {
    return <div className="container">Loading...</div>;
  }

  // Calculate total price using reduce
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item._id} className="cart-item">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
              </div>
            ))}
          </div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
