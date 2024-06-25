import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <p>{item.name} - ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default CartItem;
