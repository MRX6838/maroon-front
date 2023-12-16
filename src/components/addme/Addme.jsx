import style from "../addme/addme.module.css";
import nkar1 from "../addme/img/1.png";
import nkar2 from "../addme/img/2.png";
import nkar3 from "../addme/img/3.png";
import nkar4 from "../addme/img/4.png";
import nkar5 from "../addme/img/5.png";
import nkar6 from "../addme/img/6.png";
const Addme = () => {
  return (
    <div className={style.big}>
      <div className={style.img}>
        <div className={style.nkar}>
          <img src={nkar1} alt="" />
        </div>
        <div className={style.nkar}>
          <img src={nkar2} alt="" />
        </div>
        <div className={style.nkar}>
          <img src={nkar3} alt="" />
        </div>
        <div className={style.nkar}>
          <img src={nkar4} alt="" />
        </div>
        <div className={style.nkar}>
          <img src={nkar5} alt="" />
        </div>
        <div className={style.nkar}>
          <img src={nkar6} alt="" />
        </div>
      </div>
      <div className={style.inf}>
        <h1 className={style.h1}>Присоединяйтесь к нам</h1>
        <p className={style.p}>
          Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях
          первыми
        </p>
        <button className={style.btt}>Подписаться</button>
      </div>
    </div>
  );
};

export default Addme;
