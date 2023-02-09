import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Cardapio.module.css';
import { arrow__back } from '../../styles/extra/styles';

import MealCards from '../../components/MealCards';
import pathImage from '../../../assets/images/cardapio/pratos/1.jpg';
import PopUp from '../../components/PopUp';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import CircularProgress from '@mui/material/CircularProgress';
import { Button as ButtonMUI, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCart } from '../../../Presentation/hooks/Cart';
import { TProduct } from '../../interfaces/product';

import useViewModel from '../../ViewModel/ProductsViewModel'
import { IProduct } from '../../../Domain/Model/Product';

export default function Cardapio() {
  const navigate = useNavigate();
  const { cart, addToCart, clearCart } = useCart();

  const { getProducts, products } = useViewModel();

  const [badgeContent, setBadgeContent] = useState(0);
  
  // dependencies for toast
  const [open, setOpen] = React.useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    let loadingCircle = document.getElementById('loading__circle') as HTMLElement;
    loadingCircle.style.display = 'block';
    getProducts().then(() => {
      loadingCircle.style.display = 'none';
    });
  }, []);

  const handleClick = (product: IProduct) => {
    addToCart(product);

    let newBadgeContent = badgeContent + 1;
    setBadgeContent(newBadgeContent);

  }

  const clearItems = () => {
    if (cart.length > 0) {
      let newBadgeContent = badgeContent - cart.length;
      setBadgeContent(newBadgeContent);
    } else if (cart.length === 0) {
      setBadgeContent(0);
      setOpen(true);
    }

    clearCart();
    setBadgeContent(0);
      
  }

  const theme = createTheme({
    palette: {
      primary: {
          main: '#F0DB4F'
      },
      secondary: {
          main: '#FF0000'
      }
    }
  });

  return (
    <div>
      <h1>Este é o nosso cardapio seja bem vindo!!!</h1>
      <IconButton onClick={() => navigate('/menu')}>
          <ArrowBackIcon fontSize='large' style={ arrow__back } />
      </IconButton>
      <button className={styles.clear__cart__btn} onClick={clearItems}>Esvaziar carrinho</button>
      <ThemeProvider theme={theme}>
        <div className={styles.center__loading__circle}>
          <CircularProgress id='loading__circle' className={styles.loading__circle} size={150} />
        </div>
      </ThemeProvider>
      <button onClick={() => navigate('/carrinho')} className={styles.cart__btn__fixed}>
          <ThemeProvider theme={theme}>
            <Badge
              color='secondary'
              className={styles.badgeContent}
              badgeContent={badgeContent}>
                <ShoppingCartIcon/>
            </Badge>
          </ThemeProvider>
      </button>
      <div className={styles.card__row}>
          {
            products.map((product) => {
              return (
                < MealCards 
                  key = {product.id}
                  pathImage = {pathImage}
                  title = {product.productName}
                  description = {product.productDesc}
                  price = {product.productPrice}
                  handleClick = {() =>  handleClick(product)}
                /> 
              )
            })
          }
      </div>
      <PopUp
        action={action} 
        handleClose={handleClose} 
        open={open} 
        message={`O carrinho já está vazio!`} /> 
    </div>

    )
}