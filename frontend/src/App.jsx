import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import ProductModal from "./pages/Home/ProductModal";
import Listing from "./pages/Listings/Listing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import SignUp from "./pages/register/SignUp";
import SignIn from "./pages/register/SignIn";
import Layout from "./components/Layout";

const MyContext = createContext();

function App() {
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("/api");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    setIsLogin,
    isLogin,
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {isHeaderFooterShow === true && <Header />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item:id" element={<Listing />} />
            <Route path="/product:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Layout />}>
              <Route index element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
            </Route>
          </Routes>
          {isHeaderFooterShow === true && <Footer />}

          {isOpenProductModal === true && <ProductModal />}
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
