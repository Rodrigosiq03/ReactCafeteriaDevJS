import React from 'react';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasePage from './components/BasePage';
import Index from './pages/IndexPage';

export default function AppRoutes() {
  return (
    <Router>
      <h1>Cafeteria Dev JS</h1>
      <Routes>
        <Route path='/' element={<BasePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/confirm' element={<Confirmation />} />
        <Route path='/menu' element={<Index />} />
      </Routes>
    </Router>
  );
}


