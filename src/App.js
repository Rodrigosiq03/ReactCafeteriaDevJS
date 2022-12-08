import React from 'react';
import Confirmation from './components/Confirmation';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';

function AppRoutes() {
  return (
    <div>
      <h1>Cadastro</h1>
      <Signup/>
      <h1>Confirmação</h1>
      <Confirmation/>
      <h1>Login</h1>
      <Login/>
    </div>
  );
}

export default AppRoutes;
