import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AgeAuth from "../components/AgeAuth";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<AgeAuth setIsAuth={props.setIsAuth} />} />
      <Route exact path="/home" element={<Home isAuth={props.isAuth} />} />
      <Route path="/about" element={<About isAuth={props.isAuth} />} />
      <Route path="/contact" element={<Contact isAuth={props.isAuth} />} />
  </Routes>
  );
};

export default AppRoutes;
