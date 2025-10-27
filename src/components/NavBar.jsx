import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

export default function NavBar() {
  const active = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          SuperMarket <span className="text-primary">Saavedra</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={active} to="/">Inicio</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/category/frutas">Frutas</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/verduras">Verduras</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/lacteos">Lácteos</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={active} to="/cart">Carrito</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={active} to="/checkout">Checkout</NavLink>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  )
}
