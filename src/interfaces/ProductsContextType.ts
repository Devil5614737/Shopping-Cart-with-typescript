
export interface Products{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    quantity:number
    
}


export interface ProductsContextType{
    products:Products[],
    addCart:(item:Products)=>void,
    cartItems:Products[],
    deleteCartItem:(id:number)=>void,
    cartIncreaseQuantity:(id:number)=>void,
    cartDecreaseQuantity:(id:number)=>void
}