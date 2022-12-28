import React from 'react'
import styles from './AtualizarProduto.module.css'

export default function AtualizarProduto() {
    return (
        <div className={styles.container__atualizarproduto}>
            <h1>Atualizar Produto</h1>
            <form className={styles.form__create} onSubmit={handleSubmit}>
                <ThemeProvider theme={theme}>
                    <TextField sx={{paddingBottom: '10px'}} className={styles.input__form} value={id} onChange={event => setId(event.target.value)}  label="ID" />
                    <TextField sx={{paddingBottom: '10px'}} value={productName} onChange={event => setProductName(event.target.value)} id="standard-basic"  label="Product Name" />
                    <TextField sx={{paddingBottom: '10px'}} value={productDesc} onChange={event => setProductDesc(event.target.value)} id="standard-basic"  label="Product Description" />
                    <TextField sx={{paddingBottom: '10px'}} value={productPrice} onChange={event => setProductPrice(event.target.value)} id="standard-basic"  label="Product Price" />
                    <Button type='submit' variant="outlined">Criar Produto</Button>
                </ThemeProvider>
            </form>
        </div>
    )
}