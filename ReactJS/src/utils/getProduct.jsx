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

export default getAllProduct;
