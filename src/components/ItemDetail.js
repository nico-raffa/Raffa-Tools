import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";
const ItemDetail = ({ item }) => {
  const [contador, setContador] = useState();
  const { addToCart } = useContext(CartContext);
  function onAddItem(itemAmount) {
    addToCart(itemAmount, item);
    setContador(itemAmount);
  }
  if (item.length === 0) {
    return (
      <div className="non-existent">
        Oops, parece que el producto no existe. <br />
        Volvé al inicio y seleccioná un producto de nuestro catálogo!
        <br />
        <Link to={"/"}>Volver al catalogo</Link>
      </div>
    );
  } else {
    const { imgUrl, title, price, description, stock } = item
    return (
      <div className="wrapper">
        <div className="product-img">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{title}</h1>
            <p>{description}</p>
            <span>${price}</span>
          </div>
          {!contador ? (
            <ItemCount initial={0} stock={stock} onAdd={onAddItem} />
          ) : (
            <Link to="/cart" className="goToCart">
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    );
  }
};
export default ItemDetail;
