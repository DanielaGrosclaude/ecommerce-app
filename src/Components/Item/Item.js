import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="card">
      <p className="nameproduct">{product.name}</p>
      <img src={product.img} alt={product.name} />
      <div className="card-content">
        <p className="card-description">{product.description}</p>
        <p>{product.price}</p>

        <Link className="btn-card"  to={`/item/${product.id}`}>
          <Button className="btn-card" name="Ver más"></Button>
        </Link>
      </div>
    </div>
  );
}
