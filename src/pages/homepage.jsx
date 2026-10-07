import React from 'react'
import ProductCard from "../components/productcard";
import { useState,useEffect } from 'react'
import Hero from '../components/Hero'
import Cart from '../Cart'

function HomePage({products,addToCart,cart}) {
  // const [cart, setCart] = useState([])
  // function addToCart(product) {
  //   setCart((prevCart) => [...prevCart, product])
// }
   
  return (
    <div>
        
    <h1 className='text-6xl text-center text-blue-900  mt-4 font-bold'>Products</h1>
     <p className='text-blue-900 text-4xl '> Cart items: {cart.length}</p>
     <Cart cart ={cart} />
    <Hero title= "The best products" subtitle = 'Find the best quality products'/>
    <div className="grid grid-cols-3 gap-4">
      {products.slice(0,3).map((product) => (
  <ProductCard key={product.id} product={product} addToCart={addToCart} cart={cart}/>
))}
    </div>
    </div>
  )
}

export default HomePage