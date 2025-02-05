import axios from "axios";
const createOrder = async (body) => {
  const response = await axios.post(
    "http://localhost:3000/orders/create-order",
    body
  );
  console.log(response);
  return response;
};
const createOrderDetail = async (body) => {
  const response = await axios.post(
    "http://localhost:3000/orderDetails/create",
    body
  );
  return response;
};
export { createOrder, createOrderDetail };
