import styles from "../../Header/header.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaSquareYoutube, FaHeadphonesSimple } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from "../../../../../utils/Context";
function TopHeader(props) {
  const value = useContext(Context);
  const productCart = value.productInCart;
  const { style } = props;
  return (
    <div className={style.mainTopHeader}>
      <div className={style.headerLogo}>
        <img src="https://cdn.shopvnb.com/themes/images/logo.svg" />
      </div>
      <div className={style.menuPhone}>
        <FaHeadphonesSimple />
        <span>09012345678</span>
      </div>
      <div>Shop system</div>
      <div className={style.menuChanel}>
        <ul>
          <li className={style.center}>
            <Link to={""}>
              <AiOutlineFacebook />
            </Link>
          </li>
          <li>
            <Link>
              <AiOutlineInstagram />
            </Link>
          </li>
          <li>
            <Link to={"https://www.youtube.com/@congdongvnb"}>
              <FaSquareYoutube />
            </Link>
          </li>
          <li className={styles.cartWrapepper}>
            <Link to={"http://localhost:5173/item-in-cart"}>
              <AiOutlineShoppingCart />
            </Link>
            <span className={styles.itemCart}>{productCart.length}</span>
          </li>
        </ul>
      </div>
      <div>Login</div>
    </div>
  );
}
export default TopHeader;
