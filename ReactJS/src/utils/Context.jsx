import { createContext, useState } from "react";
const Context = createContext();
function GlobalContext({ children }) {
  const [productInCart, setProductInCart] = useState([]);
  const handleCart = (idCart) => {
    alert("Check your cart");
    setProductInCart([...productInCart, idCart]);
  };
  const objectValue = {
    handleCart,
    productInCart,
  };
  return <Context.Provider value={objectValue}>{children}</Context.Provider>;
}

export { Context, GlobalContext };
