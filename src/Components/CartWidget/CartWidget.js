import React from "react";
import "./CartWidget.css";
import { RiShoppingBasket2Fill } from "react-icons/ri";

const CartWidget = () => {

  return (
    <div className="cartWidget">
      <RiShoppingBasket2Fill/>
      <p>0</p>
    </div>
  );
};

export default CartWidget;
