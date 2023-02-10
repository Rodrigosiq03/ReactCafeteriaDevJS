import { useNavigate } from 'react-router-dom';

import styles from './Index.module.css';

import Menu from '../../components/Menu';

import { Auth } from 'aws-amplify';
import { useAuth } from '../../../Presentation/hooks/Auth';
import { useState } from 'react';
import { CenterLogoutBtn } from '../../styledComponents/CenterLogoutBtn';
import { LogoutBtn } from '../../styledComponents/LogoutBtn';

export default function MenuPage() {

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');

  const getUsername = async () => {
    const userAuth = await Auth.currentAuthenticatedUser()
    const username = userAuth.storage.username
    
    return username
  } 

  getUsername().then((username) => {
    setUsername(username)
  })
  
    

  async function logOut() {
    await Auth.signOut();
    setAuth(false);
    navigate('/');
  }

  return (
    <div>
      <h1 className={styles.title__welcome}>Bem vindo ao Cafeteria Dev JS, { username }</h1>
      <Menu/>
      <CenterLogoutBtn>
        <LogoutBtn onClick={logOut} >Sair</LogoutBtn>
      </CenterLogoutBtn>
    </div>
  )
}