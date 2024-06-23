import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const GarlandContext = createContext();

const initialState = {
  garlands: [],
  loading: true,
  error: null,
};

const garlandReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        garlands: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const GarlandProvider = ({ children }) => {
  const [state, dispatch] = useReducer(garlandReducer, initialState);

  const fetchGarlands = async () => {
    try {
      const response = await axios.get('/api/garlands');
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
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
