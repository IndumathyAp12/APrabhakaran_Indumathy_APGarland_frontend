import axios from 'axios';

const API_URL = 'http://localhost:5000/'; 

const orderService = {
  getAllOrders: async () => {
    try {
      const response = await axios.get(`${API_URL}/orders`);
      return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  },
  
  getOrderById: async (orderId) => {
    try {
      const response = await axios.get(`${API_URL}/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching order with ID ${orderId}:`, error);
      throw error;
    }
  },
  
  createOrder: async (orderData) => {
    try {
      const response = await axios.post(`${API_URL}/orders`, orderData);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },
  
  updateOrder: async (orderId, updatedOrderData) => {
    try {
      const response = await axios.put(`${API_URL}/orders/${orderId}`, updatedOrderData);
      return response.data;
    } catch (error) {
      console.error(`Error updating order with ID ${orderId}:`, error);
      throw error;
    }
  },
  
  deleteOrder: async (orderId) => {
    try {
      const response = await axios.delete(`${API_URL}/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting order with ID ${orderId}:`, error);
      throw error;
    }
  }
};

export default orderService;
