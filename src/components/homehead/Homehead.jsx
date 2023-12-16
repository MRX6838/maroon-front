import styles from "./homehead.module.css";
import { BsPerson } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Homehead = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.maroon}>
        <Link to={"/"}>
          <h1>MAROON</h1>
        </Link>
      </div>
      <div className={styles.us}>
        <Link to={"/catalog"}>Каталог</Link>
        <p>О нас</p>
        <p>Контакты</p>
        <p>
          <BsPerson />
        </p>
        <p>
          <BsBag />
        </p>
      </div>
    </div>
  );
};

export default Homehead;
