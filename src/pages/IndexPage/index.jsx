import React from 'react'
import Status from '../../components/Status';
import styles from './Index.module.css';
import Menu from '../../components/Menu';

export default function Index() {
    return (
        <div>
            <h1 className={styles.title__welcome}>Bem vindo ao Cafeteria Dev JS</h1>
            <Menu/>
            <div className={styles.status__btn}><Status/></div>
        </div>
    )
}