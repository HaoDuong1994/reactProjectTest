import styles from "./Catogory.module.css";
function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input placeholder="Search for product" type="text" />
        <div className={styles.productList}>
          <p className={styles.title}>All Catogory</p>
          <div className={styles.productItem}>
            <div>Racket</div>
            <div>Racket</div>
            <div>Racket</div>
            <div>Racket</div>
            <div>Racket</div>
          </div>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
}
export default Category;
