import stylemide from "./Homemiddle.module.css";
import aj from "./img/aj.png";
import dzax from "./img/dzax.png";
import { BsArrowRight } from "react-icons/bs";
const Homemiddle = () => {
  return (
    <div className={stylemide.big}>
      <div className={stylemide.nkar}>
        <img src={aj} alt="" />
        <p className={stylemide.p}>
          Уход для лица <BsArrowRight />
        </p>
      </div>

      <div className={stylemide.mid}>
        <h1>MAROON</h1>
        <p>Натуральная косметика для бережного ухода за кожей</p>
        <button className={stylemide.btt}>Подробнее</button>
      </div>

      <div className={stylemide.nkar}>
        <img src={dzax} alt="" />
        <p className={stylemide.p}>
          Уход для тела <BsArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Homemiddle;
