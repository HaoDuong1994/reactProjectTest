import styles from "./ProductRender.module.css";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../../utils/Context";
import { getProductDetail } from "../../../../utils/getProduct";
import { createOrder, createOrderDetail } from "../../../../utils/orderApi";
function ProductRender(props) {
  const value = useContext(Context);
  const handleDeleteCart = value.handleDeleteCart;
  const { getUserInfor } = value;
  const navigate = useNavigate();
  const productID = props.data.productIncart;
  const [productPayment, setProductPayment] = useState([]);
  const numberFormat = new Intl.NumberFormat("en-us");
  const { userInfor, productIncart, userId } = props.data;
  useEffect(() => {
    const getProductDetails = async () => {
      const product = await productID.map(async (id) => {
        const data = await getProductDetail(id);
        return data.data;
      });
      const result = await Promise.all(product);
      setProductPayment(result);
    };
    getProductDetails();
  }, []);
  const handleOrder = async () => {
    const body = { ...userInfor, idUser: userId };
    getUserInfor(body);
    //Create Order
    let order = await createOrder(body);
    order.data.card = body.card;
    order.data.cash = body.cash;
    order.data.productDetail = productPayment;
    //Create Order Details
    if (order.status == 200) {
      const bodyOrderDetail = order.data;
      const data = bodyOrderDetail.productDetail.map(async (product) => {
        product.idUser = bodyOrderDetail.idUser;
        product.idOrder = bodyOrderDetail.idOrder;
        if (bodyOrderDetail.card) {
          product.card = true;
        } else {
          product.card = false;
        }
        const data = await createOrderDetail(product);
        return data;
      });
      const result = await Promise.all(data);
      if (result[0].status != 200) {
        alert("Order create fail");
      } else {
        for (let i = 0; i < result.length; i++) {
          const idProduct = result[i].data.data.productCode;
          handleDeleteCart(idProduct);
        }
        navigate("/order-confirm");
      }
    }
  };
  return (
    <div className={styles.producrRenderContainer}>
      <span>Your order </span>
      <div className={styles.title}>
        <span>( {productPayment.length} products )</span>
      </div>
      <hr></hr>
      <table className={styles.productContainer}>
        <tbody>
          {productPayment.map((product, index) => {
            return (
              <tr key={index}>
                <td className={styles.imgProduct}>
                  <img src={product.img} />
                </td>
                <td>{product.productName}</td>
                <td className={styles.buyPrice}>
                  {numberFormat.format(product.buyPrice)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr></hr>
      <div className={styles.button}>
        <button onClick={handleOrder}>Order</button>
      </div>
      <div className={styles.notedPayment}>
        <p>
          -The above price does not include shipping fee. Shipping fee will be
          informed by staff when confirming order.
        </p>
        <p>
          Order processing time: 8:00-17:00 Monday to Saturday. Orders after
          this time will be processed on the next business day..
        </p>
      </div>
    </div>
  );
}
export default memo(ProductRender);
