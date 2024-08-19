import styles from "../../Header/header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineUser,
} from "react-icons/ai";
import { FaSquareYoutube, FaHeadphonesSimple } from "react-icons/fa6";

function TopHeader(props) {
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
          <li className={style.menuLogin}>
            <Link>
              <AiOutlineUser />
            </Link>
            <span className={style.size}>User login</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default TopHeader;
