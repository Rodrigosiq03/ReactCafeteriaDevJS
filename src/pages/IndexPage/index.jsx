import React from 'react'
import Status from '../../components/Status'
import styles from './Index.module.css'
// import { CognitoUser } from 'amazon-cognito-identity-js';

export default function Index() {
    return (
        <div>
            <h1 className={styles.title__welcome}>Bem vindo ao Cafeteria Dev JS</h1>
            <Status/>
            {/* <button onClick={Singout}>Sair</button> */}
        </div>
    )
}