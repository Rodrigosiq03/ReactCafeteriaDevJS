import React from 'react';
import styles from './GetProducts.module.css';

export default function GetProducts({id, productName, productDesc, productPrice}) {

    return (
        <div className={styles.container__items}>
            <ul>
                <li>{`Id: ${id}, Name: ${productName}, Description: ${productDesc}, Price: R$ ${productPrice} `}</li>
            </ul>
        </div>
    )

}