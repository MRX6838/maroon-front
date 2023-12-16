import style from "../map/map.module.css";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
const Map = () => {
  return (
    <div className={style.big}>
      <div className={style.infodiv}>
        <div className={style.info}>
          <h2 className={style.h2}>Контакты</h2>
          <div>
            <p className={style.p2}>Адрес</p>
            <p className={style.p1}>
              Санкт-Петербург, ул. Большая Конюшенная, 19
            </p>
          </div>
          <div>
            <p className={style.p2}>Телефон</p>
            <p className={style.p1}>+7 (923) 888-90-60</p>
          </div>
          <div>
            {" "}
            <p className={style.p2}>E-mail</p>
            <p className={style.p1}>info@maroon.ru</p>
          </div>
          <div className={style.img}>
            <BiLogoFacebook />
            <FaInstagram />
            <FiTwitter />
          </div>
        </div>
      </div>
      <div className={style.map}>
        <iframe
          className={style.mp}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12189.649625401422!2d44.51974735!3d40.19988835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd35b54590c5%3A0x57a54349ec26f44d!2sKomitas%20Avenue%20Guest%20House!5e0!3m2!1sru!2sam!4v1698672830587!5m2!1sru!2sam"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
