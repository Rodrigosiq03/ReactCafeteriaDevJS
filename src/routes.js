import React from 'react';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasePage from './components/BasePage';
import Index from './pages/IndexPage';
import { AccountLogin } from './components/AccountLogin';
import { AccountRegister } from './components/AccountRegister';
import globalStyles from './globalStyles.module.css';
import Admin from './pages/Admin';
import FunctionsADMIN from './components/FunctionsADMIN';
import Cardapio from './pages/Cardapio';
import Agendamento from './pages/Agendamento';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';


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
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/agendamento' element={<Agendamento />} />
          <Route path='/sobrenos' element={<SobreNos />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/:data' element={<FunctionsADMIN/>} />
        </Routes>
      </AccountLogin>  
    </Router>
  );
}


