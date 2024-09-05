import styles from "./SearchNav.module.css";
function SearchNav(props) {
  const { handleClick } = props.method;
  return (
    <div className={styles.NavContainer}>
      <div className={styles.productSearch}>
        <h4>Product search</h4>
        <input className={styles.input} type="text" placeholder="search here" />
      </div>
      <div className={styles.searchPrice}>
        <h4>Search by price</h4>
        <p>From:</p>
        <input type="text" />
        <p>To:</p>
        <input type="text" />
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
    </div>
  );
}
export default SearchNav;
