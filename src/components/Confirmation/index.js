import React, { useState } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../../UserPool';
import styles from './Confirmation.module.css';

export default function Confirmation() {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');



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
        });

    };


    return (
        <div>
            <form className={styles.formSignup} onSubmit={onSubmit}>
                <label htmlFor='email'>Email for confirm with code</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor='code'>Verification Code</label>
                <input value={verificationCode} onChange={(event) => setVerificationCode(event.target.value)} />

                <button type='submit' >Confirm Registration</button>
            </form>
        </div>
    )
}