import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import globalStyles from '../../globalStyles.module.css';

import CardGlobal from '../../components/CardGlobal';
import LoginForm from '../../components/LoginForm';

import Alert from '@mui/material/Alert';

import { Auth } from 'aws-amplify';


const initialCredentialsState = {
    username: '',
    password: '',
}

export default function Login() {
    useEffect(() => {
        checkUser();
    }, );

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(initialCredentialsState);
    const [user, setUser] = useState(null);
    const [incorrectError, setIncorrectError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);

    function onChange (event) {
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

    async function logIn(event) {
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
        } catch (error) {
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
        <div className={globalStyles.div__container__card}>
            <CardGlobal>
                <h1 className={globalStyles.text__hint__global}>Realize o Login</h1>
                <LoginForm submitFunction={ logIn } onChange={onChange}/>
                <Link className={styles.link__register} to={'/forgotpassword'}>Esqueceu sua senha?</Link>
                <Link className={styles.link__register} to={'/register'}>Registre-se</Link>
            </CardGlobal>
            { incorrectError && 
                <Alert 
                    variant='filled' 
                    onClose={() => {setIncorrectError(false)}} 
                    className={styles.alert__error} 
                    severity="error">Usuário ou senha incorretos!!
                </Alert> }
            { emptyError && 
                <Alert 
                    variant='filled' 
                    onClose={() => {setEmptyError(false)}} 
                    className={styles.alert__error} 
                    severity="error">Preencha todos os campos!!
                </Alert> }
        </div>
    )
}