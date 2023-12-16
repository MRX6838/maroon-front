import axios from "axios";
import style from "../adminpag/admin.module.css";
import { useEffect, useState, useContext } from "react";
import { BiRuble } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { SERVER_URL } from "../../config";
import { AdminContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [q, setQ] = useState("");
  const [full, setFull] = useState([]);
  const { token, setToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const clickhandler = (id) => {
    axios
      .delete(`${SERVER_URL}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        setFull((prev) => prev.filter((prod) => prod._id !== data.data._id));
      });
  };

  useEffect(() => {
    axios.get(`${SERVER_URL}/products?q=${q}`).then((data) => {
      setFull(data.data);
    });
  }, [q]);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const { data } = await axios.get(`${SERVER_URL}/admin`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(data);
      } catch (error) {
        setToken("");
        localStorage.setItem("token", "");
        navigate("/login");
      }
    };
    fetchAdmin();
  }, [navigate, setToken, token]);

  return (
    <div className={style.biger}>
      <div className={style.file}>
        <input
          className={style.pt}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button
          onClick={() => {
            setToken("");
            localStorage.setItem("token", "");
            navigate("/login");
          }}
        >
          Log out
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>cotegory </th>
            <th>discription</th>
            <th>sastav</th>
            <th>otagorcum</th>
            <th>ml</th>
            <th>img</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {full.map((el, index) => {
            return (
              <tr key={index} onClick={() => navigate(`/chenge/${el._id}`)}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.category}</td>
                <td>{shortText(el.discription)}</td>
                <td>{shortText(el.sastav)}</td>
                <td>{shortText(el.ogtagrcum)}</td>
                <td>{el.ml?.join(",")}</td>
                <td>
                  <img src={SERVER_URL + el.img} alt="" />
                </td>
                <td>
                  {el.prise}
                  <BiRuble />
                </td>
                <td onClick={() => clickhandler(el._id)}>
                  <RiDeleteBin7Line />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={"/add/product"} className={style.add}>
        +
      </Link>
    </div>
  );
};

function shortText(str, maxLength = 50) {
  var trimmedString = str.substr(0, maxLength);
  const ind = Math.min(trimmedString.length, trimmedString.lastIndexOf(" "));

  if (ind == -1) {
    return trimmedString;
  }

  trimmedString = trimmedString.substr(0, ind);

  return trimmedString;
}

export default Admin;
