import styles from "./Content.module.css";
import { useState } from "react";
function ContentRender() {
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
        <div className={styles.name}>Racket Lining Windstorm 72</div>
        <div>
          Product code:
          <span className={styles.color}> SK_11111</span>
        </div>
        <div>
          Vợt cầu lông Lining Windstorm 72 new chính hãng vừa được cho ra mắt
          vào thời điểm gần đây với thiết kế thiên về thủ phản tạt cầu nhanh
          trên lưới.
        </div>
        <div>
          Type:
          <span className={styles.color}> Racket</span>
        </div>
        <div className={styles.price}>900.000</div>
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
          <button className={styles.addCard}>Add to card</button>
          <button className={styles.buy}>Buy</button>
        </div>
      </div>
      <div className={styles.shopSystemWrapper}>Shop system render</div>
    </div>
  );
}
export default ContentRender;
