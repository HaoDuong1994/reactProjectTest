import { useContext } from "react";
import { Context } from "../../utils/Context";
import styles from "./productInCart.module.css";
function ProductInCartPage() {
  const value = useContext(Context);
  const product = value.productInCart;
  console.log(product);
  return (
    <div className={styles.container}>
      <div className={styles.productItem}>PRODUCT ITEM</div>
      <div className={styles.cartList}>CART LIST</div>
      <form className={styles.itemShowWrapper}>
        <div className={styles.itemShow}>
          <img src="https://shopvnb.com/img/180x180//uploads/gallery/giay-cau-long-lining-ayat003-1-chinh-hang..webp" />
          <div>Product name</div>
          <div className={styles.quantityShow}>
            <button className={styles.buttonDecrese}>-</button>
            <input value={30} />
            <button className={styles.buttonIncrese}>+</button>
            <span>30000000</span>
          </div>
        </div>
        <div className={styles.itemShow}>
          <img src="https://shopvnb.com/img/180x180//uploads/gallery/giay-cau-long-lining-ayat003-1-chinh-hang..webp" />
          <div>Product name</div>
          <div className={styles.quantityShow}>
            <button className={styles.buttonDecrese}>-</button>
            <input value={30} />
            <button className={styles.buttonIncrese}>+</button>
            <span>30000000</span>
          </div>
        </div>
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
      </form>
    </div>
  );
}
export default ProductInCartPage;
