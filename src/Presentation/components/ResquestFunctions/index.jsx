import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RequestFunctions.module.css';

export default function RequestFunctions() {
    const navigate = useNavigate();
    return (
        <div className={styles.container__buttons}>
            <button onClick={() => navigate('/admin/functions/verprodutos')} className={styles.button__request}>Ver produtos disponiveis</button>
            <button onClick={() => navigate('/admin/functions/criarproduto')} className={styles.button__request}>Criar produto</button>
            <button onClick={() => navigate('/admin/functions/atualizarproduto')} className={styles.button__request}>Atualizar Produto</button>
            <button onClick={() => navigate('/admin/functions/removerproduto')} className={styles.button__request}>Remover produto</button>
        </div>
    )
}