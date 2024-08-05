import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { cartCT } from "../../context/cart";
import CartTable from "./cartTable";

interface ICartDetail {
  _id: string;
  userId: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  ProductId: string;
  quantity: number;
  variants: any[];
  _id: string;
}

const Cart = () => {
  const { cart } = useContext(cartCT);
  const [cartdetail, setCartdetail] = useState<ICartDetail>();
  const navigate = useNavigate();
  useEffect(() => {
    if (cart._id) {
      (async () => {
        try {
          const { data } = await api.get(`cart/${cart._id}`);
          console.log(data);
          setCartdetail(data);
        } catch (error) {}
      })();
    }
  }, [cart]);
  if (cart._id) {
    return (
      <>
        <h1>Giỏ hàng của bạn</h1>
        {cartdetail && <CartTable edit={true} cartdetail={cartdetail} />}
        <button
          className="px-6 py-2 mr-0 text-white bg-slate-900"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </>
    );
  } else {
    return <>Loading...</>;
  }
};

export default Cart;
