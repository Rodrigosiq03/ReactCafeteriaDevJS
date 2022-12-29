import axios from 'axios';
import React, {useEffect, useState} from 'react';
import MealCards from '../../components/MealCards';
import styles from './Cardapio.module.css';
import pathImage from '../../assets/images/cardapio/pratos/1.jpg';

export default function Cardapio() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchAllProducts'
            )
            .then(response => {
                setProducts(response.data.Items);
                console.log('ta funcionando', response.data.Items);
            })
            .catch(err => {
                console.error(err);
            })
        }, [])

    console.log('products', products);

    return (
        <div>
            <h1>Este é o nosso cardapio seja bem vindo!!!</h1>
            <div className={styles.card__row}>
                {
                    products.map((product) => {
                        return (
                            <MealCards
                                key={product.id}
                                pathImage={pathImage}
                                title={product.productName}
                                description={product.productDesc}
                                price={product.productPrice}/>
                        )
                    })
                }
            </div>
        </div>

    )
}