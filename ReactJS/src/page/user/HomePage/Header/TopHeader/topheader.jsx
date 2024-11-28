import styles from "../../Header/header.module.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { jwtDecode } from "jwt-decode";
import { IoPerson } from "react-icons/io5";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import Cookies from "universal-cookie";
import { FaSquareYoutube, FaHeadphonesSimple } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from "../../../../../utils/Context";
function TopHeader(props) {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const value = useContext(Context);
  const getUser = value.handleUser;
  const productCart = value.productInCart;
  const { style } = props;
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (jwt) {
      const decoded = jwtDecode(jwt);
      const emailUser = decoded.email;
      setUser(emailUser);
      getUser(emailUser);
    } else {
      setUser(null);
      getUser(null);
    }
  }, [jwt]);
  const handleLogOut = () => {
    cookies.remove("jwt");
  };
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
      <div className={styles.search}>
        <Link to={"http://localhost:5173/product"}>
          <CiSearch />
        </Link>
      </div>
      {user ? (
        <div className={styles.user}>
          <div>{user}</div>
          <div className={styles.dropdown}>
            <div className={styles.triangle}></div>
            <div className={styles.userLogout}>
              <div className={styles.details}>User Details</div>
              <Link
                onClick={handleLogOut}
                to={"http://localhost:5173"}
                className={styles.checkout}>
                Log out
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.loginMenu}>
          <IoPerson />
          <div className={styles.dropdown}>
            <div className={styles.triangle}></div>
            <div className={styles.content}>
              <Link to={"http://localhost:5173/user/log-in"}>Log In</Link>
              <Link to={"http://localhost:5173/user/sign-up"}>Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default TopHeader;
