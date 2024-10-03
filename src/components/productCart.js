import React from "react";
import { Link } from "react-router-dom";
import deliveryIcon from "../assets/icon/delivery.svg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import { store } from "../stores";

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  const { id, name, price, image, slug } = props.data;
  console.log(carts);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };


  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt=""
          className="w-full h-80  object-cover object-top drop-shadow-[0_80px_30px_#0007"
        />
      </Link>
      <h3 className="text-xl font-bold my-3 text-center py-3">{name}</h3>
      <div className="flex justify-between items-center">
        <p>
          $<span className="text-2xl font-medium">{price}</span>
        </p>
        <button
          className=" bg-gray-300 px-2 flex  rounded-md text-sm hover:bg-gray-400"
          onClick={handleAddToCart}
        >
          <img src={deliveryIcon} alt="" className="w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
