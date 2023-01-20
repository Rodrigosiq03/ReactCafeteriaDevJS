import React, { useState } from 'react';
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
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(initialCredentialsState);
    const [incorrectError, setIncorrectError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);
    const [admin, setAdmin] = useState(false);

    function isAdmin (event) {
        event.preventDefault();
        if (!admin) {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
        console.log(admin);
    }

    function onChange (event) {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        setEmptyError(false);
        setIncorrectError(false);
    }

    async function logIn(event) {
        event.preventDefault();
        const { username, password } = credentials;
        try {
            const user = await Auth.signIn(username, password);
            console.log(user);
            if (!isAdmin) {
                navigate('/menu')
            } else {
                navigate('/admin')
            }

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
                <LoginForm submitFunction={ logIn } admin={ admin } isAdmin={ isAdmin } onChange={onChange}/>
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