import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { IProduct } from "../Types";

export interface ICartProps {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  resetCart: () => void;
}

// @ts-ignore
const initialState: ICartProps = {
  cart: [],
};

const CartContext = createContext<ICartProps>(initialState);

export const CartProvider: React.FC = ({ children }) => {
  const cart = useCartProvider();
  //@ts-ignore
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};

const useCartProvider = () => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = useCallback(
    (product: IProduct) => {
      setCart((curr) => [...curr, product]);
    },
    [setCart]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const newCartItems = cart.filter((product) => product.id !== id);
      setCart(newCartItems);
    },
    [cart]
  );

  const resetCart = useCallback(() => {
    setCart([]);
  }, []);

  return useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      resetCart,
    }),
    [cart, addToCart, removeFromCart, resetCart]
  );
};
