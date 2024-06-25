import React, { createContext, useContext, useReducer } from 'react';
import axios from '../Axios';

const GarlandContext = createContext();

const initialState = {
  garlands: [],
  loading: false,
  error: null,
};

const garlandReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_GARLANDS_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_GARLANDS_SUCCESS':
      return { ...state, loading: false, garlands: action.payload };
    case 'FETCH_GARLANDS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const GarlandProvider = ({ children }) => {
  const [state, dispatch] = useReducer(garlandReducer, initialState);

  const fetchGarlands = async () => {
    dispatch({ type: 'FETCH_GARLANDS_START' });
    try {
      const response = await axios.get('/products');
      dispatch({ type: 'FETCH_GARLANDS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_GARLANDS_FAILURE', payload: error.message });
    }
  };

  return (
    <GarlandContext.Provider value={{ state, fetchGarlands }}>
      {children}
    </GarlandContext.Provider>
  );
};

export const useGarlandContext = () => {
  return useContext(GarlandContext);
};
