import style from "../avart/avart.module.css";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";

const Avart = () => {
  return (
    <div className={style.big}>
      <div className={style.mejin}>
        <div>
          <h2>maroon</h2>
        </div>
        <div>
          <p>Каталог</p>
        </div>
        <div>
          <p>О нас</p>
        </div>
        <div>
          <p>Магазины</p>
        </div>
        <div>
          <p>Контакты</p>
        </div>
      </div>
      <div className={style.icon}>
        <FaInstagram />
        <BiLogoFacebook />
        <FiTwitter />
      </div>
    </div>
  );
};

export default Avart;
