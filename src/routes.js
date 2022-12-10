import React from 'react';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasePage from './components/BasePage';
import Index from './pages/IndexPage';
import { AccountLogin } from './components/AccountLogin';
import { AccountRegister } from './components/AccountRegister';
import globalStyles from './globalStyles.module.css'

export default function AppRoutes() {
  return (
    <Router>
      <h1 className={globalStyles.principal__title}>Cafeteria Dev JS</h1>
      <AccountLogin>
        <Routes>
          <Route path='/' element={<BasePage />} />
          <Route path='/login' element={
            <Login />
          } 
          />
          <Route path='/register' element={
            <AccountRegister>
              <Signup />
            </AccountRegister> 
          } 
          />
          <Route path='/confirm' element={<Confirmation />} />
          <Route path='/menu' element={<Index />} />
        </Routes>
      </AccountLogin>  
    </Router>
  );
}


