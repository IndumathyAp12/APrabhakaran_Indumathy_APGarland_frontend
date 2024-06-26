import React, { createContext, useContext, useReducer } from 'react';

// Create the CartContext to provide cart state and functions to components
const CartContext = createContext();

// Initial state of the cart, starting with an empty items array
const initialState = {
  items: [],
};

// Reducer function to handle state changes based on action types
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Adds a new item to the cart
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      // Removes an item from the cart based on its ID
      return { ...state, items: state.items.filter(item => item._id !== action.payload) };
    case 'UPDATE_QUANTITY':
      // Updates the quantity of an item in the cart
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'CLEAR_CART':
      // Clears all items from the cart
      return { ...state, items: [] };
    default:
      // Returns the current state if the action type is unrecognized
      return state;
  }
};

// CartProvider component to provide the cart context to children components
export const CartProvider = ({ children }) => {
  // Use the useReducer hook to manage cart state with the cartReducer and initialState
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Function to add an item to the cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Function to remove an item from the cart by its ID
  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Function to update the quantity of an item in the cart
  const updateCartItemQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Provide the cart state and action functions to children components
  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateCartItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to easily access the cart context
export const useCartContext = () => {
  return useContext(CartContext);
};
