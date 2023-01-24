import React, { useState } from 'react';

import styles from './Signup.module.css';
import globalStyles from '../../globalStyles.module.css'

import Alert from '@mui/material/Alert';

import CardGlobal from '../../components/CardGlobal';
import SignUpForm from '../../components/SignUpForm';

import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';

const initialCredentialsState = {
    username: '',
    password: '',
    confirmpassword: '',
    email: '',
}

export default function Signup() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(initialCredentialsState);
    const [incorrectError, setIncorrectError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);
    const [alreadyExistsError, setAlreadyExistsError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    function onChange (event) {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        setEmptyError(false);
        setIncorrectError(false);
        setAlreadyExistsError(false);
        setPasswordLengthError(false);
        setPasswordMatchError(false);
    }

    async function SignUp(event) {
        event.preventDefault();
        const { username, password, email, confirmpassword } = credentials;
        if (password !== confirmpassword) {
            setPasswordMatchError(true);
            return;
        }
        try {
            const user = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            });
            console.log(user);
            navigate('/confirm')
        } catch (error) {
            
            console.error("Failed to sign up ", error);
            console.log(error.message);
            if (error.message === 'User already exists') {
                setAlreadyExistsError(true);
            }
            if (error.code === 'InvalidParameterException') {
                setIncorrectError(true);
            }
            if (error.message === 'Password did not conform with policy: Password not long enough') {
                setPasswordLengthError(true);
            }
            if (error.message === 'Username cannot be empty' || error.message === 'Custom auth lambda trigger is not configured for the user pool.') {
                setEmptyError(true);
            }
        }
        localStorage.setItem('username', username);

    }

    return (
        <div className={globalStyles.div__container__card}>
            <CardGlobal>
                <h1 className={styles.text__hint__register}>Realize o Cadastro</h1>
                <SignUpForm onChange={onChange} SignUp={SignUp}/>
                <Link className={styles.link__login} to={'/login'}>Login</Link>
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
            { alreadyExistsError &&
                <Alert
                    variant='filled'
                    onClose={() => {setAlreadyExistsError(false)}}
                    className={styles.alert__error}
                    severity="error">Usuário já cadastrado!!
                </Alert> }
            { passwordLengthError &&
                <Alert
                    variant='filled'
                    onClose={() => {setPasswordLengthError(false)}}
                    className={styles.alert__error}
                    severity="error">A senha deve ter no mínimo 8 caracteres!!
                </Alert> }
            { passwordMatchError &&
                <Alert
                    variant='filled'
                    onClose={() => {setPasswordMatchError(false)}}
                    className={styles.alert__error}
                    severity="error">As senhas não conferem!!
                </Alert> }
        </div>
    )
}