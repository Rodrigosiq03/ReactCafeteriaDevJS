import { useNavigate } from 'react-router-dom';

import styles from './Index.module.css';

import Menu from '../../components/Menu';

import { Auth } from 'aws-amplify';
import { useAuth } from '../../utils';

export default function MenuPage() {

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  async function logOut() {
    try {
      await Auth.signOut();
      navigate('/');
      setAuth(false);
    } catch (err) {
      console.log('error signing out: ', err);
    }
  }

  return (
    <div>
        <h1 className={styles.title__welcome}>Bem vindo ao Cafeteria Dev JS, { username }</h1>
        <Menu/>
        <div className={styles.center__logout__btn}>
            <button className={styles.logout__btn} onClick={logOut} >Sair</button>
        </div>
    </div>
  )
}