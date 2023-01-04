import React, { useEffect } from 'react';
import styles from './FormRemoveProduct.module.css';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputTextAdmin from '../InputTextAdmin';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PopUp from '../PopUp';

export default function FormRemoveProduct () {
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
                setProductCategory(product.data.Item.productCategory);
                setProductPrice(product.data.Item.productPrice);
            })
            .catch((err) => console.log(err));
    } ,[params.data])

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

        console.log(body);

        event.preventDefault();

        fetch(`https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/DeleteProduct/${params.data}`, {
            method: 'DELETE',
        })
        .then(() => {
            setOpen(true);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.container__removerproduto}>
            <form className={styles.form__remove} onSubmit={handleSubmit}>
                <h3>ProductName</h3>
                <InputTextAdmin
                    disabled={true}
                    labelInput={productName} />
                <h3>ProductDesc</h3>
                <InputTextAdmin 
                    labelInput={productDesc} />
                <h3>ProductCategory</h3>
                <InputTextAdmin 
                    labelInput={productCategory} />
                <h3>ProductPrice</h3>
                <InputTextAdmin type={'number'} 
                    labelInput={productPrice} />
                <Button type='submit' variant="outlined">Remover Produto</Button>
            </form>
            <button className={styles.back__btn} onClick={() => navigate('/admin/functions/removerproduto')} >Voltar</button>
            <PopUp 
                action={action} 
                handleClose={handleClose} 
                open={open} 
                message={`Produto de nome ${productName} removido com sucesso`} /> 
        </div>
    )
}