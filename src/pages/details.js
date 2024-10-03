import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constant/productList";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
const Details = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity -1);
  }
 
  const handlePlusQuantity = () => {
    if(quantity >=0 ) {
        setQuantity(quantity+1);
    }
  }
  const handleAddToCart = () => {
    dispatch(
        addToCart({
            productId: detail.id,
            quantity: quantity
        })
    )

  }
 //  console.log(handleAddToCart);
  
  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button className="bg-gray-100 h-full text-xl rounded-xl px-4 m-2 flex justify-center items-center" onClick={handleMinusQuantity}>
                -
              </button>
              <span className="bg-gray-200 h-full text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button className="bg-gray-100 h-full text-xl rounded-xl px-4 m-2 flex justify-center items-center" onClick={handlePlusQuantity}>
                +
              </button>
            </div>
            <button className=" bg-black text-white px-8 py-3 rounded-xl shadow-2xl" onClick={handleAddToCart}>
              addToCart
            </button>
          </div>
          <p>{detail.desrciption}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
