import React from 'react';
import RequestFunctions from '../ResquestFunctions';
import styles from './FunctionsADMIN.module.css';
import { useNavigate } from 'react-router-dom';

export default function FunctionsADMIN() {
    const navigate = useNavigate();


    return (
        <div>
            <h1>Essas são as funcionalidades disponiveis!</h1>
            <RequestFunctions />
            <div className={styles.center__btn}>
                <button
                    className={styles.back__btn}
                    onClick={() => navigate('/admin')}>Voltar</button>
            </div>
        </div>
    )
}