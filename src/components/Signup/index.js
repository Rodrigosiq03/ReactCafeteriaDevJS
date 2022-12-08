import React, { useState } from 'react';
import UserPool from '../../UserPool';
import styles from './Signup.module.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err)
            }
            console.log(data);
        })
    };


    return (
        <div>
            <form className={styles.formSignup} onSubmit={onSubmit}>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor='password'>Password</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)} />

                <button type='submit' >Signup</button>
            </form>
        </div>
    )
}