import style from "../buy/buy.module.css";
import Homehead from "../../components/homehead/Homehead";
import { BiRuble } from "react-icons/bi";
import Avart from "../../components/avart/Avart";
import nkar from "../../pages/buy/img/nkar.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config";

const Buy = () => {
  const [ogtagorcum, setOgtagorcum] = useState(false);
  const [sastav, setSastav] = useState(false);
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const clicforogt = () => {
    setOgtagorcum(!ogtagorcum);
  };
  const clicforsastav = () => {
    setSastav(!sastav);
  };

  useEffect(() => {
    axios.get(`${SERVER_URL}/products/${id}`).then((data) => {
      console.log(data.data);
      setProduct(data.data);
    });
  }, [id]);

  const [random, setRandom] = useState([]);
  useEffect(() => {
    axios.get(`${SERVER_URL}/products/random`).then((data) => {
      setRandom(data.data);
    });
  }, []);

  return (
    <div>
      <Homehead />
      <div className={style.biger}>
        <div className={style.big}>
          <div className={style.img}>
            <img src={`${SERVER_URL}${product.img}`} alt="" />
          </div>
          <div className={style.info}>
            <h2 className={style.h2}>{product?.name}</h2>
            <p className={style.p}>{product?.category}</p>
            <div className={style.divp}>
              <p className={style.p2}>{product.discription}</p>
            </div>

            <div className={style.f}>
              <div className={style.plus}>
                <div className={style.line}></div>
                <div className={style.h} onClick={clicforogt}>
                  <p className={style.p3}>Состав </p>
                  <p className={style.open}>{ogtagorcum ? "-" : "+"}</p>
                </div>

                {ogtagorcum && (
                  <div className="accordion-content">{product.ogtagrcum}</div>
                )}
                <div className={style.line}></div>
                <div>
                  <div className={style.h} onClick={clicforsastav}>
                    <p className={style.p3}>Способ применения </p>
                    <p className={style.open}>{sastav ? "-" : "+"}</p>
                  </div>
                  {sastav && <div>{product.sastav}</div>}
                  <div className={style.line}></div>
                </div>
              </div>
              <div className={`${style.b} ${style.open}`}>
                {product?.ogtagorcum}
              </div>
            </div>
            <div className={style.ml}>
              <p>Объем:</p>
              <label htmlFor="ml50">
                <input type="radio" id="ml50" name="size" value="50ml" />
                50ml
              </label>
              <label htmlFor="ml30">
                <input type="radio" id="ml30" name="size" value="30ml" />
                30ml
              </label>
            </div>
            <div className={style.probel}></div>
            <div className={style.addmarket}>
              <p className={style.r}>
                {product?.prise} <BiRuble />
              </p>
              <button className={style.btt}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.nkar}>
        {random.map((rand, i) => {
          return (
            <div key={i} className={style.imgg}>
              <img src={`${SERVER_URL}${rand.img}`} alt="" />
              <div className={style.inf}>
                <div>
                  <p className={style.pp}>{rand.name}</p>
                  <p className={style.pp1}>{rand.cotegory} </p>
                </div>
                <div>
                  <p className={style.pp2}>
                    {rand.prise} <BiRuble />
                  </p>
                  <p className={style.pp3}> 100g</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Avart />
    </div>
  );
};

export default Buy;
