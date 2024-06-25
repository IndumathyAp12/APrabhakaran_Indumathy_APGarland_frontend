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
import { GarlandProvider } from './contexts/GarlandContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ForgotPassword from './pages/ForgotPassword';
import ProfileDetails from './pages/ProfileDetails';

const App = () => {
  return (
    <AuthProvider>
      <GarlandProvider>
        <CartProvider>
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/garlands" element={<Garlands />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/user/*" element={<UserPage />} />
              <Route path="/profile" element={<ProfileDetails />} />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </CartProvider>
      </GarlandProvider>
    </AuthProvider>
  );
};

export default App;
