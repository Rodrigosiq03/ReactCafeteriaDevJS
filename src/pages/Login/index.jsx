import React, { useState, useContext } from 'react';
import { AccountContext } from '../../components/AccountLogin';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext)


    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email, password)
            .then(data => {
                console.log("Logged in!", data);
            })
            .catch(err => {
                console.error("Failed to log in ", err);
            })
    }


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