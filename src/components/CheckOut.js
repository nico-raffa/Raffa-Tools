import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext";

const CheckOut = () => {
  const { cart, eraseCart, getCartQuantity, getCartTotalPrice } =
    useContext(CartContext);
  const [formValues, setFormValues] = useState({});
  const [orderId, setOrderId] = useState("");
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const ordersCollection = collection(db, "orders");
  const newOrder = {
    buyer: {
      name: formValues.name,
      lastName: formValues.lastName,
      phone: formValues.phone,
      email: formValues.email,
    },
    items: cart,
    total: getCartTotalPrice(),
  };
  const checkOut = (event) => {
    event.preventDefault();
    if (getCartQuantity() === 0) {
      alert("El carrito está vacío, agregá algo y volvé al carrito");
    } else {
      if (formValues.email === formValues.emailConfirm) {
        addDoc(ordersCollection, newOrder)
          .then((doc) => setOrderId(doc.id))
          .catch((error) => {
            console.log(error);
          });
        eraseCart();
      } else {
        alert("Los e-mail no coinciden");
      }
    }
  };
  return (
    <>
      {orderId !== "" ? (
        <div className="col-md-3 summary">
          <h5>Compra realizada correctamente</h5>
          <hr/>
        <h2>El ID de tu compra es: {orderId}</h2>
        </div>
      ) : (
        <div className="col-md-3 summary">
          <h5>Resumen</h5>
          <hr />
          <form onSubmit={checkOut} className="data">
            <p>Nombre</p>
            <input
              onChange={handleInputChange}
              name="name"
              type="text"
              required
            />
            <p>Apellido</p>
            <input
              onChange={handleInputChange}
              name="lastName"
              type="text"
              required
            />
            <p>Correo</p>
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              required
            />
            <p>Correo(confirmar)</p>
            <input
              onChange={handleInputChange}
              name="emailConfirm"
              type="email"
              required
            />
            <p>Teléfono</p>
            <input
              onChange={handleInputChange}
              name="phone"
              type="tel"
              required
            />
            <button className="btn" onSubmit={checkOut}>
              CHECKOUT
            </button>
          </form>
          <hr />

          <div className="rows">
            <div className="col">Cantidad de items: </div>
            <div className="col text-right">{getCartQuantity()}</div>
          </div>
          <div className="rows">
            <div className="col">Precio total</div>
            <div className="col text-right">${getCartTotalPrice()}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default CheckOut