import axios from "axios";
import { useState } from "react";
const SignUpUser = async (body) => {
  try {
    const data = await axios.post(
      "http://localhost:3000/customer/create",
      body
    );
    return data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
export { SignUpUser };
