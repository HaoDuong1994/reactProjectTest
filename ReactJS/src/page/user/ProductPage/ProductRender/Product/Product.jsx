import styles from "./Product.module.css";
import { Link } from "react-router-dom";
function Product(props) {
  const { data } = props;
  const handleButtonClick = props.method;
  const productList = data.data;
  const button = ["1", "2", "3", "4", "5", "6", "7"];
  const numberFormat = new Intl.NumberFormat("en-us");

  return (
    <div className={styles.ProductContainer}>
      <div className={styles.itemList}>
        {productList
          ? productList.map((product, index) => {
              return (
                <Link
                  key={index}
                  className={styles.itemContainer}
                  to={`/product/${product.productCode}`}>
                  <img src={product.img} />
                  <div className={styles.itemName}>{product.productName}</div>
                  <div className={styles.itemPrice}>
                    {numberFormat.format(product.buyPrice)}
                    <span> Đ</span>
                  </div>
                </Link>
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
