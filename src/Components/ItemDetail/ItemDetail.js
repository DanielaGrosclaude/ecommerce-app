import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { CartContext } from "../CartContext/CartContext";
import { useNotificationServices } from "../../services/Notification"

const ItemDetail = ({ product, quantity }) => {
  const { addItem } = useContext(CartContext);
  const setNotification = useNotificationServices();

  const [counter, setCounter] = useState(quantity);

  const onAdd = (quantity) => {
    setCounter(quantity);
    addItem(product, quantity);
    setNotification("success", `Se agregó "${product.album}" al carrito `);
  };


  return (
    <div className="itemDetail">
      <img src={product.img} alt={product.name} />
      <h1>{product.category}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>

      {counter ? (
        <Link to="/cart">
          <Button name="Finalizar mi compra" />
        </Link>
      ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
