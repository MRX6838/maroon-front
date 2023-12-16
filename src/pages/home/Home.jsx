import Homehead from "../../components/homehead/Homehead";
import Homemiddle from "../../components/homemiddle/Homemiddle";
import Cank from "../../components/cank/cank";
import style from "../../pages/home/home.module.css";
import Vesna from "../../components/vesna/Vesna";
import Individual from "../../components/individual/Individual";
import Discription from "../../components/discription/Discription";
import Addme from "../../components/addme/Addme";
import Map from "../../components/map/Map";
import Avart from "../../components/avart/Avart";
const Home = () => {
  return (
    <div className={style.gn}>
      <Homehead />
      <Homemiddle />
      <Cank />
      <Vesna />
      <Individual />
      <Discription />
      <Addme />
      <Map />
      <Avart />
    </div>
  );
};

export default Home;
