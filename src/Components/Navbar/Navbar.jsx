import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning-subtle">
  <div className="container">
    <a className="navbar-brand text-warning-emphasis fw-bold" href="#">Tala Ismail</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className='pe-3 text-decoration-none  text-warning-emphasis fw-bold' to = "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className='pe-3 text-decoration-none  text-warning-emphasis fw-bold' to = "/products">Products</Link>
        </li>
        <li className="nav-item">
        <Link className='pe-3 text-decoration-none  text-warning-emphasis fw-bold' to = "/resturant">Resturant</Link>
        </li>
       

      </ul>
      
    </div>
  </div>
</nav>

  )
}
