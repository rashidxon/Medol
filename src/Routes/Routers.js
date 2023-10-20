import { Route, Routes, Navigate } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import AboutDetalis from "../pages/AboutDetalis";
import Contact from "../pages/Contact";
import ContactDetalis from "../pages/ContactDetalis";
import Uslugiya from "../pages/Uslugiya";
import ProductDetalis from "../pages/PoductDetalis"


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'home'}/>}/>
      <Route path="home" element={<Home/>} />
      <Route path="products" element={<Products/>} />
      <Route path="products/:id" element={<ProductDetalis/>} />
      <Route path="about" element={<About/>} />
      <Route path="aboutDetalis" element={<AboutDetalis/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="contactDetalis" element={<ContactDetalis/>} />
      <Route path="uslugiya" element={<Uslugiya/>} />
    </Routes>
  )
}

export default Routers