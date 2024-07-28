import React from "react";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./component/Card";
import Carddetails from "./component/Carddetails";

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/cart" element={<Carddetails />} />
    </Routes>
     
    </>
  );
};

export default App;
