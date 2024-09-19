import { createContext, useState } from "react";
const Context = createContext();
function GlobalContext({ children }) {
  const [productInCart, setProductInCart] = useState([]);
  const handleCart = (idCart) => {
    alert("Check your cart");
    setProductInCart([...productInCart, idCart]);
  };
  const handleDeleteCart = (idCart) => {
    alert("Delete Item sucess");
    const index = productInCart.findIndex((item) => {
      return item === idCart;
    });
    productInCart.splice(index, 1);
    setProductInCart([...productInCart]);
  };
  const objectValue = {
    handleCart,
    productInCart,
    handleDeleteCart,
  };
  return <Context.Provider value={objectValue}>{children}</Context.Provider>;
}

export { Context, GlobalContext };
