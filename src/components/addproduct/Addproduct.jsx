import { useState, useContext, useEffect } from "react";
import axios from "axios";
import style from "../addproduct/addproduct.module.css";
import { SERVER_URL } from "../../config";
import { AdminContext } from "../../App";

const Addproduct = () => {
  const [imgSrc, setImgSrc] = useState();
  const [file, setFile] = useState();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    discription: "",
    sastav: "",
    ogtagrcum: "",
    ml: "",
    prise: "",
  });

  const { token } = useContext(AdminContext);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    let fileReader = new FileReader(); // not a arguments
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setImgSrc(fileReader.result);
      setFile(file);
    };
  };

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const { data: fileData } = await axios.post(
      `${SERVER_URL}/file/add`,
      formData
    );
    const img = fileData.path;

    const { data } = await axios.post(
      `${SERVER_URL}/products`,
      {
        ...product,
        img,
        ml: product.ml.split(","),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(data);
  };

  return (
    <div className={style.d}>
      <div className={style.ptt}>
        <div className={style.ptt1}>
          <input
            onChange={handleChange}
            name="name"
            className={style.put}
            placeholder="name"
            type="text"
          />
          <input
            onChange={handleChange}
            name="category"
            className={style.put}
            placeholder="cotegory"
            type="text"
          />
          <textarea
            onChange={handleChange}
            name="discription"
            className={style.put}
            placeholder="dicription"
          ></textarea>
          {/* <input className={style.put} placeholder="dicription" type="text" /> */}
          <input
            onChange={handleChange}
            name="sastav"
            className={style.put}
            placeholder="sastav"
            type="text"
          />
          <input
            onChange={handleChange}
            name="ogtagrcum"
            className={style.put}
            placeholder="ogtagorcum"
            type="text"
          />
          <input
            onChange={handleChange}
            name="ml"
            className={style.put}
            placeholder="ml"
            type="text"
          />
          <input
            onChange={handleChange}
            name="prise"
            className={style.put}
            placeholder="price"
            type="text"
          />
        </div>
        <label className={style.img}>
          <img src={imgSrc} alt="" />
          <input
            type="file"
            hidden
            onChange={handleFileChange}
            multiple={false}
            accept="image/*"
          />
        </label>
      </div>
      <div className={style.ok}>
        <button onClick={handleCreate}>ok</button>
      </div>
    </div>
  );
};

export default Addproduct;
