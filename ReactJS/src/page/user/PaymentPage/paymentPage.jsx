import PaymentInfor from "./PaymentInfor/PaymentInfor";
import ProductRender from "./PaymentProduct/ProductRender";
import styles from "./PaymentPage.module.css";
import { Context } from "../../../utils/Context";
import { useContext, useEffect, useState, useMemo, memo } from "react";
import { getUserId } from "../../../utils/userApi";
function PaymentPage() {
  const value = useContext(Context);
  const gmailUser = value.gmailUser;
  const [userId, setUserId] = useState(null);
  const [userInfor, setUserInfor] = useState({
    phoneNumber: "",
    address: "",
    note: "",
    card: false,
    cash: false,
  });
  const productIncart = value.productInCart;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserId(gmailUser);
      setUserId(data.data.data[0].personID);
    };
    if (gmailUser) {
      fetchData();
    }
  }, [gmailUser]);
  return (
    <div className={styles.paymentContainer}>
      <PaymentInfor data={{ userInfor, setUserInfor }} />
      <ProductRender
        data={{ userInfor, setUserInfor, productIncart, userId }}
      />
    </div>
  );
}
export default memo(PaymentPage);
