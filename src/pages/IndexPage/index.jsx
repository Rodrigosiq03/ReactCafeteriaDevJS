import React from 'react'
import styles from './Index.module.css'
import { CognitoUser } from 'amazon-cognito-identity-js';

export default function Index() {
    const Singout = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })

        
    }

    return (
        <div>
            <h1 className={styles.title__welcome}>Bem vindo ao Cafeteria Dev JS</h1>
            <button onClick={Singout}>Sair</button>
        </div>
    )
}