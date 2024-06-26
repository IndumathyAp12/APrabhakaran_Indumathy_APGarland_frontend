import React, { createContext, useContext, useReducer } from 'react';
import axios from '../Axios';

// Create the AuthContext to provide authentication state and functions to components
const AuthContext = createContext();

// Initial state of the authentication context
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Reducer function to handle state changes based on action types
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      // Sets loading to true and clears any previous errors
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      // Updates the state with the logged-in user and sets loading to false
      return { ...state, loading: false, user: action.payload };
    case 'LOGIN_FAILURE':
      // Sets loading to false and updates the state with the error message
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      // Clears the user state
      return { ...state, user: null };
    default:
      // Returns the current state if the action type is unrecognized
      return state;
  }
};

// AuthProvider component to provide the authentication context to children components
export const AuthProvider = ({ children }) => {
  // Use the useReducer hook to manage auth state with the authReducer and initialState
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Function to handle user login
  const login = async (username, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await axios.post('/users/login', { email: username, password });
      // Store the token in local storage
      localStorage.setItem('token', response.data.token);
      // Dispatch success action with the logged-in user as payload
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.user });
    } catch (error) {
      // Dispatch failure action with the error message as payload
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response?.data?.message || 'Login failed' });
    }
  };

  // Function to handle user logout
  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Dispatch logout action
    dispatch({ type: 'LOGOUT' });
  };

  // Provide the auth state and functions to children components
  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access the auth context
export const useAuthContext = () => {
  return useContext(AuthContext);
};
