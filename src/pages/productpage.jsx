import React from 'react'
import ProductCard from '../components/productcard'

function ProductPage({products,addToCart}) {
  return (
    <div className='grid grid-cols-3 gap-4'> 
        {products.map((product) => 
        <div  key={product.id}>
          <ProductCard product={product} addToCart={addToCart}/>
        </div>
        )}
    </div>
           
  )
}

export default ProductPage