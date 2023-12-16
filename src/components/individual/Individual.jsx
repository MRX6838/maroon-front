import style from "../individual/indivindual.module.css";
import nkar from "../individual/img/Rectangle 38.png";
const Individual = () => {
  return (
    <div className={style.big}>
      <div className={style.info}>
        <div className={style.txt}>
          <h1 className={style.h1}>Индивидуальный уход</h1>
          <p>
            Не всегда очевидно, какие элементы и минералы необходимы коже, а
            многочисленные эксперименты с разными средствами только ухудшают ее
            качество. Заполните анкету, и мы подберем уход, подходящий именно
            вам, учитывая ваш образ жизни, место жительства и другие факторы.{" "}
          </p>

          <button className={style.btt}>Заполнить анкету</button>
        </div>
      </div>
      <div className={style.img}>
        <img src={nkar} alt="" />
      </div>
    </div>
  );
};

export default Individual;
