import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    getCountry("/api");
  }, [])

  const getCountry= async(url)=>{
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data)
      console.log(res.data.data)
      
    })
  }
  const values={
    countryList,
    setSelectedCountry,
    selectedCountry
  }
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export {MyContext}
