import React, { useState } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../../UserPool';
import styles from './Confirmation.module.css';
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();



    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })

        user.confirmRegistration(verificationCode, false, (err, data) => {
            if (err) {
                console.error(err)
            }
            console.log(data);
            navigate('/login')
        });

    };


    return (
        <div>
            <h1 className={styles.confimation__msg}>Cadastro realizado com sucesso!</h1>
            <h3 className={styles.text__hint}>Para continuar, confirme seu email com o codigo que foi enviado</h3>
            <form className={styles.form__confirm} onSubmit={onSubmit}>
                <label className={styles.label__confirm} htmlFor='email'>Email for confirm with code</label>
                <input className={styles.input__confirm} value={email} onChange={(event) => setEmail(event.target.value)} />
                <label className={styles.label__confirm} htmlFor='code'>Verification Code</label>
                <input className={styles.input__confirm} value={verificationCode} onChange={(event) => setVerificationCode(event.target.value)} />

                <button className={styles.button__submit__confirm} type='submit' >Confirm Registration</button>
            </form>
        </div>
    )
}