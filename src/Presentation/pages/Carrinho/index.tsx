import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Carrinho.module.css';

import AddOrRemove from '../../components/AddOrRemove';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

import { useRecoilValueLoadable } from 'recoil';
import { selectorGetItems } from '../../../Presentation/store/selectors/selector';

import { useCart } from '../../../Presentation/hooks/Cart';
import { IProduct } from '../../../Domain/Model/Product';



export default function Carrinho() {

  const navigate = useNavigate();

  // custom hook
  const { clearCart, addToCart, removeFromCart, iconDeleteItem } = useCart();

  // recoil state
  const getItemsLoadable = useRecoilValueLoadable<IProduct[]>(selectorGetItems);
  const itens = getItemsLoadable.contents;

  return (
    <div className={styles.container}>
      <button  className={styles.back__btn}>
        <ArrowBackIcon fontSize='large' onClick={() => navigate('/cardapio')} />
      </button>
      <h1>{`Itens (${itens.length})`}</h1>

      {itens.map((item: IProduct) => {
        return (
          <div className={styles.row__item} key={item.id}>
            <div className={styles.item__info}>
              <div className={styles.item}>
                <h4 className={styles.product__name}>{item.productName}</h4>
                <div className={styles.left__item__info}>
                  <AddOrRemove addOnClick={() => addToCart(item)} removeOnClick={() => removeFromCart(item)} quantity={item.productQuantity}/>
                  <p className={styles.price}>{ `R$ ${item.productPrice}` }</p>
                </div>
                <IconButton aria-label="delete" onClick={() => iconDeleteItem(item)}>
                  <DeleteIcon sx={{ color: '#F0DB4F' }} />
                </IconButton>
              </div>
            </div>
          </div>
        )
      })
      }

      <div className={styles.center__clear__btn}>
          <button className={styles.go__to__scheduling} onClick={() => navigate('/agendamento')}>Agendar pedido</button>
      </div>
      <div className={styles.center__clear__btn}>
          <button className={styles.clear__cart} onClick={clearCart}>Esvaziar carrinho</button>
      </div>
    </div>
  )
}