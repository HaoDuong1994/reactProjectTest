import styles from "./productShow.module.css";
import { Link } from "react-router-dom";
function ProductShow(props) {
  const productList = props.data.data;
  console.log(productList);
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Product Code</th>
          <th>Img</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productList
          ? productList.map((product, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCode}</td>
                  <td>
                    <img src={product.img} />
                  </td>
                  <td>{product.buyPrice}</td>
                  <td>
                    <Link to={`/shopUser/product/${product.productCode}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}
export default ProductShow;
