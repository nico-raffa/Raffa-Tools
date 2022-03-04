import React, { useState } from "react";
import "./ItemCount.css";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  function addToCart(){
    onAdd(contador)
  }
  function sumar() {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }
  function restar() {
    if (contador !== 0) {
      setContador(contador - 1);
    } 
  }
  return (
    <div className="counter">
    <p>Stock disponible: {stock}</p>
      <div className="buttons">
      
        <button onClick={restar} className="less">
          -
        </button>
        <p className="contador">{contador}</p>
        <button onClick={sumar} className="more">
          +
        </button>
      </div>
      <p>
        <button onClick={addToCart} disabled={contador===0} className= {contador===0 ? "disabled" : "buttonAdd"}>
          
          Agregar al carrito
        </button>
      </p>
    </div>
  );
}
export default ItemCount