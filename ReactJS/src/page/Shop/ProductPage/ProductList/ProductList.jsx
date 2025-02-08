import Category from "./Catory";
import ProductShow from "./productShow";
import { useEffect, useState } from "react";
import getAllProduct from "../../../../utils/getProduct";
function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const callAPI = async () => {
      const data = await getAllProduct();
      setProductList(data);
    };
    callAPI();
  }, []);
  return (
    <div>
      <Category />
      <ProductShow data={productList != [] ? productList : []} />
    </div>
  );
}
export default ProductList;
