import Homehead from "../../components/homehead/Homehead";
import Filt from "../../components/filtr/Filt";
import style from "../catalog/catalog.module.css";
import Item from "../../components/item/Item";
import Addme from "../../components/addme/Addme";
import Cank from "../../components/cank/Cank";
import Map from "../../components/map/Map";
import Avart from "../../components/avart/Avart";
const Catalog = () => {
  return (
    <div className={style.big}>
      <Homehead />
      <Filt />
      <Item />
      <Cank />
      <Addme />
      <Map />
      <Avart />
    </div>
  );
};

export default Catalog;
