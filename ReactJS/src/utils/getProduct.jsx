import axios from "axios";
const getAllProduct = async (productType, page) => {
  if (productType) {
    const response = await axios.get(
      `http://localhost:3000/product?productType=${productType}&page=${page}`
    );
    return response.data;
  } else {
    const response = await axios.get(`http://localhost:3000/product`);
    return response.data;
  }
};
const getSearchProduct = async (string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/product?productName=${string}`
    );
    return response.data;
  } catch (error) {
    console.log("error >>>>>>>>>>", error);
  }
};
const getProductDetail = async (id) => {
  const response = await axios.get(
    `http://localhost:3000/product/product-detail?productID=${id}`
  );
  return response.data;
};
const getFilterProduct = async (value, filterPrice) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/product/filter?productName=${value}&price=${filterPrice}`
    );
    return response.data;
  } catch (error) {
    console.log("errror >>>>", error);
  }
};
export default getAllProduct;
export { getProductDetail, getSearchProduct, getFilterProduct };
