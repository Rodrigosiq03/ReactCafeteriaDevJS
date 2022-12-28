import { Button, TextField, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import styles from './CriarProduto.module.css'

export default function CriarProduto() {

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

    const theme = createTheme({
        palette: {
            primary: {
                color: '#fff',
                main: '#F0DB4F',
            },
        },
    });

    return (
        <div className={styles.container__criarproduto}>
            <h1>Criar Produto</h1>
            <form className={styles.form__create} onSubmit={handleSubmit}>
                <ThemeProvider theme={theme}>
                    <TextField className={styles.input__form} sx={{paddingBottom: '10px'}} value={productName} onChange={event => setProductName(event.target.value)} id="standard-basic"  label="Product Name" />
                    <TextField sx={{paddingBottom: '10px'}} value={productDesc} onChange={event => setProductDesc(event.target.value)} id="standard-basic"  label="Product Description" />
                    <TextField sx={{paddingBottom: '10px'}} value={productPrice} onChange={event => setProductPrice(event.target.value)} id="standard-basic"  label="Product Price" />
                    <Button type='submit' variant="outlined">Criar Produto</Button>
                </ThemeProvider>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={`Produto ${productName} criado com sucesso!`}
                action={action}
            />
        </div>
    )
}