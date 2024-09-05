import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./productDetail.module.css";
import ImgRender from "./ImgRender/Img";
import ContentRender from "./ContentRender/ContentRender";
function ProductDetails() {
  useEffect(() => {}, []);
  console.log(useParams());
  const { id } = useParams();
  console.log(id);
  return (
    <div className={styles.container}>
      <ImgRender />
      <ContentRender />
    </div>
  );
}
export default ProductDetails;
