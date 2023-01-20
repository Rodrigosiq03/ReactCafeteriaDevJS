import React, { useState } from 'react';

import styles from './Signup.module.css';
import globalStyles from '../../globalStyles.module.css'

import { lowerCaseLetters, upperCaseLetters, symbolsValid, numbersValid } from '../../utils/regex';

import Alert from '@mui/material/Alert';

import CardGlobal from '../../components/CardGlobal';
import SignUpForm from '../../components/SignUpForm';

import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

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

    function onChange (event) {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        console.log(credentials);
        setEmptyError(false);
        setIncorrectError(false);
    }

    async function SignUp(event) {
        event.preventDefault();
        const { username, password, email } = credentials;
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
        </div>
    )
}