import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Container, Row, Col} from "reactstrap"
import products from "../assets/data/products"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import "../Style/Home.css"

import slide from "../assets/images/slide.png"
import slide2 from "../assets/images/slide2.png"
import slide3 from "../assets/images/slide3.png"
import servic_1 from "../assets/images/servic_1.png"
import servic_2 from "../assets/images/servic_2.png"
import registration from "../assets/images/registration.png"
import kompani from "../assets/images/komani.png"
import news_img from "../assets/images/20180420_101750 1.png"
import braun1 from "../assets/images/braun1.png"
import braun2 from "../assets/images/braun2.png"
import braun3 from "../assets/images/braun3.png"
import braun4 from "../assets/images/braun4.png"
import braun5 from "../assets/images/braun5.png"
import braun6 from "../assets/images/braun6.png"
import braun7 from "../assets/images/braun7.png"
import braun8 from "../assets/images/braun8.png"
import Slider from 'react-slick';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        width: "40px",
        height: "40px",
        padding:"10px",
        borderRadius:"25px",
        display: "block", 
        background: "linear-gradient(180deg, #0D4C93 0%, #00C9C9 100%)",
    }}
      onClick={onClick}
    />
  );
}

const Home = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    ]
  };

  return (
    <>
      <div className="home">
      <Container>
        <Carousel>
          <div className='slide_first'>
              <Row>
                <Col lg='6'>
                  <h1>Анализатор<br/> ABL800 FLEX</h1>
                  <p>Ориентированный на среднюю или высокую <br/> производительность тестов, анализатор ABL800 FLEX<br/> измеряет полный набор параметров, включая pH, газы<br/> крови, электролиты, метаболиты и показатели оксиметрии</p>
                  <button className='home_button'>Подробнее</button>
                </Col>
                <Col lg='6'>
                  <img src={slide} alt="" />
                </Col>
              </Row>
          </div>
          <div className='slide_first'>
              <Row>
                <Col lg='6'>
                  <h1>Аппарат ИК-лазерный <br/> МАКДЭЛ-09.1</h1>
                  <p>Ориентированный на среднюю или высокую <br/> производительность тестов, анализатор ABL800 FLEX<br/> измеряет полный набор параметров, включая pH, газы<br/> крови, электролиты, метаболиты и показатели оксиметрии</p>
                  <button className='home_button'>Подробнее</button>
                </Col>
                <Col lg='6'>
                  <img src={slide2} alt="" />
                </Col>
              </Row>
          </div>
          <div className='slide_first'>
              <Row>
                <Col lg='6'>
                  <h1>Система для <br/>аутогемотрансфузии</h1>
                  <p>Ориентированный на среднюю или высокую <br/> производительность тестов, анализатор ABL800 FLEX<br/> измеряет полный набор параметров, включая pH, газы<br/> крови, электролиты, метаболиты и показатели оксиметрии</p>
                  <button className='home_button'>Подробнее</button>
                </Col>
                <Col lg='6'>
                  <img src={slide3} alt="" />
                </Col>
              </Row>
          </div>
        </Carousel>
      </Container>
    </div>
    <Container className='home_product'>
        <h1>ПРОДУКЦИЯ</h1>
        <Row >
          {products.map((item, index) => (
            <Col lg='4' md='6' key={index}>
              <div className='home_product_item'>
                <img src={item.imgUrl} alt="" />
                <h4>{item.productName}</h4>
                <button className='home_button'>Посмотреть все</button>
              </div>
            </Col>
          ))}
        </Row>
        <NavLink>Перейти в каталог нашей продукции <i className="ri-arrow-right-circle-line"></i></NavLink>
        <h1>УСЛУГИ</h1>
    </Container>
    <div className='abouts'>
      <Container>
        <Row>
          <Col lg='4' md='6' >
            <div className='abouts_item'>
              <img src={servic_1} alt="" />
              <h5>СЕРВИС ОБОРУДОВАНИЯ</h5>
              <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
              <button className='home_button'>Подробнее</button>
            </div>
          </Col>
          <Col lg='4' md='4'>
            <div className='abouts_item'>
              <img src={registration} alt="" />
              <h5>РЕГИСТРАЦИИ</h5>
              <p>Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....</p>
              <button className='home_button'>Подробнее</button>
            </div>
          </Col>
          <Col lg='4' md='4'>
            <div className='abouts_item'>
              <img src={servic_2} alt="" />
              <h5>УСЛУГИ ЛОГИСТИКИ</h5>
              <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
              <button className='home_button'>Подробнее</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container className='kompaniya'>
      <h1>О КОМПАНИИ</h1>
      <Row>
        <Col lg='6'>
          <img src={kompani} alt="" />
        </Col>
        <Col lg='6' className='kom_text'>
          <p>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
          <button className='home_button'>Узнать больше</button>
        </Col>
      </Row>
    </Container>
    <Container className='newspapers'>
      <h1>НОВОСТИ</h1>
        <Slider {...settings}>
              <div>
                <div className='news_slide1'>
                  <img src={news_img} alt="" />
                  <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                  <h6>26.07.2021</h6>
                  <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                  <button className='home_button'>Подробнее</button>
                </div>
              </div>
              <div>
                <div className='news_slide1'>
                  <img src={news_img} alt="" />
                  <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                  <h6>26.07.2021</h6>
                  <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                  <button className='home_button'>Подробнее</button>
                </div>
              </div>
              <div>
                <div className='news_slide1'>
                  <img src={news_img} alt="" />
                  <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                  <h6>26.07.2021</h6>
                  <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                  <button className='home_button'>Подробнее</button>
                </div>
              </div>
              <div>
                <div className='news_slide1'>
                  <img src={news_img} alt="" />
                  <Link to={"/aboutDetalis"}>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Link>
                  <h6>26.07.2021</h6>
                  <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                  <button className='home_button'>Подробнее</button>
                </div>
              </div>
        </Slider>
        <Row>
          <Col lg='6'>
            <NavLink>Посмотреть все новости <i class="ri-arrow-right-circle-line"></i></NavLink>
          </Col>
          <Col lg='6'>
            <NavLink>Подписаться на новости <i class="ri-arrow-right-circle-line"></i></NavLink>
          </Col>
        </Row>
    </Container>
    <Container className='hamkorlar'>
      <h1>ПАРТНЕРЫ</h1>
      <Slider {...settings}>
        <div className='hamkor_item'>
          <img src={braun1} alt="" /><br/>
          <img src={braun2} alt="" />
        </div>
        <div className='hamkor_item'>
          <img src={braun3} alt="" /><br/>
          <img src={braun4} alt="" />
        </div>
        <div className='hamkor_item'>
          <img src={braun5} alt="" /><br/>
          <img src={braun6} alt="" />
        </div>
        <div className='hamkor_item'>
          <img src={braun7} alt="" /><br/>
          <img src={braun8} alt="" />
        </div>
      </Slider>
    </Container>
    </>
    
  )
}

export default Home