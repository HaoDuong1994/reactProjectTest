import styles from "./ProductRender.module.css";
import SearchNav from "./SearchNav/SearchNav";
import Product from "./Product/Product";
import { useState, useEffect } from "react";
import getProduct from "../../../../utils/getProduct";
function ProductRender() {
  const [productSelect, setProductSelect] = useState("racket");
  const [page, setPage] = useState("1");
  const [productData, setProductData] = useState();
  const handleClick = (productType) => {
    setProductSelect(productType);
  };
  const handleClickButton = (numberPage) => {
    setPage(numberPage);
  };
  const objectMethod = {
    handleClick,
    handleClickButton,
  };
  useEffect(() => {
    const callApi = async () => {
      const data = await getProduct(productSelect, page);
      setProductData(data);
    };
    callApi();
  }, [productSelect, page]);
  return (
    <div className={styles.container}>
      <SearchNav method={objectMethod} />
      <Product
        method={handleClickButton}
        data={productData ? productData : []}
      />
    </div>
  );
}
export default ProductRender;
