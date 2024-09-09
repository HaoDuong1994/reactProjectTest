import styles from "./Content.module.css";
import { useState, useContext } from "react";
import { Context } from "../../../../utils/Context";
function ContentRender(props) {
  const { handleCart } = useContext(Context);
  const { data } = props;
  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.name}>{data ? data.productName : ""}</div>
        <div>
          Product code:
          <span className={styles.color}>{data ? data.productCode : ""}</span>
        </div>
        <div>{data ? data.description : ""}</div>
        <div>
          Type:
          <span className={styles.color}> {data ? data.productType : ""}</span>
        </div>
        <div className={styles.price}>{data ? data.buyPrice : 0}</div>
        <div className={styles.quantity}>
          <div onClick={handleDecrease} className={styles.button}>
            <span>-</span>
          </div>
          <div className={styles.number}>{quantity}</div>
          <div onClick={handleIncrease} className={styles.button}>
            <span>+</span>
          </div>
        </div>
        <div className={styles.buttonOrder}>
          <button
            onClick={() => {
              handleCart(data.productCode);
            }}
            className={styles.addCard}>
            Add to card
          </button>
          <button className={styles.buy}>Buy</button>
        </div>
      </div>
      <div className={styles.shopSystemWrapper}>
        <div className={styles.name}>Lining series</div>
        <img src="https://shopvnb.com/uploads/dong_san_pham/lightning-2.jpg" />
        <img src="https://shopvnb.com/uploads/dong_san_pham/highcarbon.jpg" />
        <img src="https://shopvnb.com/uploads/dong_san_pham/windstorm-2.jpg" />
        <img src="https://shopvnb.com/uploads/dong_san_pham/Turbo%20Charging-5.jpg" />
        <img src="https://shopvnb.com/uploads/dong_san_pham/3D-Calibar-3.jpg" />
      </div>
    </div>
  );
}
export default ContentRender;
