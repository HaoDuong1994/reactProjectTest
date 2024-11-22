import { createContext, useState } from "react";
const Context = createContext();
function GlobalContext({ children }) {
  const [productInCart, setProductInCart] = useState([]);
  const [totalPriceInCart, setToTalPriceInCart] = useState(0);
  const [gmailUser, setGmailUser] = useState(null);
  const [getOrderInfor, setOrderInfor] = useState({
    receiverName: "",
    phoneNumber: "",
    address: "",
    card: true,
    cash: false,
  });
  const [getProductDetail, setGetProductDetail] = useState([]);
  const handleCart = (idCart) => {
    alert("Check your cart");
    setProductInCart([...productInCart, idCart]);
  };
  const handleDeleteCart = (idCart) => {
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
  const getToTalPrice = (totalPrice) => {
    setToTalPriceInCart(totalPrice);
  };
  const getUserInfor = (object) => {
    setOrderInfor(object);
  };
  console.log(productInCart);
  const getInForProductDetail = (data) => {
    setGetProductDetail(data);
  };
  const objectValue = {
    handleCart,
    productInCart,
    handleDeleteCart,
    handleUser,
    gmailUser,
    getToTalPrice,
    totalPriceInCart,
    getUserInfor,
    getOrderInfor,
    getProductDetail,
    getInForProductDetail,
  };
  return <Context.Provider value={objectValue}>{children}</Context.Provider>;
}

export { Context, GlobalContext };
