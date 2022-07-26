import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar  from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { Cart } from './Cart';
import { Badge } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import { ProductsContextType } from '../interfaces/ProductsContextType';


export const NavbarComp=()=>{

  const {cartItems}=useContext<ProductsContextType>(ProductContext)
  const [show, setShow] = useState<boolean>(false);



  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);





  return (
    <>
    <Navbar sticky="top" className="bg-white shadow-sm mb-3" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ECart</Navbar.Brand>
        <div className='d-flex align-items-center'>
       <Nav.Link className='mx-3'>Home</Nav.Link>

       <Button onClick={handleShow} variant="outline-primary" className='rounded-circle' style={{
        position:'relative'
       }}><FaShoppingCart/>
       {cartItems.length>0&&   <Badge className='position-absolute'  bg="danger">{cartItems.length}</Badge>}
 
       
       </Button>
        </div>
      </Container>
    </Navbar>
    <Cart show={show} handleClose={handleClose} />
    </>
  )
}