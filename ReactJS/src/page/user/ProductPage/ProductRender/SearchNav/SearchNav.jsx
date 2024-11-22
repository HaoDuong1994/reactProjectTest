import styles from "./SearchNav.module.css";
import { useState } from "react";

function SearchNav(props) {
  const [selectCheckbox, setSelectCheckbox] = useState("");
  const {
    handleClick,
    setHandlePrice,
    handleSearchInput,
    valueSearch,
    handlePrice,
    handleSearchProduct,
  } = props.method;
  const handlePriceOnChange = (checkbox) => {
    if (checkbox == selectCheckbox) {
      setSelectCheckbox("");
      setHandlePrice("");
    } else {
      setSelectCheckbox(checkbox);
      setHandlePrice(checkbox);
    }
  };
  return (
    <div className={styles.NavContainer}>
      <form className={styles.productSearch}>
        <h4>Product search</h4>
        <input
          onChange={handleSearchInput}
          className={styles.input}
          type="text"
          placeholder="Search here"
        />
      </form>
      <div className={styles.searchPrice}>
        <h4>Select Price</h4>
        <ul>
          <li>
            <input
              checked={selectCheckbox == "1"}
              type="checkbox"
              value="1"
              onChange={() => {
                handlePriceOnChange("1");
              }}
            />
            <label>Under 500.000đ</label>
          </li>
          <li>
            <input
              onChange={() => {
                handlePriceOnChange("2");
              }}
              checked={selectCheckbox == "2"}
              type="checkbox"
              value="2"
            />
            <label>From 500.000đ - 1.500.000đ</label>
          </li>
          <li>
            <input
              onChange={() => {
                handlePriceOnChange("3");
              }}
              checked={selectCheckbox == "3"}
              type="checkbox"
              value="3"
            />
            <label>From 1.500.000 - 2.500.000đ</label>
          </li>
          <li>
            <input
              onChange={() => {
                handlePriceOnChange("4");
              }}
              checked={selectCheckbox == "4"}
              type="checkbox"
              value="4"
            />
            <label>Over 2.500.000đ</label>
          </li>
        </ul>
      </div>
      <div className={styles.productFilter}>
        <h4>Product filter</h4>
        <ul>
          <li
            onClick={() => {
              handleClick("all");
            }}>
            All
          </li>
          <li
            onClick={() => {
              handleClick("racket");
            }}>
            Rackets
          </li>
          <li
            onClick={() => {
              handleClick("pant");
            }}>
            Pants
          </li>
          <li
            onClick={() => {
              handleClick("shoes");
            }}>
            Shoes
          </li>
          <li
            onClick={() => {
              handleClick("shirt");
            }}>
            Shirts
          </li>
          <li
            onClick={() => {
              handleClick("backpack");
            }}>
            Backpacks
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          handleSearchProduct(valueSearch, handlePrice);
        }}>
        Submit
      </button>
    </div>
  );
}
export default SearchNav;
