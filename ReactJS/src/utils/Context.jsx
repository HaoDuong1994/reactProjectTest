import { createContext, useState } from "react";
const Context = createContext();
function GlobalContext({ children }) {
  const [productInCart, setProductInCart] = useState([]);
  const [gmailUser, setGmailUser] = useState(null);
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
  const handleUser = (gmail) => {
    if (gmail) {
      setGmailUser(gmail);
    } else {
      setGmailUser(null);
    }
  };
  const objectValue = {
    handleCart,
    productInCart,
    handleDeleteCart,
    handleUser,
    gmailUser,
  };
  return <Context.Provider value={objectValue}>{children}</Context.Provider>;
}

export { Context, GlobalContext };
