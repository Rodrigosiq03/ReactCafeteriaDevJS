import React, { useEffect } from 'react'
import styles from './AtualizarProduto.module.css'
import axios from 'axios';
import GetProducts from '../GetProducts';
import EditButton from '../EditButton';
import { useNavigate } from 'react-router-dom';

export default function AtualizarProduto() {

    const navigate = useNavigate();
    

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get('https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchAllProducts')
            .then((response) => {
                setProducts(response.data.Items);
            })
    })


    return (
        <div className={styles.container__atualizarproduto}>
            <h1>Atualizar Produto</h1>
            { products.map((product) => {
                return (
                    <GetProducts 
                        key={product.id} 
                        id={product.id} 
                        productName={product.productName} 
                        productDesc={product.productDesc} 
                        productPrice={product.productPrice} 
                        children={ <EditButton handleOnClick={() => {navigate(`/admin/functions/atualizarproduto/${product.id}`);}}>
                            Editar produto
                            </EditButton> 
                        }
                    />
                )
            }) }




            {/* <form className={styles.form__create} onSubmit={handleSubmit}>
                <InputTextAdmin required sx={{paddingBottom: '10px'}} value={productName} onChange={event => setProductName(event.target.value)} id="standard-basic"  labelInput="Product Name" />
                <InputTextAdmin sx={{paddingBottom: '10px'}} value={productDesc} onChange={event => setProductDesc(event.target.value)} id="standard-basic"  labelInput="Product Description" />
                <InputTextAdmin type={'number'} sx={{paddingBottom: '10px'}} value={productPrice} onChange={event => setProductPrice(event.target.value)} id="standard-basic"  labelInput="Product Price" />
                <Button type='submit' variant="outlined">Criar Produto</Button>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={`Produto ${productName} atualizado com sucesso!`}
                action={action}
            /> */}
        </div>
    )
}