import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../UserPool';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        })

        user.globalSignOut()

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data);
                navigate('/menu')
            },
            onFailure: (err) => {
                console.error("onFailure: ", err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            }
        })
    };


    return (
        <div>
            <h1 className={styles.text__hint}>Realize o Login</h1>
            <form className={styles.form__login} onSubmit={onSubmit}>
                <label className={styles.label__login} htmlFor='email'>Email</label>
                <input className={styles.input__login} value={email} onChange={(event) => setEmail(event.target.value)} />
                <label className={styles.label__login} htmlFor='password'>Password</label>
                <input className={styles.input__login} value={password} onChange={(event) => setPassword(event.target.value)} />

                <button className={styles.button__submit__login} type='submit' >Login</button>
            </form>

            <Link className={styles.link__register} to={'/register'}>Registre-se</Link>
        </div>
    )
}