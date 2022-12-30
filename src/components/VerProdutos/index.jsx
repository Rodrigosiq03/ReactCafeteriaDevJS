import React, { useEffect } from 'react';
import styles from './VerProdutos.module.css';
import axios from 'axios';
import GetProducts from '../GetProducts';
import { useNavigate } from 'react-router-dom';

export default function VerProdutos() {
    const navigate = useNavigate();
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get('https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchAllProducts')
            .then((response) => {
                setProducts(response.data.Items);
            })
    }, [])

    return (
        <div className={styles.container__verprodutos}>
            <h1>Esses são os produtos disponiveis!</h1>
            {products.map((product) => {
                return (
                    <GetProducts 
                        key={product.id} 
                        id={product.id} 
                        productName={product.productName} 
                        productDesc={product.productDesc} 
                        productPrice={product.productPrice} />
                )
            })}
            <button className={styles.back__btn} onClick={() => navigate('/admin/functions')} >Voltar</button>
        </div>
    )
}