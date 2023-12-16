import style from "../item/item.module.css";
import { BiRuble } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { Link } from "react-router-dom";

const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/products`).then((data) => {
      setProducts(data.data);
    });
  }, []);
  return (
    <div>
      <div className={style.biger}>
        {products.map((product, index) => {
          return (
            <div key={index} className={style.img}>
              <Link to={`/catalog/${product._id}`}>
                <div className={style.imgBlock}>
                  <img src={SERVER_URL + product.img} alt="" />
                </div>

                <div className={style.mec}>
                  <div className={style.aj}>
                    <p className={style.h}>{product.name}</p>
                    <p className={style.itm}>{product.category}</p>
                  </div>
                  <div className={style.dzax}>
                    <p className={style.prise}>
                      {product.prise}
                      <BiRuble />
                    </p>
                    <p className={style.ml}>
                      {product.ml[product.ml.length - 1]}ml
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={style.s}>
        <div className={style.number}>
          <p>1</p>
          <p className={style.line}></p>
          <p>8</p>
        </div>
        <div className={style.arrow}>
          <BsArrowLeft />
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Item;
