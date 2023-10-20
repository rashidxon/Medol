import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

// Aboutni css kodlari Styles.css ga yozilgan
import "../Style/Styles.css"
import news_img from "../assets/images/20180420_101750 1.png"


const About = () => {
  return (
    <div className='containers'>
      <Container>
        <div className='usl_nav'>
          <Row>
            <Col lg='6'><h1>Новости и Акции</h1></Col>
            <Col lg='6'>
              <Link to={"/"}>Главная </Link>
              <Link to={"/aboutDetalis"}>/ Новости и акции</Link>
            </Col>
          </Row>
        </div>
        <div className=''>
          <Row>
            <Col lg='2'><button className='about_btn'>Новости</button></Col>
            <Col lg='2'><button className='about_btn2'>Акции</button></Col>
          </Row>
        </div>
        <div className='newspapers mt-5'>
          <Row>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
            <Col lg='4'>
              <div className='news_slide1'>
                <img src={news_img} alt="" />
                <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                <h6>26.07.2021</h6>
                <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                <button className='home_button'>Подробнее</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default About