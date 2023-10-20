import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import Routers from "../../Routes/Routers"

const Layout = () => {
  return (

    <>
       <Navbar/>
          <Routers/>
       <Footer/> 
    </>
    
  )
}

export default Layout