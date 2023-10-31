import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Pizza from './Pizza/Pizza.jsx'
import Salad from './Salad/Salad.jsx'
import Onion from './Onion/Onion.jsx'

export default function Resturant() {
  return (
    <>
        <div>
            <h1 className='text-center pt-4 text-warning-emphasis'>ABU JULIA RESTURANT</h1>
            <Pizza />
            <Salad />
            <Onion />
        </div>
    </>
   
  )
}
