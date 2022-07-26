import { createContext, ReactNode, useEffect, useState } from "react";
import {
  Products,
  ProductsContextType,
} from "../interfaces/ProductsContextType";



export const ProductContext = createContext({} as ProductsContextType);

interface ContextProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ContextProps) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [cartItems,setCartItems]=useState<Products[]>([])

  const fetchProducts = async () => {
    const res = await fetch(
      "https://ecommerce-products.p.rapidapi.com/products",
      {
        headers: {
          "X-RapidAPI-Key":
            "0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561",
          "X-RapidAPI-Host": "ecommerce-products.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 
  const addCart=(item:Products)=>{
if(cartItems.includes(item)){
  return alert('already added to cart')
}else{

  setCartItems([...cartItems,item])
}

  }

  const deleteCartItem=(id:number)=>{
setCartItems(cartItems.filter(item=>item.id!==id))
  }

const cartIncreaseQuantity=(id:number)=>{
setCartItems(cartItems.map(item=>item.id===id?{...item,quantity:item.quantity+(item.quantity<5?1:0)}:item))
}
const cartDecreaseQuantity=(id:number)=>{
setCartItems(cartItems.map(item=>item.id===id?{...item,quantity:item.quantity-(item.quantity>1?1:0)}:item))
}







  return (
    <ProductContext.Provider value={{ products,addCart,cartItems,deleteCartItem ,cartIncreaseQuantity,cartDecreaseQuantity}}>
      {children}
    </ProductContext.Provider>
  );
};
