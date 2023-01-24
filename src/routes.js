import React from 'react';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasePage from './components/BasePage';
import Index from './pages/IndexPage';
import Admin from './pages/Admin';
import FunctionsADMIN from './components/FunctionsADMIN';
import Cardapio from './pages/Cardapio';
import Agendamento from './pages/Agendamento';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import VerProdutos from './components/VerProdutos';
import CriarProduto from './components/CriarProduto';
import AtualizarProduto from './components/AtualizarProduto';
import FormEditProduct from './components/FormEditProduct';
import RemoverProduto from './components/RemoverProduto';
import FormRemoveProduct from './components/FormRemoveProduct';
import Carrinho from './pages/Carrinho';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordConfirmation from './pages/ForgotPasswordConfirmation';
import NavBar from './components/NavBar';


export default function AppRoutes() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<BasePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/forgot-password-confirmation' element={<ForgotPasswordConfirmation />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/confirm' element={<Confirmation />} />
          <Route path='/menu' element={<Index />} />
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/agendamento' element={<Agendamento />} />
          <Route path='/sobrenos' element={<SobreNos />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/functions' element={<FunctionsADMIN/>} />
          <Route path='/admin/functions/verprodutos' element={<VerProdutos />} />
          <Route path='/admin/functions/criarproduto' element={<CriarProduto />} />
          <Route path='/admin/functions/atualizarproduto' element={<AtualizarProduto />} />
          <Route path='/admin/functions/atualizarproduto/:data' element={<FormEditProduct />} />
          <Route path='/admin/functions/removerproduto' element={<RemoverProduto />} />
          <Route path='/admin/functions/removerproduto/:data' element={<FormRemoveProduct />} />
          <Route path='*' element={<h1>404 - Not Found</h1>} />
        </Routes> 
    </Router>
  );
}


