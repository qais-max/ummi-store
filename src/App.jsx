// import React, { useState ,useEffect} from 'react'

// function App() {
//   const [searchProduct,setSearchProduct] = useState("")
//   const [checkCategory, setCheckCategory] = useState("all")
//   const [checkPrice, setCheckPrice] = useState("all")

//    useEffect(() => {
//     console.log("products Loaded")
// }, [searchProduct])

//   const products = [
//   {
//     name: "Rice",
//     price: 5000,
//     category: "Food"
//   },
//   {
//     name: "Shirt",
//     price: 3000,
//     category: "Clothing"
//   },
//   {
//     name:"orange",
//     price:1000,
//     category:"fruits"
//   }
// ]
//   return (
//     <div>
//       <h1>Products</h1>
//       {products
//       .filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase() ) &&
//        (checkCategory === "all" || product.category === checkCategory)&& 
//        (checkPrice === "all" ||
//  (checkPrice === "1000+" && product.price >= 1000) ||
//  (checkPrice === "3000+" && product.price >= 3000))) 
//       .map((product ,index) => {
//         return <div key={index}>
//           <p>Name:{product.name}</p>
//          <p> Price:{product.price}</p>
//           <p>Category:{product.category}</p>

//         </div>

//       }
//       )}
//       <input type="text" 
//       value={searchProduct}
//       placeholder='search what you want'
//       onChange={(e) => setSearchProduct(e.target.value)}
//        />
//        <button onClick={() => setCheckPrice("all")}>All</button>
//        <button onClick={() => setCheckPrice("1000+")}> 1000+</button>
//        <button onClick={() => setCheckPrice("3000+")}> 3000+</button>
//     </div>
//   )
// }

// export default App

import React from 'react'  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import HomePage from './pages/homepage'
  import ProductPage from './pages/productpage'
  import LayOut from './layouts/layout'
  import { useState,useEffect } from 'react'
  




function App() {

   const [products, setProducts] = useState([])
   const [cart, setCart] = useState([])
function addToCart(product) {
  setCart((prevCart) => [...prevCart, product])
}

  useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
  console.log(data)
  setProducts(data.products)
})
  }, [])
  
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage products={products} addToCart={addToCart} cart={cart}/>} />
          <Route path="product" element={<ProductPage products={products} addToCart={addToCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App