import PaymentInfor from "./PaymentInfor/PaymentInfor";
import ProductRender from "./PaymentProduct/ProductRender";
import styles from "./PaymentPage.module.css";
function PaymentPage() {
  return (
    <div className={styles.paymentContainer}>
      <PaymentInfor />
      <ProductRender />
    </div>
  );
}
export default PaymentPage;
