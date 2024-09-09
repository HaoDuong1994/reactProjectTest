import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./productDetail.module.css";
import ImgRender from "./ImgRender/Img";
import ContentRender from "./ContentRender/ContentRender";
import { getProductDetail } from "../../../utils/getProduct";
function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const data = await getProductDetail(id);
      setProduct(data.data);
    };
    getProduct();
  }, [id]);
  return (
    <div className={styles.container}>
      <ImgRender data={product} />
      <ContentRender data={product} />
    </div>
  );
}
export default ProductDetails;
