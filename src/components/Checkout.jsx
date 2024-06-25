import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { cart } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [shippingMethod, setShippingMethod] = useState('standard');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, e.g., submit order, clear cart, etc.
    console.log('Implement checkout logic');
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <div className="checkout-details">
        <div>
          <h3>Payment Method</h3>
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div>
          <h3>Shipping Method</h3>
          <select value={shippingMethod} onChange={handleShippingMethodChange}>
            <option value="standard">Standard</option>
            <option value="express">Express</option>
          </select>
        </div>
      </div>
      <div className="checkout-cart">
        <h3>Order Summary</h3>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <button onClick={handleCheckout}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;