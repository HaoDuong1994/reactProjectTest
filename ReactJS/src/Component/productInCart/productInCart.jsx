import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/Context";
import styles from "./productInCart.module.css";
import { redirect, useNavigate } from "react-router-dom";
import { getProductDetail } from "../../utils/getProduct";
function ProductInCartPage() {
  const navigate = useNavigate();
  const value = useContext(Context);
  const gmailUser = value.gmailUser;
  const [productCartList, setProductCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(productCartList);
  const product = value.productInCart;
  const { handleDeleteCart } = value;
  const numberFormat = new Intl.NumberFormat("en-us");
  const handleInput = (e) => {
    setQuantity(Number(e.target.value));
  };
  const handleInCrease = (id, currentQuantity) => {
    setProductCartList((cartlist) => {
      const data = cartlist.map((item) => {
        return item.productCode === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });
      return data;
    });
  };
  const handleDeCrease = (id, currentQuantity) => {
    setProductCartList((cartlist) => {
      const data = cartlist.map((item) => {
        return item.productCode === id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      return data;
    });
  };
  // get product
  useEffect(() => {
    const getProduct = async () => {
      const data = await product.map(async (id) => {
        const productData = await getProductDetail(id);
        productData.data.quantity = 1;
        return productData.data;
      });
      const result = await Promise.all(data);
      setProductCartList(result);
    };
    getProduct();
  }, [product]);
  // get total price
  useEffect(() => {
    const priceFinal = productCartList.reduce((total, currentValue) => {
      return total + currentValue.buyPrice * currentValue.quantity;
    }, 0);
    setTotalPrice(priceFinal);
  }, [productCartList]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gmailUser) alert("You Should Login");
    navigate("/user/payment");
  };
  return (
    <form
      onSubmit={handleSubmit}
      medthod="GET"
      action="http://localhost:5173/product"
      className={styles.container}>
      <div className={styles.productItem}>PRODUCT ITEM</div>
      <div className={styles.cartList}>CART LIST</div>
      <div className={styles.itemShowWrapper}>
        {productCartList.map((product, index) => {
          return (
            <div key={index} className={styles.itemShow}>
              <img src={product.img} />
              <div className={styles.marginLeft}> {product.productName}</div>
              <div className={`${styles.quantityShow} ${styles.marginLeft}`}>
                <div
                  onClick={() => {
                    handleDeCrease(product.productCode);
                  }}
                  className={`${styles.buttonDecrese} ${styles.center}`}>
                  -
                </div>
                <input onChange={handleInput} value={product.quantity} />
                <div
                  onClick={() => {
                    handleInCrease(product.productCode, product.quantity);
                  }}
                  className={`${styles.buttonIncrese} ${styles.center}`}>
                  +
                </div>
                <span>
                  {numberFormat.format(product.buyPrice * product.quantity)}
                </span>
              </div>
              <div
                onClick={() => {
                  handleDeleteCart(product.productCode);
                }}
                className={`${styles.marginLeft} ${styles.buttonDelete}`}>
                X
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.showTotalPrice}>
        <span className={styles.title}>TOTAL PRICE:</span>
        <span className={styles.price}>{numberFormat.format(totalPrice)}</span>
      </div>
      <button className={styles.cartOrder}>Order</button>
      <br></br>
    </form>
  );
}
export default ProductInCartPage;
