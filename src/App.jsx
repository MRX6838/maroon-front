import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import { Routes, Route, Navigate } from "react-router-dom";
import Buy from "./pages/buy/Buy";
import Reg from "./pages/reg/Reg";
import Slider from "./components/slider/Slider";
import Login from "./pages/login/login";
// import Addme from "./components/addme/Addme";
import Admin from "./pages/adminpag/Admin";
import { createContext, useState } from "react";
import Addproduct from "./components/addproduct/Addproduct";
import Chenges from "./components/chenges/Chenges";

export const AdminContext = createContext({
  token: "",
  setToken: () => {},
});

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      <AdminContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/add/product" element={<Addproduct />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Buy />} />
          <Route path="/slider" element={<Slider />} />
          {token && <Route path="/chenge/:id" element={<Chenges />} />}
          <Route
            path="/registration"
            element={!token ? <Reg /> : <Navigate to="/admin" />}
          />
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/admin" />}
          />
          {token && <Route path="/admin" element={<Admin />} />}

          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </AdminContext.Provider>
    </div>
  );
};

export default App;
