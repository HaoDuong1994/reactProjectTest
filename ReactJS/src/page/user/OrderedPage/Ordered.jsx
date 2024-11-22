import styles from "./Ordered.module.css";
import { useContext } from "react";
import { Context } from "../../../utils/Context";
import { useNavigate } from "react-router-dom";

function Ordered() {
  const value = useContext(Context);
  const navigate = useNavigate();
  const { totalPriceInCart, getOrderInfor, getProductDetail } = value;
  const formatNumber = new Intl.NumberFormat();
  const handleClickShopping = () => {
    navigate("/product");
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.infor}>
          <h6 className={styles.headerInfor}>Payment Information</h6>
          <p>Thank you. Your order has been received.</p>
          <ul className={styles.listInfor}>
            <li>
              <h6 className={styles.color}>Receiver</h6>
              <p>{getOrderInfor.receiverName}</p>
            </li>
            <li>
              <h6 className={styles.color}>Phone number</h6>
              <p>{getOrderInfor.phoneNumber}</p>
            </li>
            <li>
              <h6 className={styles.color}>Payment method</h6>
              <p>{getOrderInfor.card ? "Card" : "Cash"}</p>
            </li>
            <li>
              <h6 className={styles.color}>Address</h6>
              <p>{getOrderInfor.address}</p>
            </li>
          </ul>
          <h6 className={styles.headerInfor}>Product Information</h6>
          <ul className={styles.listInfor}>
            <li>
              <h6 className={styles.color}>Product Name</h6>
              <p>
                {getProductDetail.map((product) => {
                  return <span>{product.productName}, </span>;
                })}
              </p>
            </li>
            <li>
              <h6 className={styles.color}>Quantity Product</h6>
              <p>{getProductDetail.length}</p>
            </li>
            <li>
              <h6 className={styles.color}>Delivery fee</h6>
              <p>Free</p>
            </li>
            <li>
              <h6 className={styles.color}>Total </h6>
              <p>{formatNumber.format(totalPriceInCart)}</p>
            </li>
          </ul>
          <button onClick={handleClickShopping} className={styles.button}>
            Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
export default Ordered;
