import React from 'react';
import Status from '../../components/Status';
import styles from './Admin.module.css';
import { useLocation, Link } from 'react-router-dom';

export default function Admin() {
    const location = useLocation();


    return (
        <>
            <div>
                <h1 className={styles.text__welcome__admin}>Olá, você é um ADMIN e possui funções de ADMIN!!</h1>
                <h3 className={styles.text__welcome__admin}>Clique abaixo para começar a utilizar as funcionalidades de ADMIN</h3>
                <Link className={styles.link__admin__functions} to={`${location.pathname}/functions`} >ADMIN</Link>
                <div className={styles.status__btn}>
                    <Status />
                </div>
            </div>
        </>
    )
}