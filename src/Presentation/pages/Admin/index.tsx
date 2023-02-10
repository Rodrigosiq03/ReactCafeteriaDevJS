import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { Link } from '../../../Presentation/styledComponents/Link';
import { TextAdminHome, TitleAdminHome } from '../../../Presentation/styledComponents/TextAdminHome';
import { useAuth } from '../../hooks/Auth';
import { CenterLogoutBtn } from '../../styledComponents/CenterLogoutBtn';
import { LogoutBtn } from '../../styledComponents/LogoutBtn';

export default function AdminPage() {

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  async function logOut() {
    await Auth.signOut();
    setAuth(false);
    navigate('/');
  }

  return (
    <div>
      <TitleAdminHome>
        Olá, você é um ADMIN e possui funções de ADMIN!!
      </TitleAdminHome>
      <TextAdminHome>
        Clique abaixo para começar a utilizar as funcionalidades de ADMIN
      </TextAdminHome>
      <Link style={{ color: '#F0DB4F', textDecoration: 'underline' }} href='/admin/functions'>ADMIN</Link>
      <CenterLogoutBtn>
        <LogoutBtn onClick={logOut} >Sair</LogoutBtn>
      </CenterLogoutBtn>
    </div>
  )
}