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
const LoginUser = async (body) => {
  try {
    const data = await axios.post("http://localhost:3000/customer/login", body);
    return data;
  } catch (error) {
    return error.response;
  }
};
const getUserId = async (gmail) => {
  try {
    const id = await axios.get("");
  } catch (error) {
    console.log("error get user id", error);
  }
};
export { SignUpUser, LoginUser };
