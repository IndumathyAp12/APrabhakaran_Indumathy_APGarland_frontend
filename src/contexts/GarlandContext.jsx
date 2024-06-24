import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

const GarlandContext = createContext();

const initialState = {
  garlands: [],
  loading: true,
  error: null,
};

const garlandReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, garlands: Array.isArray(action.payload) ? action.payload : [], loading: false };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const GarlandProvider = ({ children }) => {
  const [state, dispatch] = useReducer(garlandReducer, initialState);

  const fetchGarlands = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await axios.get('https://aprabhakaran-indumathy-apgarland-backend.onrender.com/products');
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    fetchGarlands();
  }, []);

  return (
    <GarlandContext.Provider value={{ state, fetchGarlands }}>
      {children}
    </GarlandContext.Provider>
  );
};

export const useGarlandContext = () => useContext(GarlandContext);
