import React, { useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaTrash} from 'react-icons/fa';
import { AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import { ProductContext } from '../context/ProductContext';
import { ProductsContextType } from '../interfaces/ProductsContextType';


interface CartProps{
  show:boolean,
  handleClose:()=>void
}

export const Cart=({show,handleClose}:CartProps)=>{

  const {cartItems,deleteCartItem,cartIncreaseQuantity,cartDecreaseQuantity}=useContext<ProductsContextType>(ProductContext)


const quantity=cartItems.map(item=>item.quantity)
const totalQuantity=quantity.reduce((a,b)=>a+b,0)

const subTotal=cartItems.map(item=>item.price).reduce((a,b)=>a+b,0)*totalQuantity




    return(
      <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body style={{position:'relative'}}>
        {cartItems!&&<p>cart is empty</p>}
       {cartItems.map(cartItem=> <div key={cartItem.id} className='d-flex justify-content-between align-items-center mb-4'>
          <img style={{
            width:'50px',
            height:'50px',
            objectFit:'cover'
          }} src={cartItem.image} alt='item'/>
          <div className='d-flex align-items-center'>
            <Button className='rounded-circle btn-sm fs-6' variant='outline-primary' onClick={()=>cartIncreaseQuantity(cartItem.id)}><AiOutlinePlus/></Button>
           <Button  className='mx-1' variant='outline-primary'>{cartItem.quantity}</Button>
            <Button className='rounded-circle btn-sm fs-6 grid ' variant='outline-primary' onClick={()=>cartDecreaseQuantity(cartItem.id)}><AiOutlineMinus/></Button>
          </div>
          <Button onClick={()=>deleteCartItem(cartItem.id)} className='rounded-circle' variant=' btn-outline-danger'>
          <FaTrash/>

          </Button>
        </div>)}
        
      {cartItems.length>0&&<div  style={{
        position:'fixed',
        width:366,
        bottom:5,
        background:'white',
        padding:'12px 0'
        
      }}>
          <div className='d-flex justify-content-between align-items-center'>
            <p>SubTotal({totalQuantity} items):</p>
            <p >${subTotal}</p>
          </div>
          <Button className='w-100' onClick={()=>alert('thank you for shopping')}>Checkout</Button>
      </div>}
      </Offcanvas.Body>
    </Offcanvas>
    )
}