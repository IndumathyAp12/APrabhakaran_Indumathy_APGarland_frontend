import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Garlands from './pages/Garlands';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import { GarlandProvider } from './contexts/GarlandContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ForgotPassword from './pages/ForgotPassword';
import ProfileDetails from './pages/ProfileDetails';

// Main App component
const App = () => {
  return (
    // Provide authentication context to the application
    <AuthProvider>
      {/* Provide garland data context to the application */}
      <GarlandProvider>
        {/* Provide cart context to the application */}
        <CartProvider>
          {/* Navbar component to be displayed on every page */}
          <Navbar />
          {/* ErrorBoundary to catch and display errors in the child components */}
          <ErrorBoundary>
            {/* Define routes for the application */}
            <Routes>
              {/* Define individual routes and their corresponding components */}
              <Route path="/" element={<Home />} />
              <Route path="/garlands" element={<Garlands />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/userpage" element={<UserPage />} />
              <Route path="/adminpage" element={<AdminPage />} />
              <Route path="/profile" element={<ProfileDetails />} />
            </Routes>
          </ErrorBoundary>
          {/* Footer component to be displayed on every page */}
          <Footer />
        </CartProvider>
      </GarlandProvider>
    </AuthProvider>
  );
};

export default App;
