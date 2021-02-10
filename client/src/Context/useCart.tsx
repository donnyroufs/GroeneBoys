import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { IProduct } from "common/Entities";
import { OrderApi } from "../Api";

export type ProductWithQuantity = IProduct & { quantity: number };
export interface ICartProps {
  cart: IProduct[];
  referenceId: number | null;
  cartWithQuantities: ProductWithQuantity[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  resetCart: () => void;
  createAndPayOrder: (data: any) => Promise<unknown>;
  hasProducts: boolean;
}

// @ts-ignore
const initialState: ICartProps = {
  cart: [],
  referenceId: null,
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
  const [referenceId, setReferenceId] = useState<Number | null>(0);

  const cartWithQuantities = Object.entries(
    cart.reduce((acc, curr) => {
      // @ts-ignore
      acc[curr.id] = acc[curr.id] ? acc[curr.id] + 1 : 1;
      return acc;
    }, {})
  ).map(([k, v]) => {
    const product = cart.find((p) => p.id === Number.parseInt(k));

    return {
      ...product,
      quantity: v,
    } as ProductWithQuantity;
  });

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
    setReferenceId(null);
  }, []);

  const createAndPayOrder = useCallback(
    async (data: any) => {
      // @ts-ignore
      const { data: orderData } = await OrderApi.createAndPayOrder({
        // @ts-ignore
        userId: data.id,
        // @ts-ignore
        serialNumber: data.serialNumber,
        products: cartWithQuantities,
      });

      setReferenceId(orderData.referenceNumber);
    },
    [cartWithQuantities]
  );

  const hasProducts = cart.length > 0;

  return useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      resetCart,
      cartWithQuantities,
      createAndPayOrder,
      referenceId,
      hasProducts,
    }),
    [
      cart,
      addToCart,
      removeFromCart,
      resetCart,
      cartWithQuantities,
      createAndPayOrder,
      referenceId,
      hasProducts,
    ]
  );
};
