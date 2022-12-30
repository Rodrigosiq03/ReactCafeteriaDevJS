import React from 'react';
import styles from './FormEditProduct.module.css';
import { Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputTextAdmin from '../InputTextAdmin';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function FormEditProduct() {
    const params = useParams();
    const navigate = useNavigate();

    const [productName, setProductName] = React.useState('');
    const [productDesc, setProductDesc] = React.useState('');
    const [productPrice, setProductPrice] = React.useState(0);

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
            productPrice
        }

        console.log(body);

        event.preventDefault();

        axios.put(`https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/UpdateProduct/${params.data}`, body)
            .then(() => {
                setOpen(true);
            })
            .catch((err) => console.log(err));

        // fetch(`https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/UpdateProduct/${params.data}`, {
        //     body: JSON.stringify(body),
        // })
        // .then(() => {
        //     setOpen(true);
        // })
        // .catch((err) => console.log(err));
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
                <InputTextAdmin type={'number'} 
                    value={productPrice} 
                    onChange={event => setProductPrice(event.target.value)} 
                    labelInput="Product Price" />
                <Button className={styles.submit__btn} type='submit' variant="outlined">Editar Produto</Button>
            </form>
            <button className={styles.back__btn} onClick={() => navigate('/admin/functions/atualizarproduto')} >Voltar</button>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={`Produto com id ${params.data} atualizado com sucesso!`}
                action={action}
            /> 
        </div>
    )
}