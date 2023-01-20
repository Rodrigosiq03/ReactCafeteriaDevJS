import React, { useState } from 'react';
import styles from './Confirmation.module.css';
import globalStyles from '../../globalStyles.module.css';
import { useNavigate } from 'react-router-dom';
import CardGlobal from '../../components/CardGlobal';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Auth } from 'aws-amplify';

const initialCredentialsState = {
    authCode: '',
}

export default function Confirmation() {
    const navigate = useNavigate();
    
    let username = localStorage.getItem('username');

    const [credentials, setCredentials] = useState(initialCredentialsState);

    function onChange (event) {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        console.log(credentials);
    }

    async function confirmSignUp(event) {
        let authCode = credentials.authCode;
        event.preventDefault();
        try {
            await Auth.confirmSignUp(username, authCode);
            localStorage.removeItem('username');
            navigate('/login');
        } catch (error) {
            console.log('Error confirming sign up', error);
        }
    }

    return (
        <div>
            <h1 className={styles.confimation__msg}>Cadastro realizado com sucesso, {username}!</h1>
            <h3 className={styles.text__hint}>Para continuar, confirme seu cadastro com o codigo que foi enviado no email</h3>
            <IconButton onClick={() => navigate('/register')}>
                <ArrowBackIcon fontSize='large' className={styles.arrow__back} />
            </IconButton>
            <div className={styles.cardglobal__center}>
                <form className={globalStyles.form__global} onSubmit={confirmSignUp}>
                    <label style={{marginBottom: '4px', color: '#F0DB4F'}} className={globalStyles.label__global}>Código de confirmação</label>
                    <input className={globalStyles.input__global} type="number" name='authCode' onChange={onChange}/>
                    <button style={{marginTop: '20px', backgroundColor: '#F0DB4F', color: '#2b2b2b'}} className={globalStyles.button__submit__global} type='submit'>Confirmar</button>
                </form>
            </div>
            
        </div>
    )
}