import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Cardapio.module.css';
import { arrow__back } from '../../styles/extra/styles';

import MealCards from '../../components/MealCards';
import pathImage from '../../assets/images/cardapio/pratos/1.jpg';
import PopUp from '../../components/PopUp';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import CircularProgress from '@mui/material/CircularProgress';
import { Button as ButtonMUI, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IProduct {
  id: string;
  productName: string;
  productDesc: string;
  productPrice: number;
  image?: string;
}

export default function Cardapio() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [badgeContent, setBadgeContent] = useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
    };

    const action = (
      <React.Fragment>
        <ButtonMUI color="secondary" size="small" onClick={handleClose}>
          UNDO
        </ButtonMUI>
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

    useEffect(() => {
        let loadingCircle = document.getElementById('loading__circle') as HTMLElement;
        loadingCircle.style.display = 'block';
        axios
            .get(
                'https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod/FetchAllProducts'
            )
            .then(response => {
                setProducts(response.data.Items);
                loadingCircle.style.display = 'none';
            })
            .catch(err => {
                console.error(err);
            })

    }, []);

    const handleClick = (product: IProduct) => {
        let cart: never[] = [];
        let count = 0;
        let item = {
            name: product.productName,
            price: product.productPrice,
            quantity: 1
        }
        
        if (localStorage.getItem('cart') !== null) {
            let cart = JSON.parse(localStorage.getItem('cart') as string);
            // cart.forEach((item: any) => {
            //   count += item.quantity;
            // });
            
            cart.forEach((item: any) => {
              if (item.name === product.productName) {
                item.quantity += 1;
                count += 1;
              } else {
                count += 1;
              }
            });
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(cart);
        } else {
          cart.push(item as never);
          count = 1;
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log(cart);

        }
        console.log(count);
        let newBadgeContent = badgeContent + 1;
        setBadgeContent(newBadgeContent);

    }

    const removeItems = () => {
        if (localStorage.getItem('cart') !== null) {
            let cart: string = JSON.parse(localStorage.getItem('cart') as string);
            let newBadgeContent = badgeContent - cart.length;
            setBadgeContent(newBadgeContent);
        } else if (localStorage.getItem('cart') === null) {
            setBadgeContent(0);
            setOpen(true);
        }

        localStorage.removeItem('cart');
        setBadgeContent(0);
        
    }

    const theme = createTheme({
      palette: {
          primary: {
              main: '#F0DB4F'
          },
      }
    });

    return (
        <div>
            <h1>Este é o nosso cardapio seja bem vindo!!!</h1>
            <IconButton onClick={() => navigate('/menu')}>
                <ArrowBackIcon fontSize='large' style={ arrow__back } />
            </IconButton>
            <button className={styles.clear__cart__btn} onClick={() => {
                removeItems()

            }}>Esvaziar carrinho</button>
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
                    products.map((product: IProduct) => {
                        return (
                            < MealCards 
                                key = {product.id}
                                pathImage = {pathImage}
                                title = {product.productName}
                                description = {product.productDesc}
                                price = {product.productPrice}
                                handleClick = {
                                    () => {
                                        handleClick(product)
                                    }
                                } 
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