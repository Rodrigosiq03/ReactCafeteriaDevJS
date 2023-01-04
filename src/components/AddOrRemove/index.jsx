import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddOrRemove.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function AddOrRemove({ quantity }) {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <RemoveIcon fontSize='small' />
            </button>
            <p className={styles.quantity}>{quantity}</p>
            <button className={styles.button}>
                <AddIcon fontSize='small' />
            </button>
        </div>
    )
}