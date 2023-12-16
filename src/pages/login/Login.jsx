import style from "./login.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { SERVER_URL } from "../../config";
import axios from "axios";
import { AdminContext } from "../../App";

const Login = () => {
  const [errors, setErrors] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AdminContext);

  return (
    <div className={style.mec}>
      <h1 className={style.h1}>Maroon</h1>
      <div className={style.logdiv}>
        <div className={style.spann}>
          <input
            className={style.put}
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
        </div>
        <div className={style.spann}>
          <input
            className={style.put}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <span>{errors}</span>
        </div>

        <div className={style.get}>
          <span className={style.span}>forgot password</span>
          <span className={style.span}>
            <Link to={"/registration"}> Registration </Link>
          </span>
        </div>

        <button
          onClick={() => {
            axios
              .post(`${SERVER_URL}/admin/login`, {
                email,
                password,
              })
              .then((data) => {
                setToken(data.data.token);
                localStorage.setItem("token", data.data.token);
              })
              .catch((err) => {
                setErrors(err.response.data.message);
              });
          }}
          className={style.btt}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
