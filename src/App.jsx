import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products/Products.jsx'
import Home from './Components/Home/Home.jsx'
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx'
import Resturant from './Components/Resturant/Resturant.jsx'
import Pizza from './Components/Resturant/Pizza/Pizza.jsx'


export default function App() {
  return (
   
    <>
     <Navbar />
     <Routes>
        <Route path='/products' element = {<Products />} />
        <Route path='/' element = {<Home />} />
        <Route path='/resturant' element = {<Resturant />} />
        <Route path='*' element = {<PageNotFound />} />
     </Routes>
    </>
    
  )
}
