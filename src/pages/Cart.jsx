import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';

const Cart = () => {
  const { state, removeFromCart, updateCartItemQuantity } = useCartContext();
  const { items } = state;
  const [editingItemId, setEditingItemId] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  // Check if items exist and are an array
  if (!items || !Array.isArray(items)) {
    return <div className="container">Loading...</div>;
  }

  // Calculate total price using reduce
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleEditQuantity = (item) => {
    setEditingItemId(item._id);
    setNewQuantity(item.quantity);
  };

  const handleQuantityChange = (e) => {
    setNewQuantity(parseInt(e.target.value, 10));
  };

  const handleSaveQuantity = (id) => {
    updateCartItemQuantity(id, newQuantity);
    setEditingItemId(null);
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
                {editingItemId === item._id ? (
                  <div>
                    <input
                      type="number"
                      value={newQuantity}
                      onChange={handleQuantityChange}
                      min="1"
                    />
                    <button onClick={() => handleSaveQuantity(item._id)}>Save</button>
                  </div>
                ) : (
                  <p>Quantity: {item.quantity}</p>
                )}
                <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                <button onClick={() => handleEditQuantity(item)}>Edit</button>
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
