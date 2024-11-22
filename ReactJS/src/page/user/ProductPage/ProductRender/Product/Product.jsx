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
      {/* Render No Product Found*/}
      {productList == [] || productList == null ? (
        <div className={styles.errorFound}>
          <div>No Result Found</div>
          <img src="https://static.vecteezy.com/system/resources/previews/007/872/974/non_2x/file-not-found-illustration-with-confused-people-holding-big-magnifier-search-no-result-data-not-found-concept-can-be-used-for-website-landing-page-animation-etc-vector.jpg" />
          <div></div>
        </div>
      ) : null}
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
