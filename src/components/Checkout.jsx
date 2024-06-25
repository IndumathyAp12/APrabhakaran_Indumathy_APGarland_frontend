import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import orderService from '../services/orderService';
import CartItem from './CartItem';

const Checkout = () => {
  const { state: { items: cart }, clearCart } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [shippingMethod, setShippingMethod] = useState('standard');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleCheckout = async () => {
    try {
      const orderDetails = {
        items: cart,
        paymentMethod,
        shippingMethod,
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };

      const response = await orderService.createOrder(orderDetails);

      console.log('Order placed successfully:', response);
      clearCart();
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
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
          <CartItem key={item._id} item={item} />
        ))}
        <button onClick={handleCheckout}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
