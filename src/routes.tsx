import { Route, Routes } from 'react-router-dom';

import Confirmation from './Presentation/pages/Confirmation';
import Signup from './Presentation/pages/Signup';
import Menu from './Presentation/pages/MenuPage';
import Admin from './Presentation/pages/Admin';
import FunctionsADMIN from './Presentation/components/FunctionsADMIN';
import Cardapio from './Presentation/pages/Cardapio';
import SobreNos from './Presentation/pages/SobreNos';
import Contato from './Presentation/pages/Contato';
import VerProdutos from './Presentation/components/VerProdutos';
import CriarProduto from './Presentation/components/CriarProduto';
import AtualizarProduto from './Presentation/components/AtualizarProduto';
import FormEditProduct from './Presentation/components/FormEditProduct';
import RemoverProduto from './Presentation/components/RemoverProduto';
import FormRemoveProduct from './Presentation/components/FormRemoveProduct';
import Carrinho from './Presentation/pages/Carrinho';
import ForgotPassword from './Presentation/pages/ForgotPassword';
import ForgotPasswordConfirmation from './Presentation/pages/ForgotPasswordConfirmation';
import { Home, Login, Agendamento } from './Presentation/pages';
import NavBar from './Presentation/components/NavBar';
import { useAuth } from './Presentation/hooks/Auth';
import NotAuthNavBar from './Presentation/components/NotAuthNavBar';
import { CartProvider } from './Presentation/hooks/Cart';

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

        <Route path='/cardapio' element={
          <CartProvider>
            <Cardapio />
          </CartProvider>
        }/>
        <Route path='/carrinho' element={
          <CartProvider>
            <Carrinho />
          </CartProvider>
        } />

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


