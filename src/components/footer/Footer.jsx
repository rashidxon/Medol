import React from 'react'
import { Container, Row, Col, NavLink } from 'reactstrap'

import logo from "../../assets/images/logo 1.png"
import "./Footer.css"

const footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='2' md='4'>
            <h3>Контакты</h3>
          </Col>
          <Col lg='2' md='4' className='mb-4'>
            <div className='food_item'>
              <span><i class="ri-map-pin-line"></i></span>
              <p>г.Ташкент,Чиланзар<br/> 10 квартал,дом 3/1</p>
            </div>
            <div className='food_item'>
              <span><i class="ri-mail-fill"></i></span>
              <p>info@medol.uz    </p>
            </div>
          </Col>
          <Col lg='2'md='4'>
            <div className='food_item'>
              <span><i class="ri-phone-fill"></i></span>                   
              <span>+998 71 276-62-53<br/> +998 71 276-62-54</span>
            </div>
            <button className='btns'>Оставить заявку</button>
          </Col>
          <Col lg='2' md='4'>
            <div className='food_links'>
              <h3>О компании</h3>
              <NavLink to='/'>История</NavLink>
              <NavLink>Партнеры</NavLink>
              <NavLink>Вакансии</NavLink>
            </div>
          </Col>
          <Col lg='2' md='4'>
            <div className='food_links'>
              <h3>Продукция</h3>
              <NavLink to='/'>Эндоваскулярная хирургия</NavLink>
              <NavLink>Аритмология</NavLink>
              <NavLink>Кардиохирургия</NavLink>
            </div>
          </Col>
          <Col lg='2'  md='4'>
            <div className='food_links'>
              <h3>Услуги</h3>
              <NavLink to='/'>Сервис</NavLink>
              <NavLink>Регистрации</NavLink>
              <NavLink>Услуги логистики</NavLink>
            </div>
          </Col>
          <Col lg='2' md='4'>
            <div>
              <img src={logo} alt="" />
            </div>
          </Col>
          <Col lg='7' md='6'>
            <div className='food_item'>
              <p>Наша цель – построить прозрачный,<br/> долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg='6'>
            <p className='food_text'>© 2021 ООО «Medical Online Services»</p>
          </Col>
          <Col lg='6' className='domen'>
            <p>Сайт разработан компанией www.uz</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default footer