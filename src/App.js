import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Allinone from "./Components/Allinone";

export const healthCareContext = React.createContext();

const url = "https://mocki.io/v1/fb326174-4c83-406c-b644-12925f8d5c19";

function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState([cart.length]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(url);
    setData(res.data);
  };

  return (
    <>
      <BrowserRouter>
        <healthCareContext.Provider
          value={{ data, cart, setCart, cartValue, setCartValue }}
        >
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/covidessentials" element={<Allinone />} />
            <Route path="/healthcaredevices" element={<Allinone />} />
            <Route path="/healthfoodanddrinks" element={<Allinone />} />
            <Route path="/personalcare" element={<Allinone />} />
            <Route path="/ayrvediccare" element={<Allinone />} />
            <Route path="/mother&babycare" element={<Allinone />} />
            <Route path="/skincare" element={<Allinone />} />
            <Route path="/homecare" element={<Allinone />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </healthCareContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
