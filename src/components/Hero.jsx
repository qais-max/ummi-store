import React from 'react'

function Hero({title,subtitle}) {
  return (
    <div className='h-30  text-blue-200 pt-5 bg-blue-900 shadow-md text-center'>
      <h1 className='text-5xl'>{title}</h1>
      <h3 className='text-3xl'>{subtitle}</h3>
    </div>
  )
}

export default Hero