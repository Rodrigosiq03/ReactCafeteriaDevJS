import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddOrRemove from '../../components/AddOrRemove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Carrinho.module.css';
import { useCart } from '../../hooks/Cart';
import { TProduct } from '../../interfaces/product';
import { useRecoilValueLoadable } from 'recoil';
import { selectorGetItems } from '../../store/selectors/selector';



export default function Carrinho() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const { clearCart, addToCart, removeFromCart } = useCart();

  const getItemsLoadable = useRecoilValueLoadable<TProduct[]>(selectorGetItems);

  const itens = getItemsLoadable.contents;

  return (
    <div className={styles.container}>
      <button  className={styles.back__btn}>
        <ArrowBackIcon fontSize='large' onClick={() => navigate('/cardapio')} />
      </button>
      <h1>{`Itens (${itens.length})`}</h1>

      {itens.map((item: TProduct) => {
        return (
          <div className={styles.row__item} key={item.id}>
            <div className={styles.item__info}>
              <div className={styles.item}>
                <h4 className={styles.product__name}>{item.productName}</h4>
                <div className={styles.left__item__info}>
                  <AddOrRemove addOnClick={() => addToCart(item)} removeOnClick={() => removeFromCart(item)} quantity={item.quantity}/>
                  <p className={styles.price}>{ `R$ ${item.productPrice}` }</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
      }

      <div className={styles.center__clear__btn}>
          <button className={styles.clear__cart} onClick={clearCart}>Esvaziar carrinho</button>
      </div>
    </div>
  )
}