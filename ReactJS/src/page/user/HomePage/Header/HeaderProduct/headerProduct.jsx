import styles from "../HeaderProduct/headerProduct.module.css";
import { CiCircleList } from "react-icons/ci";
import { GiTennisRacket, GiSonicShoes } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { BsFillBackpack4Fill } from "react-icons/bs";
import { PiPantsBold } from "react-icons/pi";
import { Link } from "react-router-dom";
function HeaderProduct() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item1}>
          <div className={styles.header}>
            <CiCircleList />
            <span>Categories List</span>
          </div>
          <ul className={styles.menu}>
            <li>
              <GiTennisRacket />
              <Link to={""}>Racket</Link>
            </li>
            <li>
              <GiSonicShoes />
              <Link to={""}>Badminton shoes</Link>
            </li>
            <li>
              <FaTshirt />
              <Link to={""}>Badminton T shirt</Link>
            </li>
            <li>
              <BsFillBackpack4Fill />
              <Link to={""}>Badminton backpack</Link>
            </li>
            <li>
              <PiPantsBold />
              <Link to={""}>Badminton pants</Link>
            </li>
          </ul>
        </div>
        <div className={styles.item2}>
          <div className={styles.inPut}>
            <form className={styles.inPutChild}>
              <input placeholder="Find your product" />
              <button type="submit">click</button>
            </form>
            <div>Hotline 092312345</div>
          </div>
          <div className={styles.Img}>
            <img src="https://cdn.shopvnb.com/img/1920x640/uploads/slider/65z3ltd-launch-website_1695177820.webp" />
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderProduct;
