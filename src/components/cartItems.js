import React, { useEffect, useState } from "react";
import { products } from "../constant/productList";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";

const CartItems = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  const handleMinusQuantity = () => {

        dispatch( changeQuantity({
            productId: detail.id,
            quantity: quantity-1,
        }))

    }
    const handlePlusQuantity = () => {

        dispatch( changeQuantity({
            productId: detail.id,
            quantity: quantity+1,
        }))

    }
    console.log(handlePlusQuantity);
    

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];

    setDetail(findDetail);
  }, [productId]);

  return (
    <div className="flex justify-between items-center bg-slate-700 text-white p-2 border-b-2 border-slate-800 gap-5">
      <img src={detail?.image} alt="" className="w-12" />
      <h3>{detail?.name}</h3>
      <p>${detail?.price * quantity}</p>
      <div className="w-20 flex justify-between">
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handleMinusQuantity}>
          -
        </button>
        <span>{quantity}</span>
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handlePlusQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
