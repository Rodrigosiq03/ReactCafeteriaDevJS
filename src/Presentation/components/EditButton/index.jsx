import React from 'react';
import styles from './EditButton.module.css';

export default function EditButton ({ children, handleOnClick }) {
    return (
        <button onClick={handleOnClick} className={styles.edit__btn}>{ children }</button>
    )
}
