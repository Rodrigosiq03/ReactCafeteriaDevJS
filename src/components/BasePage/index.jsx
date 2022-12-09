import React from 'react';
import styles from './BasePage.module.css';
import { useNavigate } from "react-router-dom";

export default function BasePage() {
    const navigate = useNavigate();

    return(
        <div className={styles.div}>
            <button className={styles.button__login} onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}
