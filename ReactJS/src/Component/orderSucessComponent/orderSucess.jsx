import styles from "./order.module.css";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function OrderSucess() {
  const navigate = useNavigate();

  const handleViewOrder = () => {
    navigate("/user/ordered");
  };
  const handleShoping = () => {
    navigate("/product");
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SiTicktick />
      </div>
      <div>Your submission has been sent</div>
      <div className={styles.buttonGroup}>
        <button onClick={handleViewOrder}>View order</button>
        <button onClick={handleShoping}>Continue shopping</button>
      </div>
    </div>
  );
}
export default OrderSucess;
