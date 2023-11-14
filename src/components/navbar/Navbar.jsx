import React, { useRef, useState } from 'react'
import "./Navbar.css"
import { Container, Row, Col} from 'reactstrap'
import { Link, NavLink, useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

import logo from "../../assets/images/logo 1.png"

const nav_links = [
    {
        path: "",
        display: "МАГАЗИН"
    },
    {
        path: "home",
        display: "О КОМПАНИИ"
    },
    {
        path: "products",
        display: "ПРОДУКЦИЯ"
    },
    {
        path: "uslugiya",
        display: "УСЛУГИ"
    },
    {
        path: "about",
        display: "АКЦИИ И НОВОСТИ"
    },
    {
        path: "contact",
        display: "ОБРАТНАЯ СВЯЗЬ"
    },
];



const Navbar = () => {

    const [selected, setSelected] = useState("RU");
    
    const menuRef = useRef(null);
    const menuToggle = () => menuRef.current.classList.toggle("active__menu");
    
    const [lang, setLang] = useState("eng")
  return (
    <header className='nav'>
        <Container>
            <Row>
                <Col lg='2' md='2' >
                    <div className='nav_items'>
                        <span><i class="ri-map-pin-line"></i></span>
                        <p>г.Ташкент,Чиланзар<br/> 10 квартал,дом 3/1</p>
                    </div>
                </Col>
                <Col lg='2' md='2' sm='2'>
                    <div className='nav_items'>
                        <span><i class="ri-phone-fill"></i></span>                   
                        <p>+998712766253<br/> +998712766254</p>
                    </div>
                </Col>
                <Col lg='3' md='4'>
                    <div className='nav_item1'>
                        <img src={logo} alt="" />
                    </div>
                </Col>
                <Col lg='1' md='1'>
                    <span className='search'><i class="ri-search-line"></i></span>       
                </Col>
                <Col lg='2' md='1'>
                    <div className='facebook'>
                        <span className='nav_facebook'><i class="ri-facebook-fill"></i>Мы на Facebook</span>
                    </div>
                </Col>
                <Col lg='2' md='1'>
                    <ReactFlagsSelect
                        className="menu-flags"
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        countries={["US", "GB", "RU", "UZ"]}
                    />
                </Col>
                <Col md='1'>
                    <div className="mobile__menu">
                        <span onClick={menuToggle}>
                        <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </Col>
            </Row>
            <div className='navigation' ref={menuRef} onClick={menuToggle} >
                <ul className="menu">
                    {nav_links.map((item, index) => (
                    <li className="nav_item" key={index}>
                        <NavLink
                        to={item.path}
                        className={(navClass) =>
                            navClass.isActive ? "nav__active" : ""
                        }
                        >
                        {item.display}
                        </NavLink><br/>
                    </li>
                    ))}
                </ul>
                </div>
        </Container>  
    </header>
  )
}

export default Navbar