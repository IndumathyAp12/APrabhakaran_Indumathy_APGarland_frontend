import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null); // State to hold error message

    useEffect(() => {
        fetchOrders(); // Fetch orders when component mounts
    }, []);

    const fetchOrders = async () => {
        try {
            // Make GET request to fetch orders from backend
            const response = await axios.get('/orders');
            setOrders(response.data.orders); 
        } catch (error) {
            console.error('Error fetching orders:', error);
            setError('Failed to fetch orders. Please try again later.'); 
        }
    };

    return (
        <div>
            <h1>Order History</h1>
            {error && <p className="error-message">{error}</p>} 
            <div className="order-list">
                {orders.map((order) => (
                    <div key={order._id} className="order-item">
                        <p>Order ID: {order._id}</p>
                        <p>Status: {order.status}</p>
                        <p>Total: ${order.total.toFixed(2)}</p>
                        <p>Products:</p>
                        <ul>
                            {order.products.map((product) => (
                                <li key={product.productId}>
                                    {product.quantity} x {product.productId.name} (${product.productId.price.toFixed(2)})
                                </li>
                            ))}
                        </ul>
                        <p>Ordered At: {new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistory;
