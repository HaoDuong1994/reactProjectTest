import styles from "./ProductRender.module.css";
import SearchNav from "./SearchNav/SearchNav";
import Product from "./Product/Product";
import { useState, useEffect } from "react";
import getProduct from "../../../../utils/getProduct";
import {
  getSearchProduct,
  getFilterProduct,
} from "../../../../utils/getProduct";
function ProductRender() {
  const [productSelect, setProductSelect] = useState("all");
  const [page, setPage] = useState("1");
  const [productData, setProductData] = useState();
  const [valueSearch, setValueSearch] = useState("");
  const [handlePrice, setHandlePrice] = useState("");
  const handleClick = (productType) => {
    setProductSelect(productType);
  };
  const handleClickButton = (numberPage) => {
    setPage(numberPage);
  };
  const handleSearchProduct = async (value, filterPrice) => {
    if (filterPrice !== "") {
      const data = await getFilterProduct(value, filterPrice);
      const result = data.data;
      //If user request wrong value
      if (result.EC == 1) return setProductData("");
      // Available value
      setProductData(result);
    } else {
      const data = await getSearchProduct(value);
      setProductData(data);
    }
  };
  const handleSearchInput = (e) => {
    setValueSearch(e.target.value);
  };
  const objectMethod = {
    handleClick,
    handleClickButton,
    handleSearchProduct,
    handleSearchInput,
    valueSearch,
    handlePrice,
    setHandlePrice,
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
