import style from "../vesna/vesna.module.css";
import nkar from "./img/банер 1.png";
const Vesna = () => {
  return (
    <div className={style.bigimg}>
      <div className={style.nkari}>
        <img src={nkar} alt="" />
        <div className={style.inf}>
          <div>
            <h1 className={style.vernagir}>Встречайте весну вместе с нами</h1>
          </div>
          <div>
            <p className={style.paragraf}>
              Попробуйте новую коллекцию ухаживающих средств для лица с SPF
              защитой
            </p>
          </div>
          <div>
            <button className={style.btt}>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vesna;
