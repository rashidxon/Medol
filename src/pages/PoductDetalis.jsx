import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import productDetalis from '../assets/data/productsDetaling'
import "../Style/PoductDetalis.css"


const PoductDetalis = () => {

    const {id} = useParams();
    const product = productDetalis.find((item) => item.id === id)
    const {imgUrl,productName,shortDesc,country,make, category} = product

  return (
    <div className="PoductDetalis">
        <Container>
            <div className='PoductDetalis_nav'>
                <Row>
                    <Col lg='9'><h2>{productName}</h2></Col>
                    <Col lg='3'>
                        <Link to={'/'}>Главная </Link>
                        <Link to={'/products'}>/ Продукция</Link>
                    </Col>
                </Row>
            </div>
            <div className="product_card">
                <Row>
                    <Col lg='6'>
                        <div className='product_card_img'>
                            <img src={imgUrl} alt="" />
                        </div>
                    </Col>
                    <Col lg='6'>
                        <p>Страна: <span>{country}</span></p>
                        <p>Категория: <span>{category}</span></p>
                        <p>Производитель: <span>{make}</span></p>
                        <p>{shortDesc}</p>
                        <Row>
                            <Col lg="5"><button className='btns'>Запросить цену</button></Col>
                            <Col lg="5"><button className='product_btn'>Оставить заявку</button></Col>
                        </Row>
                        <Col>
                            <div className='card_contact'>
                                <input type="text" placeholder='Поделится' />
                                <Link><i class="ri-facebook-circle-fill"></i></Link>
                                <Link><i class="ri-instagram-fill"></i></Link>
                                <Link><i class="ri-telegram-fill"></i></Link>
                            </div>
                        </Col>
                    </Col>
                    
                </Row>

            </div>
            <div>
                <div className='buttons'>
                    <Row>
                        <Col lg='3'><button className='detalis_btn1'>Описание</button></Col>
                        <Col><button className='detalis_btn2'>Приложенные документы</button></Col>
                    </Row>
                </div>
                <div>
                    <h6>Производитель: {make}</h6>
                    <h6>{productName}</h6>
                    <p></p>
                    <h6>Умный способ тестирования</h6>
                    <ul>
                        <li>4 независимых измерительных канала</li>
                        <li>14 охлаждаемых + 4 встроенных реагента</li>
                        <li>10 образцов + 5 положений образца STAT</li>
                        <li>Автоматическая рефлексия и способность к повторному запуску</li>
                        <li>Основная калибровочная кривая (калибровка не требуется)</li>
                    </ul>
                    <h6>Комплексная безопасность</h6>
                    <ul>
                        <li>Положительная идентификация</li>
                        <li>Внутреннее хранилище данных, встроенный компьютер</li>
                        <li>Готовые к использованию реагенты</li>
                    </ul>
                    <h6>Повышенная эффективность</h6>
                    <ul>
                        <li>3 эталонных метода измерения: коагуляционный, иммунотурбидиметрический и хромогенный</li>
                        <li>Непрерывная загрузка: 60 образцов/600 кювет</li>
                        <li>Производительность 160 тестов в час</li>
                        <li>Бесплатная поддержка</li>
                    </ul>
                    <h6>Удобные функции</h6>
                    <ul>
                        <li>Интеллектуальное управление контролем качества</li>
                        <li>Инновационный пользовательский интерфейс</li>
                        <li>Несколько подключений: Лабораторная информационная система - VPN</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default PoductDetalis