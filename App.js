import React from "react";
import "./App.css";
import "./components/Responsive.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
