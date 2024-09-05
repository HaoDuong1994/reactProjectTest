import styles from "../Header/header.module.css";
import TopHeader from "./TopHeader/topheader";
import HeaderMenu from "./HeaderMenu/headermenu";
import HeaderProduct from "./HeaderProduct/headerProduct";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
function Header() {
  const [isHome, setIsHome] = useState(true);
  const locationPath = useLocation().pathname;
  console.log(locationPath.length);
  useEffect(() => {
    if (locationPath.length > 8) {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [locationPath.length]);
  return (
    <div>
      <TopHeader style={styles} />
      <HeaderMenu />
      {isHome && <HeaderProduct />}
    </div>
  );
}
export default Header;
