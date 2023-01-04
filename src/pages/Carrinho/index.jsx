import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddOrRemove from '../../components/AddOrRemove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Carrinho.module.css';

export default function Carrinho() {
    const navigate = useNavigate();

    var itens = [];

    if (localStorage.getItem('cart') !== null) {
        itens = JSON.parse(localStorage.getItem('cart'));
    } else {
        itens = [];
    }
    console.log(itens);

    const removeItens = () => {
        localStorage.removeItem('cart');
        itens = [];
        navigate(0)
    }




    return (
        <div className={styles.container}>
            <button  className={styles.back__btn}>
                <ArrowBackIcon fontSize='large' onClick={() => navigate('/cardapio')} />
            </button>
            <h1>{`Itens (${itens.length})`}</h1>

            {itens.map((item, index) => {
                return (
                    <div key={index}>
                        <div className={styles.item__info}>
                            <div className={styles.item}>
                                <h4>{item.name}</h4>
                                <p>{`R$ ${item.price}`}</p>
                                <AddOrRemove quantity={item.quantity}/>
                            </div>
                        </div>
                    </div>
                )
            })
            }

            <div className={styles.center__clear__btn}>
                <button className={styles.clear__cart} onClick={() => {
                    removeItens()
                }}>Esvaziar carrinho</button>
            </div>
        </div>
    )
}