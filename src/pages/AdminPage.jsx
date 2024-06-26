import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchProducts();
    fetchUsers();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data); 
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      
      <section>
        <h3>Orders History</h3>
        <ul>
          {orders.map(order => (
            <li key={order.id}>{/* Display order details here */}</li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3>Products Data</h3>
        <ul>
          {products.map(product => (
            <li key={product.id}>{/* Display product details here */}</li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3>Users Data</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>{/* Display user details here */}</li>
          ))}
        </ul>
      </section>
      
    </div>
  );
};

export default AdminPage;