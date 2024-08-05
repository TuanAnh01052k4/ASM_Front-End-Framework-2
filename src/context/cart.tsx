import React, { createContext, useEffect, useState } from "react";
import api from "../config/axios";
import { ICart } from "../interface/cart";
type Props = {
  children: React.ReactNode;
};
export const cartCT = createContext({} as any);
const CartContext = ({ children }: Props) => {
  const [cart, setCart] = useState<ICart>({} as ICart);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("cart/userid/1");
        if (data) {
          setCart(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <cartCT.Provider value={{ cart, setCart }}>{children}</cartCT.Provider>
  );
};

export default CartContext;
