// import React from 'react'
import { NavbarComp as Navbar } from '../components/Navbar';
import {CardComp as Card} from '../components/Card';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap"


function Home() {
const {products,addCart}=useContext(ProductContext)




  return (
   <>
      <Navbar/>
      <main>
  <Container>
<Row md={2} xs={1} lg={3} className="g-4">
        {products.map(item => (
          <Col key={item.id}>
            <Card item={item} id={item.id} image={item.image} price={item.price} title={item.title} addCart={addCart}/>
          </Col>
        ))}
      </Row>
  </Container>
      </main>
   </>
  )
}

export default Home