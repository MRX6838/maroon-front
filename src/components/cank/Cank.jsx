import { Swiper, SwiperSlide } from "swiper/react";
import style from "../cank/cank.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";

const Cank = () => {
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/products/best`).then((data) => {
      setSeller(data.data);
    });
  }, []);
  return (
    <div className={style.big}>
      <div className={style.big2}>
        <div className={style.info}>
          <h1 className={style.top}>Бестселлеры</h1>
          <p className={style.p}>
            Легендарные продукты, завоевавшие любовь наших клиентов
          </p>
          <button className={style.btt}>Смотреть все</button>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={style.seller}
        >
          {seller.map((sell) => {
            return (
              <SwiperSlide key={sell._id} className={style.product}>
                <div className={style.text}>
                  <p className={style.inf}>{sell.name}</p>
                  <p className={style.inf1}>{sell.category}</p>
                  <p className={style.inf2}>Подробнее</p>
                  <hr />
                </div>
                <img src={SERVER_URL + sell.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Cank;
