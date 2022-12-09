import React, { useState, useContext } from 'react';
import styles from './Signup.module.css';
import { AccountContext } from '../../components/AccountRegister';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const { authenticate } = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email, password)
            .then(data => {
                console.log("Registered!", data);
            })
            .catch(err => {
                console.error("Failed to register!", err);
            })
    }


    return (
        <div>
            <h1 className={styles.text__hint}>Realize o Cadastro</h1>
            <form className={styles.form__signup} onSubmit={onSubmit}>
                <label className={styles.label__signup} htmlFor='email'>Email</label>
                <input className={styles.input__signup} value={email} onChange={(event) => setEmail(event.target.value)} />
                <label className={styles.label__signup} htmlFor='password'>Password</label>
                <input className={styles.input__signup} value={password} onChange={(event) => setPassword(event.target.value)} />

                <button className={styles.button__submit__signup} type='submit' >Signup</button>
            </form>
        </div>
    )
}