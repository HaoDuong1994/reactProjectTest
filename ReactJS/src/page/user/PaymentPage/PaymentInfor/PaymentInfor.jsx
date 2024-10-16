import styles from "./PaymentInfor.module.css";
function PaymentInfor() {
  return (
    <div className={styles.paymentInforContainer}>
      <h2>RYW Shop Payment</h2>
      <div className={styles.mainContent}>
        <div className={styles.infor}>
          <h5>Delivery Information</h5>
          <input type="text" placeholder="Receiver Name" />
          <input type="text" placeholder="Receiver Phone Contact" />
          <input type="text" placeholder="Adrress" />
          <input type="text" placeholder="Take note" />
          <input type="text" placeholder="Take note" />
        </div>
        <div className={styles.method}>
          <h5>Payment Method</h5>
          <div className={styles.inputPayment}>
            <input type="radio" id="huey" name="drone" value="cash" checked />
            <label for="Cash">Cash on Delivery</label>
          </div>
          <div className={styles.inputPayment}>
            <input
              className={styles.card}
              type="radio"
              id="huey"
              name="drone"
              value="card"
              checked
            />
            <label for="Cash">Payment by card</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentInfor;
