import React, { useEffect } from 'react';
import GetProducts from '../GetProducts';
import EditButton from '../EditButton';
import axios from 'axios';
import styles from './RemoverProduto.module.css';
import { useNavigate } from 'react-router-dom';

export default function RemoverProduto() {
    const navigate = useNavigate();

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get('https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchAllProducts')
            .then((response) => {
                setProducts(response.data.Items);
            })
    }, [])

    const handleChangeFilter = (e) => {
        const category = e.target.value;
        if (category === "") {
            axios.get('https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchAllProducts')
                .then((response) => {
                    setProducts(response.data.Items);
                })
            return;
        }
        axios.get(`https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchProductsByCategory/${category}`)
            .then((response) => {
                setProducts(response.data.Items);
            })
            
            
    }

    return (
        <div className={styles.container__removerproduto}>
            <h1>Remover Produto</h1>
            <label className={styles.label__filter} htmlFor="category"><strong>Escolha uma categoria para filtrar os produtos listados</strong></label>
            <select onChange={handleChangeFilter} className={styles.dropdown__category}>
                <option value="">Categoria</option>
                <option value="Bebidas frias">Bebidas frias</option>
                <option value="Bebidas quentes">Bebidas quentes</option>
                <option value="Salgados">Salgados</option>
                <option value="Pratos">Pratos</option>
                <option value="Doces">Doces</option>
            </select>
            { products.map((product) => {
                return (
                    <GetProducts 
                        key={product.id} 
                        id={product.id} 
                        productName={product.productName} 
                        productDesc={product.productDesc} 
                        productCategory={product.productCategory}
                        productPrice={product.productPrice} 
                        children={ 
                            <EditButton handleOnClick={() => {navigate(`/admin/functions/removerproduto/${product.id}`);}}>
                                Remover produto
                            </EditButton> 
                        }
                    />
                )
            }) }
            <button className={styles.back__btn} onClick={() => navigate('/admin/functions')} >Voltar</button>
        </div>
    )
}