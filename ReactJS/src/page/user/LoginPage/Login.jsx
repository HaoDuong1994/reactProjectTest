import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { Context } from "../../../utils/Context";
import { useState, useEffect, useContext } from "react";
import { LoginUser } from "../../../utils/userApi";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
function Login() {
  const cookie = new Cookies();
  const [errorLogin, setErrorLogin] = useState(null);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await LoginUser(post);
    if (
      result.status == 400 &&
      result.data.message == "Invalid email, please try again"
    ) {
      const error = result.data.message;
      setErrorLogin(error);
    }
    if (
      result.status == 400 &&
      result.data.message == "PassWord not correct please try again"
    ) {
      setErrorLogin("Password not correct please try again");
    }
    if (result.status == 200) {
      setErrorLogin(null);
      console.log(result);
      alert("Login sucess");
      const jwt = result.data.result.token;
      cookie.set("jwt", jwt);
      navigate("/product");
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.loginContainer}>
        <h3 className={styles.title}>LOG IN</h3>
        <div className={styles.br}></div>
        <input
          onChange={handleInput}
          name="email"
          type="text "
          placeholder="Email@.com"
        />
        {errorLogin && errorLogin == "Invalid email, please try again" ? (
          <span className={styles.errorLogin}>{errorLogin}</span>
        ) : null}
        <input
          onChange={handleInput}
          name="password"
          type="password"
          placeholder="Your password"
        />
        {errorLogin && errorLogin == "Password not correct please try again" ? (
          <span className={styles.errorLogin}>{errorLogin}</span>
        ) : null}
        <button>Log in</button>
        <div className={styles.signup}>
          <Link>No account sign up here</Link>
        </div>
      </div>
    </form>
  );
}
export default Login;
