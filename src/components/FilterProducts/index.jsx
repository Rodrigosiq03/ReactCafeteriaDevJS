import React from 'react';
import styles from './FilterProducts.module.css';


export default function FilterProducts({ handleChangeFilter }) {
    return (
        <>
            <label className={styles.label__filter} htmlFor="category"><strong>Escolha uma categoria para filtrar os produtos listados</strong></label>
            <select onChange={handleChangeFilter} className={styles.dropdown__category}>
                <option value="">Todos</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Cafés">Cafés</option>
                <option value="Salgados">Salgados</option>
                <option value="Pratos">Pratos</option>
                <option value="Doces">Doces</option>
            </select>
        </>
    )
}