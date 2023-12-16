import { useState } from "react";
import style from "./fitr.module.css";

const Filt = () => {
  const [open, setopen] = useState(null);
  const [info, setinfo] = useState([
    {
      name: "Уход для лица",
      surname1: "Крема",
      surname2: "Крема",
      surname3: "Крема",
      surname4: "Крема",
      surname5: "Крема",
      surname6: "Крема",
      name1: "Уход для тела",
      surname7: "Крема",
      surname8: "Крема",
      surname9: "Крема",
      surname10: "Крема",
      surname11: "Крема",
      surname12: "Крема",

      name2: "Крема",
      surname13: "Крема",
      surname14: "Крема",
      surname15: "Крема",
      surname16: "Крема",
    },
  ]);
  const u = "X";
  const clickhandler = (id) => {
    if (id === open) {
      setopen(null);
    } else {
      setopen(id);
    }
  };

  return (
    <div>
      {info.map((inf, id) => (
        <div key={id}>
          <div className={style.hh}>
            {open !== id ? (
              <button className="a" onClick={() => clickhandler(id)}>
                {"Фильтр"}
              </button>
            ) : (
              <button className={style.x} onClick={() => clickhandler(id)}>
                X
              </button>
            )}
          </div>

          <div className={`${style.b} ${open === id ? style.open : ""}`}>
            <div className={style.big}>
              <div className={style.mix}>
                <h3>Уход для лица</h3>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Крема</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Сыворотки</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Маски</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Пенки</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Тоники</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Пудры</label>
                </div>
              </div>
              <div className={style.mix}>
                <h3>Уход для тела</h3>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Крема</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Масла</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Скрабы</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Мыло</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Бомбочки для ванны</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Соль для ванны</label>
                </div>
              </div>
              <div className={style.mix}>
                <h3>Тип кожи</h3>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Нормальная</label>
                </div>{" "}
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Сухая</label>
                </div>{" "}
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Жирная</label>
                </div>{" "}
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Комбинированная </label>
                </div>
                <div className={style.bt}>
                  <button className={style.btt}>Применить</button>
                  <button className={style.btt}> Сбросить</button>
                </div>
              </div>
            </div>

            <div className={style.catalog}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filt;
