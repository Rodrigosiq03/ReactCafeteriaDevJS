import React from 'react';
import styles from './CardGlobal.module.css'

export default function CardGlobal ({ children }) {
    return (
        <div className={styles.card__global}>
            { children }
        </div>
    )
}