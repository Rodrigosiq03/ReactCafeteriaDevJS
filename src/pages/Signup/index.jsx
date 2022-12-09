import React, { useState } from 'react';
import UserPool from '../../UserPool';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        navigate('/confirm')

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err)
            }
            console.log(data);
            navigate('/confirm')
        })
    };


    return (
        <div>
            <h1 className={styles.text__hint}>Realize o Cadastro</h1>
            <form className={styles.formSignup} onSubmit={onSubmit}>
                <label className={styles.label__signup} htmlFor='email'>Email</label>
                <input className={styles.input__signup} value={email} onChange={(event) => setEmail(event.target.value)} />
                <label className={styles.label__signup} htmlFor='password'>Password</label>
                <input className={styles.input__signup} value={password} onChange={(event) => setPassword(event.target.value)} />

                <button className={styles.button__submit__signup} type='submit' >Signup</button>
            </form>
        </div>
    )
}