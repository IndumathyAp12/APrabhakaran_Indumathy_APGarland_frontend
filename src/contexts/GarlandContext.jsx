import React, { createContext, useContext, useReducer } from 'react';
import axios from '../Axios';

// Create the GarlandContext to provide garland state and functions to components
const GarlandContext = createContext();

// Initial state of the garland context
const initialState = {
  garlands: [],
  loading: false,
  error: null,
};

// Reducer function to handle state changes based on action types
const garlandReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_GARLANDS_START':
      // Sets loading to true and clears any previous errors
      return { ...state, loading: true, error: null };
    case 'FETCH_GARLANDS_SUCCESS':
      // Updates the state with the fetched garlands and sets loading to false
      return { ...state, loading: false, garlands: action.payload };
    case 'FETCH_GARLANDS_FAILURE':
      // Sets loading to false and updates the state with the error message
      return { ...state, loading: false, error: action.payload };
    default:
      // Returns the current state if the action type is unrecognized
      return state;
  }
};

// GarlandProvider component to provide the garland context to children components
export const GarlandProvider = ({ children }) => {
  // Use the useReducer hook to manage garland state with the garlandReducer and initialState
  const [state, dispatch] = useReducer(garlandReducer, initialState);

  // Function to fetch garlands from the backend
  const fetchGarlands = async () => {
    dispatch({ type: 'FETCH_GARLANDS_START' });
    try {
      const response = await axios.get('/products');
      // Dispatch success action with the fetched garlands as payload
      dispatch({ type: 'FETCH_GARLANDS_SUCCESS', payload: response.data });
    } catch (error) {
      // Dispatch failure action with the error message as payload
      dispatch({ type: 'FETCH_GARLANDS_FAILURE', payload: error.message });
    }
  };

  // Provide the garland state and fetchGarlands function to children components
  return (
    <GarlandContext.Provider value={{ state, fetchGarlands }}>
      {children}
    </GarlandContext.Provider>
  );
};

// Custom hook to easily access the garland context
export const useGarlandContext = () => {
  return useContext(GarlandContext);
};
