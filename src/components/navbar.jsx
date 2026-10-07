import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='flex justify-between h-20 shadow-md p-5 bg-blue-900 text-white'>
        <div className=''>Ummis Products</div>
        <div className=' flex gap-4 '> 
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="#">Add Products</Link>
        </div>
    </div>
  )
}

export default navbar