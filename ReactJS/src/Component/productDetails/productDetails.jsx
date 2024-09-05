import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function ProductDetails() {
  useEffect(() => {}, []);
  const { id } = useParams();
  console.log(id);
  return <div>Hello product details</div>;
}
export default ProductDetails;
