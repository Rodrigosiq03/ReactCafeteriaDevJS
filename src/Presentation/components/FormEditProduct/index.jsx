import React, { useEffect } from 'react';
import styles from './FormEditProduct.module.css';
import { Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputTextAdmin from '../InputTextAdmin';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PopUp from '../PopUp';

export default function FormEditProduct() {
    const params = useParams();
    const navigate = useNavigate();

    const [productName, setProductName] = React.useState('');
    const [productDesc, setProductDesc] = React.useState('');
    const [productCategory, setProductCategory] = React.useState('');
    const [productPrice, setProductPrice] = React.useState(0);

    useEffect(() => {
        axios.get(`https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchProduct/${params.data}`)
            .then((product) => {
                setProductName(product.data.Item.productName);
                setProductDesc(product.data.Item.productDesc);
                if (typeof product.data.Item.productCategory !== 'undefined') {
                    setProductCategory(product.data.Item.productCategory);
                }
                setProductPrice(product.data.Item.productPrice);
            })
            .catch((err) => console.log(err));
    }, [params.data]);

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleSubmit = (event) => {
        let body = {
            productName,
            productDesc,
            productCategory,
            productPrice
        }

        if (productCategory === 'Cafés') {
            body.productCategory = 'Cafes';
        }

        console.log(body);

        event.preventDefault();

        axios.put(`https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/UpdateProduct/${params.data}`, body)
            .then(() => {
                setOpen(true);
            })
            .catch((err) => console.log(err));

    }


    return (
        <div className={styles.container__items}>
            <form className={styles.form__edit} onSubmit={handleSubmit}>
                <InputTextAdmin 
                    value={productName} 
                    onChange={event => setProductName(event.target.value)}  
                    labelInput="Product Name" />
                <InputTextAdmin 
                    value={productDesc} 
                    onChange={event => setProductDesc(event.target.value)}  
                    labelInput="Product Description" />
                <InputTextAdmin 
                    value={productCategory}
                    onChange={event => setProductCategory(event.target.value)}  
                    labelInput="Product Category" />
                <InputTextAdmin type={'number'} 
                    value={productPrice}
                    onChange={event => setProductPrice(event.target.value)} 
                    labelInput="Product Price" />
                <Button className={styles.submit__btn} type='submit' variant="outlined">Editar Produto</Button>
            </form>
            <button className={styles.back__btn} onClick={() => navigate('/admin/functions/atualizarproduto')} >Voltar</button>
            <PopUp 
                action={action} 
                handleClose={handleClose} 
                open={open} 
                message={`Produto atualizado com sucesso`} /> 
        </div>
    )
}