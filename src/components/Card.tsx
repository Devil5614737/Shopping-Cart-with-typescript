import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Products } from '../interfaces/ProductsContextType';



interface CardProps{
  id:number,
  image:string,
  title:string,
  price:number,
  item:Products,
  addCart:(item:Products)=>void
}


export const CardComp=({id,title,price,image,item,addCart}:CardProps)=>{
    return (
      <Card className="h-100 p-3">
      <Card.Img   height="200px"  style={{ objectFit: "cover" }} variant="top" src={image} />
      <Card.Body>
        <Card.Title className='text-center fs-6'>{title.substring(0,35)+'...'}</Card.Title>
        <Card.Title className='text-center fs-6'>${price}</Card.Title>

        <Button onClick={()=>addCart(item)} variant="primary m-auto btn-sm d-grid">add to cart</Button>
      </Card.Body>
    </Card>
    )
}