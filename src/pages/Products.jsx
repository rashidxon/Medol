import React from 'react'
import productsDetaling from "../assets/data/productsDetaling"
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import "../Style/Products.css"

const Products = () => {
  return (
    <div className='products'>
      <Container>
          <div className='nav_product'>
            <Row>
              <Col lg='9' md='6'><h1>ПРОДУКЦИЯ</h1></Col>
              <Col lg='3'>
                <Link to={'/'}>Главная </Link>
                <Link>/ Продукция</Link>
              </Col>
            </Row>
          </div>
          <div className='filter'>
            <Row>
              <Col lg='3' md='12' sm='12'><h3>Фильтр:</h3></Col>
              <Col lg='3' md='4'>
                <select name="" id="">
                  <option value="">Бренд</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </Col>
              <Col lg='3' md='4'>
                <select name="" id="">
                  <option value="">Категория</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </Col>
              <Col lg='3' md='4'>
                <select name="" id="">
                  <option value="">Направление</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </Col>
            </Row>
          </div>
          <div className='product_main'>
            <Row>
              {productsDetaling.map((item, index) => (
                <Col lg='4' md='6' key={index}>
                  <div className='product_item'>
                    <img src={item.imgUrl} alt="" />
                    <Link to={`/products/${item.id}`}>{item.productName}</Link>
                    <p>Страна: <span>{item.country}</span></p>
                    <p>Производитель: <span>{item.make}</span></p>
                    <button className='product_btns'>Подробнее</button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
      </Container>
    </div>
  )
}

export default Products