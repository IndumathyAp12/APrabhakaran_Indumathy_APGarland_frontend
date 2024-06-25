import React, { useEffect, useState } from 'react';
import orderService from '../services/orderService';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const ordersData = await orderService.getAllOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            Order ID: {order._id} - Total: ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
