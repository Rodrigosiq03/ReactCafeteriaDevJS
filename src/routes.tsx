import { Route, Routes } from 'react-router-dom';

import Confirmation from './pages/Confirmation';
import Signup from './pages/Signup';
import Menu from './pages/MenuPage';
import Admin from './pages/Admin';
import FunctionsADMIN from './components/FunctionsADMIN';
import Cardapio from './pages/Cardapio';
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
import { Home, Login, Agendamento } from './pages';
import NavBar from './components/NavBar';
import { useAuth } from './hooks';
import NotAuthNavBar from './components/NotAuthNavBar';

export default function AppRoutes() {

  const { auth } = useAuth();

  return (
    <>
      {auth ? <NavBar /> : <NotAuthNavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/forgot-password-confirmation' element={<ForgotPasswordConfirmation />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/confirm' element={<Confirmation />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/agendamento' element={<Agendamento />} />
        <Route path='/sobre-nos' element={<SobreNos />} />
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
    </>
  );

}


