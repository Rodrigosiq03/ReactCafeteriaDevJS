import { useContext, createContext } from 'react';
import { useRecoilState } from 'recoil';
import { IProduct } from '../../Domain/Model/Product'; 
import { cartState } from '../store/atoms/atom';

interface Props {
  children: React.ReactNode;
}

interface CartContextData {
  cart: IProduct[];
  addToCart: (item: IProduct) => void;
  removeFromCart: (item: IProduct) => void;
  clearCart: () => void;
  iconDeleteItem: (item: IProduct) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useRecoilState<IProduct[]>(cartState);

  const addToCart = (item: IProduct) => {
    const isAlreadyInCart = cart.find((IProduct) => IProduct.id === item.id);

    if (isAlreadyInCart) {
      setCart(
        cart.map((IProduct) => {
            if (IProduct.productQuantity && IProduct.id === item.id) {
              return { ...IProduct, productQuantity: IProduct.productQuantity + 1 };
            } else {
              return IProduct;
            }
          }
        )
      );
    } else {
      setCart([...cart, { ...item, productQuantity: 1 }]);
    }

  };

  const removeFromCart = (item: IProduct) => {
    if (item.productQuantity === 1 && cart.length === 1) {
      clearCart();
    } else if (item.productQuantity === 1 && cart.length > 1) {
      setCart(cart.filter((IProduct) => IProduct.id !== item.id));
    }

    if (item.productQuantity && item.productQuantity > 1) {
      setCart(
        cart.map((IProduct) => {
            if (IProduct.productQuantity && IProduct.id === item.id) {
              return { ...IProduct, productQuantity: IProduct.productQuantity - 1 };
            } else {
              return IProduct;
            }
          }
        )
      );
    }

  };

  const iconDeleteItem = (item: IProduct) => {
    setCart(cart.filter((IProduct) => IProduct.id !== item.id));

  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        iconDeleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
