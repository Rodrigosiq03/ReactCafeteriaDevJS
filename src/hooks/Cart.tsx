import { useContext, createContext } from 'react';

import { useRecoilState } from 'recoil';
import { TProduct } from '../interfaces/product';
import { cartState } from '../store/atoms/atom';

interface Props {
  children: React.ReactNode;
}

interface CartContextData {
  cart: TProduct[];
  addToCart: (item: TProduct) => void;
  removeFromCart: (item: TProduct) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useRecoilState<TProduct[]>(cartState);

  const addToCart = (item: TProduct) => {
    const isAlreadyInCart = cart.find((TProduct) => TProduct.id === item.id);

    if (isAlreadyInCart) {
      setCart(
        cart.map((TProduct) =>
          TProduct.id === item.id ? { ...TProduct, quantity: TProduct.quantity + 1 } : TProduct
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

  };

  const removeFromCart = (item: TProduct) => {
    if (item.quantity === 1 && cart.length === 1) {
      clearCart();
    } else if (item.quantity === 1 && cart.length > 1) {
      setCart(cart.filter((TProduct) => TProduct.id !== item.id));
    }

    if (item.quantity > 1) {
      setCart(
        cart.map((TProduct) =>
          TProduct.id === item.id ? { ...TProduct, quantity: TProduct.quantity - 1 } : TProduct
        )
      );
    }

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
