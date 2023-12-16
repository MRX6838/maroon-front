import style from "../discription/discription.module.css";
import nkar from "../discription/img/600.png";

const Discription = () => {
  return (
    <div className={style.big}>
      <div className={style.nkar}>
        <img src={nkar} alt="" />
        <div className={style.divp}>
          <p className={style.p}>
            “Мы стремимся сделать уход за кожей доступным и приятным ритуалом
            для всех, кто хочет заботиться о себе и своем теле”
          </p>
          <div className={style.bttdiv}>
            <button className={style.btt}>Наша история</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discription;
