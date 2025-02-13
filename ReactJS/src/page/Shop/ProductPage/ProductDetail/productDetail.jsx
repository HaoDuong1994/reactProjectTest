import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getProductDetail } from "../../../../utils/getProduct";
function ProductDetailShopPage() {
  let params = useParams();
  const productCode = params.id;
  const [productDetail, setProductDetail] = useState(null);
  useEffect(() => {
    const callAPI = async () => {
      const data = await getProductDetail(productCode);
      console.log(data);
      setProductDetail(data.data);
    };
    callAPI();
  }, [productCode]);
  return (
    <div className="p-5">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Product Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Product Name
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Product Name
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">Description</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  );
}
export default ProductDetailShopPage;
