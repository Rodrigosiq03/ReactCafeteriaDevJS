import React from 'react';
import styles from './GetProducts.module.css';

export default function GetProducts({id, productName, productDesc, productCategory, productPrice, children=null}) {

    return (
        <div className={styles.container__items}>
            <ul>
                <li>
                    {`Id: ${id}, Name: ${productName}, Description: ${productDesc}, Category: ${productCategory}, Price: R$ ${productPrice} `}
                    { children }
                </li>
            </ul>
        </div>
    )

}