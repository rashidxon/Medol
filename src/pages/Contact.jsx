import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

// Contactni css kodlari Styles.css ga yozilgan
import "../Style/Styles.css"


const Contact = () => {
  return (
    <div className='containers'>
       <Container>
        <div className='usl_nav'>
          <Row>
            <Col lg='6'><h1>Контакты и обратная связь</h1></Col>
            <Col lg='6'>
              <Link to={'/'}>Главная </Link>
              <Link to={'/contactDetalis'}>/ О компании</Link>
            </Col>
          </Row>
        </div>
        <div className='contact'>
          <Row>
            <Col lg='6'>
              <h3>Главный офис в Ташкенте</h3>
              <Row>
                <Col lg='5' className='mb-4'>
                  <div className='food_item'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <p>г.Ташкент,Чиланзар<br/> 10 квартал,дом 3/1</p>
                  </div>
                  <div className='food_item'>
                    <span><i class="ri-mail-fill"></i></span>
                    <p>info@medol.uz</p>
                  </div>
                </Col>
                <Col lg='4'>
                  <div className='food_item'>
                    <span><i class="ri-phone-fill"></i></span>                   
                    <span>+998 71 276-62-53<br/> +998 71 276-62-54</span>
                  </div>
                  <button className='btns'>Оставить заявку</button>
                </Col>
              </Row>
            </Col>
            <Col lg='6'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12159.099403194276!2d71.7740987!3d40.369516399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1697600764389!5m2!1sru!2s" width="700" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
          <div className='branch'>
            <h4>Наши филиалы в других регионах</h4>
            <Row>
              <Col lg='6' md='6'>
                <div className='contact_item2'>
                  <h4>Ферганская область:</h4>
                  <Row>
                    <Col lg='6' className='mb-4'>
                      <div className='food_item'>
                        <span><i class="ri-map-pin-line"></i></span>
                        <p>г.Фергшана, Алишер. Н<br/>10 квартал, дом 3/1</p>
                      </div>
                      <div className='food_item'>
                        <span><i class="ri-mail-fill"></i></span>
                        <p>info@medol.uz</p>
                      </div>
                    </Col>
                    <Col lg='6'>
                      <div className='food_item'>
                        <span><i class="ri-phone-fill"></i></span>                   
                        <span>+998 71 276-60-00<br/> +998 71 276-62-54</span>
                      </div>
                      <button className='btns'>Оставить заявку</button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className='contact_item2'>
                  <h4>Самаркандская область:</h4>
                  <Row>
                    <Col lg='6' className='mb-4'>
                      <div className='food_item'>
                        <span><i class="ri-map-pin-line"></i></span>
                        <p>г.Самарканд, Навои<br/>10 квартал, дом 3/1</p>
                      </div>
                      <div className='food_item'>
                        <span><i class="ri-mail-fill"></i></span>
                        <p>info@medol.uz</p>
                      </div>
                    </Col>
                    <Col lg='6'>
                      <div className='food_item'>
                        <span><i class="ri-phone-fill"></i></span>                   
                        <span>+998 71 276-60-00<br/> +998 71 276-62-54</span>
                      </div>
                      <button className='btns'>Оставить заявку</button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <h3>Свяжитесь с нами</h3>
            <Row>
              <Col lg='4' >
                <div className='card_contacts'>
                  <i class="ri-user-fill"></i>
                  <input type="text" placeholder='Ваше имя' />                      
                </div>
              </Col>
              <Col lg='4' >
                <div className='card_contacts'>
                  <i class="ri-file-list-2-fill"></i>
                  <input type="text" placeholder='Тема обращения' />                      
                </div>
              </Col>
              <Col lg='4' >
                <div className='card_contacts'>
                  <i class="ri-ball-pen-fill"></i>
                  <input type="text" placeholder='Email или телефон' />                      
                </div>
              </Col>
              <Col >
                <div className='card_area'>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Сообщение'></textarea>
                </div>
              </Col>
            </Row>
            <div className='acses'> 
              <Row>
                <Col lg='12'>
                  <input type="checkbox" className='check' />
                  <span> Я даю согласие OOO Medol и его аффилированным лицам на обработку моих персональных данных в целях рассмотрения моего обращения, определенных в Положении об обработке персональных данных.</span>
                </Col>
                <Col>
                  <button className='acses_btn'>Оставить заявку</button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact