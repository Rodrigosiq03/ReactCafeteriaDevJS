import { Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import styles from './CriarProduto.module.css'
import InputTextAdmin from '../InputTextAdmin';
import { useNavigate } from 'react-router-dom';

export default function CriarProduto() {

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

        fetch('https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/CreateProduct', {
            method: 'POST',
            body: JSON.stringify(body),
        })
        .then(() => {
            setOpen(true);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.container__criarproduto}>
            <h1>Criar Produto</h1>
            <form className={styles.form__create} onSubmit={handleSubmit}>
                <InputTextAdmin required sx={{paddingBottom: '10px'}} value={productName} onChange={event => setProductName(event.target.value)} id="standard-basic"  labelInput="Product Name" />
                <InputTextAdmin sx={{paddingBottom: '10px'}} value={productDesc} onChange={event => setProductDesc(event.target.value)} id="standard-basic"  labelInput="Product Description" />
                <InputTextAdmin type={'number'} sx={{paddingBottom: '10px'}} value={productPrice} onChange={event => setProductPrice(event.target.value)} id="standard-basic"  labelInput="Product Price" />
                <Button className={styles.submit__btn} type='submit' variant="outlined">Criar Produto</Button>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={`Produto ${productName} criado com sucesso!`}
                action={action}
            />
            <button className={styles.back__btn} onClick={() => navigate('/admin/functions')} >Voltar</button>
        </div>
    )
}