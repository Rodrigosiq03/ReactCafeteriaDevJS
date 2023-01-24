import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import styles from './ForgotPassword.module.css';
import globalStyles from '../../globalStyles.module.css';

import Alert from '@mui/material/Alert';

export default function ForgotPassword () {
    const navigate = useNavigate();

    const [emptyError, setEmptyError] = useState(false);
    const [notFoundError, setNotFoundError] = useState(false);

    async function forgotPassword(event) {
        event.preventDefault();
        const username = event.target[0].value;
        try {
            await Auth.forgotPassword(username)
            navigate('/forgot-password-confirmation')
            localStorage.setItem('username', username);
        }
        catch (error) {
            console.error("Failed to send code ", error);
            if (error.message === 'Username cannot be empty') {
                setEmptyError(true);
            }
            if (error.code === 'UserNotFoundException') {
                setNotFoundError(true);
            }
        }
    }

    return (
        <div>
            <h2 className={styles.title__forgot__password}>Esqueceu sua senha?</h2>
            <p className={styles.text__forgot__password}>Não se preocupe, digite seu usuário abaixo e enviaremos um código para você redefinir sua senha</p>
            <form className={globalStyles.form__global} onSubmit={forgotPassword}>
                <label className={styles.label__username}>Username</label>
                <input className={globalStyles.input__global} />
                <button className={styles.button__submit} type='submit'>Enviar código</button>
            </form>
            <Link to='/login' className={styles.link__login}>Voltar para o login</Link>
            { emptyError && 
                <Alert 
                    className={styles.alert__error} 
                    onClose={() => setEmptyError(false)} 
                    severity="error" 
                    variant='filled'>
                        Preencha o campo acima!!
                </Alert> }
            { notFoundError &&
                <Alert
                    className={styles.alert__error}
                    onClose={() => setNotFoundError(false)}
                    severity="error"
                    variant='filled'>
                        Usuário não encontrado!!
                </Alert> }
        </div>
    )
}