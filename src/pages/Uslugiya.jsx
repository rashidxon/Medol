import React from 'react'
import { Container, Row, Col } from 'reactstrap'

// Uslugiyani css kodlari Styles.css ga yozilgan
import "../Style/Styles.css"

import QA from "../assets/images/QA engineers-rafiki 1.png"
import college from "../assets/images/college project-rafiki 1.png"
import Police from "../assets/images/Police car-rafiki 1.png"
import pana from "../assets/images/Maintenance-pana 1.png"
import group from "../assets/images/Group 2692.png"
import process from "../assets/images/Process-rafiki 1.png"
import { Link } from 'react-router-dom'

const Uslugiya = () => {
  return (
    <div className='containers'>
      <Container>
        <div className='usl_nav'>
          <Row>
            <Col lg='6'><h1>Наши услуги</h1></Col>
            <Col lg='6'>
              <Link to={'/'}>Главная </Link>
              <Link to={'/'}>/ Наши услуги</Link>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg='4'>
            <div className='usl_item'>
              <img src={QA} alt="" />
              <p>Гарантийное и пост-гарантийное сервисное обслуживание медицинского оборудования</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='usl_item'>
              <img src={group} alt="" />
              <p>Государственная регистрация медицинских изделий на Республики Узбекистан</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='usl_item'>
              <img src={Police} alt="" />
              <p>Таможенное оформление под ключ</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='usl_item'>
              <img src={process} alt="" />
              <p>Инсталляция и пуско-наладочные работы медицинского оборудования</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='usl_item'>
              <img src={college} alt="" />
              <p>Обучение медицинского персонала работе с медицинским оборудованием</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='usl_item'>
              <img src={pana} alt="" />
              <p>Ремонт медицинского оборудования Консультация по медицинскому оборудованию</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Uslugiya