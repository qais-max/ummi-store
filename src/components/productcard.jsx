import React from 'react'
import { useState } from 'react'


function ProductCard({product,addToCart}) {
  const [show,setShow] = useState(false)
  return (
    <div className="bg-gray-200 shadow-md p-10 ">
        <div><img className='w-32 h-32 object-contain' src={product.thumbnail} alt={product.title}/></div>
         
        <div>
            <p className='text-2xl text-blue-900'>{product.title}</p>
         <p>{ show ?  product.description  :  product.description.slice(0,90) + "..." }</p>
         <p className='text-blue-900'>{product.category}</p>
         <p className='text-blue-900'>${product.price}</p>
        </div>
       <button className='bg-blue-900 h-10 rounded w-15 text-white' onClick={() => 
        setShow((prevState ) => !prevState)}>{show ?  "Less" : "More" }</button>
        <button className='w-35 text-white rounded h-10 bg-green-700 ml-5' 
        onClick={() => addToCart(product)}>
          Add to Cart
          </button>
    </div>
  )
}

export default ProductCard