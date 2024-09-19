import styles from "./signup.module.css";
import { useState } from "react";
import axios from "axios";

import { SignUpUser } from "../../../utils/userApi";
import { useNavigate } from "react-router-dom";
function SignUpPage() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    password: "",
    email: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const handleSignup = async () => {
    //   const data = await SignUpUser(post);
    //   console.log(data);
    //   if (data.data.message === "Create user success") {
    //     alert("Sign up sucess");
    //     navigate("/product");
    //   } else {
    //     //
    //   }
    // };
    async function callApi() {
      try {
        const data = await SignUpUser(post);
        if (data.status === 200) {
          alert("Sigup sucess");
          navigate("/product");
        }
        if (data.status === 500) {
          //
          const message = data.data.message;
          alert(message);
          alert("please try again");
        }
      } catch (error) {
        console.log("error here");
      }
    }
    callApi();
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <h3>Sign up</h3>
        <div>Already have account</div>
        <input
          name="name"
          onChange={handleInput}
          type="text"
          placeholder="Enter your name (*)"
        />
        <input
          name="email"
          onChange={handleInput}
          type="text"
          placeholder="Enter your email (*)"
        />
        <input
          onChange={handleInput}
          name="password"
          type="password"
          placeholder="Enter your password (*)"
        />
        <input
          onChange={handleInput}
          name="repassword"
          type="password"
          placeholder="Enter again password (*)"
        />
        <button>Sign up</button>
      </form>
    </div>
  );
}
export default SignUpPage;
