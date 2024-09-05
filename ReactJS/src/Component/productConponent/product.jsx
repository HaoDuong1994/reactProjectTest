import { useContext } from "react";
import productContext from "../../App";
function ProductTab(props) {
  const { styles, data } = props;
  return (
    <div className={styles.contentItem}>
      <div className={styles.title}>{data.productName}</div>
      <img className={styles.img} src={data.img} />
      <div className={styles.itemDes}>Special Product</div>
      <h6>{data.buyPrice}</h6>
    </div>
  );
}
export default ProductTab;
