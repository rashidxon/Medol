import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'


// ContactDetalisni css kodlari Styles.css ga yozilgan
import "../Style/Styles.css"

const ContactDetalis = () => {
  return (
    <div className='containers'>
       <Container>
        <div className='usl_nav'>
          <Row>
            <Col lg='6'><h1>О компании</h1></Col>
            <Col lg='6'>
              <Link to={'/'}>Главная </Link>
              <Link to={'/contact'}>/ Контакты и обратная связь</Link>
            </Col>
          </Row>
        </div>
        <div className='contactDetalis contact'>
          <Row>
            <Col lg='12'>
                <p>Наша история началась в 2011 году, когда возникали большие трудности в ведении бизнеса с иностранными партнерами. Несмотря на все преграды, компания уверенными шагами внедряла новые технологии и обучала врачей Узбекистана. Оглядываясь назад, и, смотря на сегодняшние достижения врачей, мы с гордостью говорим, что мы не зря старались и верили в их результат.

                Сегодня врачи в области кардиохирургии делают операции по установки стентов, и людям не приходиться выезжать в соседние страны для получения медицинского обслуживания. В Узбекистане растет и развивается сеть лабораторий VITROS, где функционирует наше оборудование от Johnson & Johnson, и мы рады, что население Узбекистана могут пройти диагностику на мировом оборудовании и получить точный и достоверный результат.

                Еще одним нашим достижением является внедрение и бесперебойные поставки шовного хирургического материала ETHICON, мы гордимся, что наши хирурги, как хирурги других стран, пользуются и работают самыми популярными и качественными нитями. К 2022 году мы выросли по количеству компаний, входящих в состав группы компании MEDOL. На сегодняшний день успешно функционирует 4 организации, имеющих свою миссию, цель и сферу деятельности.
                Сегодня MEDOL продолжает расти и развиваться. Мы гордимся пройденным путем и достигнутыми результатами, и, в то же время, четко видим новые цели и направления движения. Наша сила и наша обязанность – в создании эффективной команды, дистрибуции, обеспечивающей новыми технологиями в сфере медицины и возможностью лечения и получения качественной медицинской помощи в Узбекистане.</p>
            </Col>
            <Col lg='12'>
                <h3>Главный офис в Ташкенте</h3>
                <Row>
                    <Col lg='3' className='mb-4'>
                        <div className='food_item'>
                            <span><i class="ri-map-pin-line"></i></span>
                            <p>г.Ташкент,Чиланзар<br/> 10 квартал,дом 3/1</p>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className='food_item'>
                            <span><i class="ri-phone-fill"></i></span>                   
                            <span>+998 71 276-62-53<br/> +998 71 276-62-54</span>
                        </div>
                    </Col>
                    <Col lg='3'> 
                        <div className='food_item'>
                            <span><i class="ri-mail-fill"></i></span>
                            <p>info@medol.uz</p>
                        </div>
                    </Col>
                    <Col lg='3'>
                    <button className='btns'>Оставить заявку</button>
                    </Col>
                </Row>
            </Col>
            <Col lg='12'>
                <h3>Как до нас добраться</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12159.099403194276!2d71.7740987!3d40.369516399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1697600764389!5m2!1sru!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
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

export default ContactDetalis