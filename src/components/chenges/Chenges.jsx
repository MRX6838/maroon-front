import { useContext, useEffect, useState } from "react";
import style from "../chenges/chenges.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../config";
import axios from "axios";
import { AdminContext } from "../../App";
const Chenges = () => {
  const { id } = useParams();

  const { token } = useContext(AdminContext);

  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    let fileReader = new FileReader(); // not a arguments
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setImg(fileReader.result);
      setFile(file);
    };
  };
  const handlePatch = async () => {
    let imgSrc = img.slice(SERVER_URL.length);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const { data: fileData } = await axios.post(
        `${SERVER_URL}/file/add`,
        formData
      );
      imgSrc = fileData.path;
    }

    const { data } = await axios.patch(
      `${SERVER_URL}/products/${product._id}`,
      {
        ...product,
        img: imgSrc,
        ml: product.ml.toString().split(","),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(data);
    navigate("/admin");
  };

  useEffect(() => {
    axios.get(`${SERVER_URL}/products/${id}`).then((data) => {
      setImg(SERVER_URL + data.data.img);
      setProduct(data.data);
    });
  }, [id]);

  return (
    <div className={style.biger}>
      <div className={style.put}>
        <input
          className={style.pt}
          type="text"
          name="name"
          placeholder="name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          className={style.pt}
          type="text"
          name="category"
          placeholder="category"
          value={product.category}
          onChange={handleChange}
        />
        <textarea
          className={style.pt}
          name="ogtagrcum"
          placeholder="ogtagorcum"
          value={product.ogtagrcum}
          onChange={handleChange}
        ></textarea>
        <textarea
          className={style.pt}
          name="discription"
          placeholder="discription"
          value={product.discription}
          onChange={handleChange}
        ></textarea>
        <textarea
          className={style.pt}
          name="sastav"
          placeholder="sastav"
          value={product.sastav}
          onChange={handleChange}
        ></textarea>
        <input
          className={style.pt}
          name="prise"
          type="text"
          placeholder="price"
          value={product.prise}
          onChange={handleChange}
        />
        <input
          className={style.pt}
          name="ml"
          type="text"
          placeholder="ml"
          value={product.ml}
          onChange={handleChange}
        />
        <label className={style.img}>
          <img src={img} alt="" />
          <input
            onChange={handleFileChange}
            type="file"
            hidden
            multiple={false}
            accept="image/*"
          />
        </label>

        <button onClick={handlePatch} className={style.btt}>
          ok
        </button>
      </div>
    </div>
  );
};

export default Chenges;
