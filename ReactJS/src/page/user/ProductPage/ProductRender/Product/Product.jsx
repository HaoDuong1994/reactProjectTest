import styles from "./Product.module.css";
import { Link } from "react-router-dom";
function Product(props) {
  const { data } = props;
  const handleButtonClick = props.method;
  const productList = data.data;
  const button = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <div className={styles.ProductContainer}>
      <div className={styles.itemList}>
        {productList
          ? productList.map((product) => {
              return (
                <div className={styles.itemContainer}>
                  <img src={product.img} />
                  <div className={styles.itemName}>{product.productName}</div>
                  <div className={styles.itemPrice}>{product.buyPrice}</div>
                  <button className={styles.itemButton}>
                    <Link to={`/product/${product.productCode}`}>Details</Link>
                  </button>
                </div>
              );
            })
          : []}
      </div>
      <div className={styles.buttonList}>
        {button.map((item, index) => {
          return (
            <div
              onClick={() => {
                handleButtonClick(index + 1);
              }}
              key={index}
              className={styles.buttonItem}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Product;
