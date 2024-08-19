import styles from "../Header/header.module.css";
import TopHeader from "./TopHeader/topheader";
import HeaderMenu from "./HeaderMenu/headermenu";
import HeaderProduct from "./HeaderProduct/headerProduct";
function Header() {
  return (
    <div>
      <TopHeader style={styles} />
      <HeaderMenu />
      <HeaderProduct />
    </div>
  );
}
export default Header;
