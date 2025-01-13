import styles from "./Catogory.module.css";
function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input placeholder="Search for product" type="text" />
        <div className={styles.productList}>
          <ul className={styles.listCatogory}>
            Catogory
            <li>Racket</li>
            <li>Racket</li>
            <li>Racket</li>
            <li>Racket</li>
            <li>Racket</li>
          </ul>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
}
export default Category;
