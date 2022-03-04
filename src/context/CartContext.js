import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (quantity, item) => {
    if (isInCart(item.id)) {
      const data = [...cart];
      data.forEach((x) => {
          if (x.id === item.id){
            x.quantity += quantity;
          }
          setCart([...data]);
      });
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  const isInCart = (id) => {
    const response = cart.find((cartItem) => cartItem.id === id);
    return response;
  };
  const eraseCart = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
  };
  const getCartQuantity = () => {
    let cartQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
      cartQuantity += cart[i].quantity;
    }
    return cartQuantity;
  };
  const getCartTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice;
  };
  
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          eraseCart,
          removeItem,
          getCartQuantity,
          getCartTotalPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
export default CartContextProvider