import styles from "./PaymentInfor.module.css";
import { BsCash } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { memo } from "react";
import { useState } from "react";
function PaymentInfor(props) {
  const { data } = props;
  const valueInPut = (e) => {
    if (e.target.name == "card") {
      const booleanValue = JSON.parse(true);
      data.setUserInfor({
        ...data.userInfor,
        [e.target.name]: booleanValue,
        ["cash"]: false,
      });
    }
    if (e.target.name == "cash") {
      const booleanValue = JSON.parse(true);
      data.setUserInfor({
        ...data.userInfor,
        [e.target.name]: booleanValue,
        ["card"]: false,
      });
    }
    if ((e.target.name != "cash") & (e.target.name != "card")) {
      data.setUserInfor({ ...data.userInfor, [e.target.name]: e.target.value });
    }
  };
  const [checkCash, setCheckCash] = useState(false);
  const [checkCard, setCheckCard] = useState(false);
  const handleClickCash = () => {
    setCheckCash(true);
    setCheckCard(false);
  };
  const handleClickCard = () => {
    setCheckCash(false);
    setCheckCard(true);
  };
  return (
    <div className={styles.paymentInforContainer}>
      <h2>RYW Shop Payment</h2>
      <form className={styles.mainContent}>
        <div className={styles.infor}>
          <h5>Delivery Information</h5>
          <input
            onChange={valueInPut}
            type="text"
            placeholder="Receiver Name"
            name="receiverName"
          />
          <input
            onChange={valueInPut}
            type="text"
            placeholder="Receiver Phone Contact"
            name="phoneNumber"
          />
          <input
            onChange={valueInPut}
            type="text"
            placeholder="Adrress"
            name="address"
          />
          <input
            onChange={valueInPut}
            type="text"
            placeholder="Take note"
            name="note"
          />
        </div>
        <div className={styles.method}>
          <h5>Payment Method</h5>
          <div className={styles.inputWrapper}>
            <div className={styles.inputPayment}>
              <input
                onClick={handleClickCard}
                onChange={valueInPut}
                type="radio"
                name="card"
                checked={checkCard}
              />
              <label>Payment by card</label>
              <BsCash className={styles.icon} />
            </div>
            <div className={styles.inputPayment}>
              <input
                onClick={handleClickCash}
                onChange={valueInPut}
                type="radio"
                name="cash"
                checked={checkCash}
              />
              <label>Cash On Delivery</label>
              <BsBank className={styles.iconBank} />
            </div>
            <div className={styles.contentPayment}>
              <p>Vietcombank Hung Vuong Branch</p>
              <p>Account Number: 0788911111111</p>
              <p>Account Holder: RMW Shop</p>
              <p>Transfer content: Your name + Payment</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default memo(PaymentInfor);
