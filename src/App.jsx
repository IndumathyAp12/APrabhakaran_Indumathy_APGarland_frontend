import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Garlands from './pages/Garlands';
import Login from './pages/Login';
import Register from './pages/Register';
import { GarlandProvider } from './contexts/GarlandContext';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <GarlandProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garlands" element={<Garlands />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </GarlandProvider>
    </AuthProvider>
  );
};

export default App;
