import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../context/CartContext";
import CheckOut from "./CheckOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cart, eraseCart, removeItem } = useContext(CartContext);
  return (
    <div className="rows">
      <div className="col-md-8 cart">
        <div className="title">
          <h4>
            <b>Carrito de compras</b>
          </h4>
        </div>
        {cart.length === 0 ? (
          <Link to={"/"}>
            <h2>Carrito vacío, click acá para volver al home</h2>
          </Link>
        ) : (
          <>
            {cart.map((product) => {
              const remove = () => removeItem(product.id);
              const { imgUrl, title, price, id, description, quantity } =
                product;
              return (
                <div className="border-top border-bottom" key={id}>
                  <div className="rows main align-items-center">
                    <div className="col-2">
                      <img className="img-fluid" src={imgUrl} alt={title} />
                    </div>
                    <div className="col">
                      <div className="rows text-muted">{title}</div>
                      <div className="rows">{description}</div>
                    </div>
                    <div className="col">
                      <span className="border">Cantidad: {quantity}</span>
                    </div>
                    <div className="col">
                      C/U ${price}
                      <button className="btn-dark" onClick={remove}>
                        &#10005;
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <button className="btn" onClick={eraseCart}>
              Vaciar carrito
            </button>
          </>
        )}

        <div className="back-to-shop">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faCaretSquareLeft} size="lg" />
            <span className="text-muted">Volver al catalogo</span>
          </Link>
        </div>
      </div>
      <CheckOut />
    </div>
  );
}
