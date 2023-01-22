import React, { useState } from 'react';
import styles from './Confirmation.module.css';
import globalStyles from '../../globalStyles.module.css';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Alert from '@mui/material/Alert';

import { Auth } from 'aws-amplify';

const initialCredentialsState = {
    authCode: '',
}

export default function Confirmation() {
    const navigate = useNavigate();
    
    let username = localStorage.getItem('username');

    const [credentials, setCredentials] = useState(initialCredentialsState);
    const [resendSuccess, setResendSuccess] = useState(false);

    function onChange (event) {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        console.log(credentials);
        setResendSuccess(false);
    }

    async function confirmSignUp(event) {
        event.preventDefault();
        let authCode = credentials.authCode;
        try {
            await Auth.confirmSignUp(username, authCode);
            localStorage.removeItem('username');
        } catch (error) {
            console.log('Error confirming sign up', error);
        }
    }

    async function resendCode(event) {
        event.preventDefault();
        try {
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
            setResendSuccess(true);
        } catch (error) {
            console.log('error resending code: ', error);
        }
    }

    return (
        <div>
            <h1 className={styles.confimation__msg}>Cadastro realizado com sucesso, {username}!</h1>
            <h3 className={styles.text__hint}>Para continuar, confirme seu cadastro com o código que foi enviado no email</h3>
            <IconButton onClick={() => navigate('/register')}>
                <ArrowBackIcon fontSize='large' className={styles.arrow__back} />
            </IconButton>
            <div className={styles.cardglobal__center}>
                <form className={globalStyles.form__global} onSubmit={confirmSignUp}>
                    <label 
                        style={{marginBottom: '4px', color: '#F0DB4F'}} 
                        className={globalStyles.label__global}>
                            Código de confirmação
                    </label>
                    <input className={globalStyles.input__global} type="number" name='authCode' onChange={onChange}/>
                    <button 
                        style={{marginTop: '20px', backgroundColor: '#F0DB4F', color: '#2b2b2b'}} 
                        className={globalStyles.button__submit__global} 
                        type='submit'>
                            Confirmar
                    </button>
                </form>
            </div>
            <div className={styles.resend__center}>
                <h3>Se você não recebeu um código de verificação no seu email, clique abaixo para reenviarmos um novo código</h3>
                <button 
                    onClick={resendCode}
                    style={{marginTop: '20px', backgroundColor: '#F0DB4F', color: '#2b2b2b'}} 
                    className={styles.resend__code__btn} >
                        Reenviar código
                </button>
            </div>
            { resendSuccess && 
                <Alert 
                    variant='filled' 
                    onClose={() => {setResendSuccess(false)}} 
                    className={styles.alert__error} 
                    severity="success">Código de verificação enviado!
                </Alert> }
            
        </div>
    )
}