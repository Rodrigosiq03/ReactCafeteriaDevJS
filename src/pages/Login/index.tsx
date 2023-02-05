import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CardGlobal from '../../components/CardGlobal';
import LoginForm from '../../components/LoginForm';
import { Link } from '../../styledComponents/Link';
import { Container } from '../../styledComponents/Container';
import { TextHint } from '../../styledComponents/TextHint';

import Alert from '@mui/material/Alert';

import { Auth } from 'aws-amplify';

import { css, keyframes } from 'styled-components';
import { LinkColor } from '../../styles/theme';
import { useAuth } from '../../hooks';


const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  alert__error: {
    margin: '10px',
  },
}

const initialCredentialsState = {
    username: '',
    password: '',
}


export default function LoginPage() {
  const { setAuth } = useAuth();
    
  useEffect(() => {
      checkUser();
  }, );

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState(initialCredentialsState);
  const [user, setUser] = useState(null);
  const [incorrectError, setIncorrectError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  function onChange (event: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;
      setCredentials({ ...credentials, [name]: value });
      setEmptyError(false);
      setIncorrectError(false);
  }

  async function checkUser() {
      try {
          const user = await Auth.currentAuthenticatedUser();
          setUser(user);
          console.log(user);
          if (user.username.includes('admin')) {
              navigate('/admin');
          }
          else {
              navigate('/menu');
          }
          localStorage.setItem('username', user.username);
      } catch (err) {
          console.log('user not signed in');
      }
  }

  async function logIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { username, password } = credentials;
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      if (username.includes('admin')) {
          navigate('/admin');
      } else {
          navigate('/menu');
      }
      localStorage.setItem('username', username);

      // change navbar links
      setAuth(true)
      
    } catch (error: any) {
      console.error("Failed to log in ", error);
      console.log(error.message);
      if (error.code === 'UserNotConfirmedException') {
          navigate('/confirm')
      }
      if (error.code === 'NotAuthorizedException') {
          navigate('/confirm')
      }
      if (error.code === 'UserNotFoundException') {
          setIncorrectError(true);
      }
      if (error.message === 'Username cannot be empty' || error.message === 'Custom auth lambda trigger is not configured for the user pool.') {
          setEmptyError(true);
      }
    }
  }


  return (
    <Container>
        <CardGlobal>
            <TextHint>Realize o Login</TextHint>
            <LoginForm submitFunction={ logIn } onChange={onChange}/>
            <Link href={'/forgotpassword'}>Esqueceu sua senha?</Link>
            <Link href={'/register'}>Registre-se</Link>
        </CardGlobal>
        { incorrectError && 
            <Alert 
                variant='filled' 
                onClose={() => {setIncorrectError(false)}} 
                style={styles.alert__error} 
                severity="error">Usuário ou senha incorretos!!
            </Alert> }
        { emptyError && 
            <Alert 
                variant='filled' 
                onClose={() => {setEmptyError(false)}} 
                style={styles.alert__error} 
                severity="error">Preencha todos os campos!!
            </Alert> }
    </Container>
  )
}