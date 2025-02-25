import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getProductDetail } from "../../../../utils/getProduct";
import { useContext } from "react";
import { Context } from "../../../../utils/Context";
import { updateProduct } from "../../../../utils/getProduct";
function ProductDetailShopPage() {
  let params = useParams();
  const productCode = params.id;
  const [productDetail, setProductDetail] = useState(null);
  const value = useContext(Context);
  const { editProduct, setEditProduct } = value;
  const valueInput = (e) => {
    setEditProduct({
      ...editProduct,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const callAPI = async () => {
      const data = await getProductDetail(productCode);
      setProductDetail(data.data);
    };
    callAPI();
  }, [productCode]);
  const submitValue = async () => {
    await updateProduct(editProduct);
  };
  return (
    <form className="p-5">
      <h2>Edit Page</h2>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Product Name
        </span>
        <input
          onChange={(e) => {
            valueInput(e);
          }}
          type="text"
          name="productName"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Product Code
        </span>
        <input
          onChange={(e) => {
            valueInput(e);
          }}
          type="text"
          name="productCode"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Price $</span>
        <input
          onChange={(e) => {
            valueInput(e);
          }}
          name="buyPrice"
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span className="input-group-text">VND</span>
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button">
          Product Type
        </button>
        <select
          onChange={(e) => {
            valueInput(e);
          }}
          className="form-select"
          name="productType"
          defaultValue="Racket"
          id="inputGroupSelect03"
          aria-label="Example select with button addon">
          <option selected>Choose...</option>
          <option value="racket">Racket</option>
          <option value="backpack">Back Pack</option>
          <option value="shirt">Shirt</option>
          <option value="pant">Pants</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Description</span>
        <textarea
          onChange={(e) => {
            valueInput(e);
          }}
          className="form-control"
          name="description"
          aria-label="With textarea"></textarea>
      </div>
      <button
        onClick={() => {
          submitValue();
        }}
        type="submit"
        className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default ProductDetailShopPage;
