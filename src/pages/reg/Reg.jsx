import axios from "axios";
import style from "./reg.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SERVER_URL } from "../../config";
const Reg = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className={style.big}>
      <div className={style.hh1}>
        <h1 className={style.h1}> Maroon</h1>
      </div>

      <div className={style.putbig}>
        <h1>Registration</h1>
        <div className={style.span}>
          <input
            className={style.put}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <span>{errors.name}</span>
        </div>
        <div className={style.span}>
          <input
            className={style.put}
            type="text"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            placeholder="Surname"
          />
          <span>{errors.surname}</span>
        </div>
        <div className={style.span}>
          <input
            className={style.put}
            type="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
          />
          <span>{errors.email}</span>
        </div>
        <div className={style.span}>
          <input
            className={style.put}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <span>{errors.password}</span>
        </div>

        <div className={style.span}>
          <input
            className={style.put}
            type="password"
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
            placeholder=" replay Password "
          />
          <span>{errors.confirm}</span>
        </div>

        <div className={style.get}>
          <span className={style.span}>
            <Link to={"/login"}>Log In</Link>
          </span>
        </div>
      </div>
      <div className={style.bttdiv}>
        <button
          onClick={() => {
            axios
              .post(`${SERVER_URL}/admin/registration`, {
                name,
                surname,
                email,
                password,
                confirm,
              })
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                setErrors(err.response.data.error);
              });
          }}
          className={style.btt}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Reg;
