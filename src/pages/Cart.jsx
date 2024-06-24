import React from 'react';
import { useCartContext } from '../contexts/CartContext';

const Cart = () => {
  const { state, removeFromCart } = useCartContext();
  const { cart } = state;

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>
          <p>Total Price: ${totalPrice}</p>
          <button>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;