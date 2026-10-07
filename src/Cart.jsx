import React from 'react'

function Cart({ cart }) {
  return (
    <div>
      {cart.map((product) => 
         <div className='text-green-800 ' key={product.id}>
            {product.title}
         </div>
     )}
    </div>
  )
}

export default Cart