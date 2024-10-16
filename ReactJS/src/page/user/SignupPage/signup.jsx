import styles from "./signup.module.css";
import { useState } from "react";
import Validate from "../../../utils/Validation";
import { SignUpUser } from "../../../utils/userApi";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function SignUpPage() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    password: "",
    email: "",
    repassword: "",
  });
  const [errorValidate, setErrorValidate] = useState({});
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = Validate(post);
    setErrorValidate(error);
    if (error && typeof error === "object" && Object.keys(error).length > 0) {
      return;
    }
    async function callApi() {
      try {
        if (post.password != post.repassword)
          return alert("Repassword incorrect");
        const data = await SignUpUser(post);
        if (data.status === 200) {
          alert("Sigup sucess");
          navigate("/product");
          const jwt = data.data.data.token;
          cookies.set("jwt", jwt);
        }
        if (data.status === 500) {
          const message = data.data.message;
          alert(message);
          alert("please try again");
        }
      } catch (error) {
        console.log("error here", error);
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
        {errorValidate.name ? (
          <span className={styles.alignSelf}>{errorValidate.name}</span>
        ) : null}
        <input
          name="email"
          onChange={handleInput}
          type="text"
          placeholder="Enter your email (*)"
        />
        {errorValidate.email ? (
          <span className={styles.alignSelf}>{errorValidate.email}</span>
        ) : null}
        <input
          onChange={handleInput}
          name="password"
          type="password"
          placeholder="Enter your password (*)"
        />
        {errorValidate.password ? (
          <span className={styles.alignSelf}>{errorValidate.password}</span>
        ) : null}
        <input
          onChange={handleInput}
          name="repassword"
          type="password"
          placeholder="Enter again password (*)"
        />
        {errorValidate.repassword ? (
          <span className={styles.alignSelf}>{errorValidate.repassword}</span>
        ) : null}
        <button>Sign up</button>
      </form>
    </div>
  );
}
export default SignUpPage;
