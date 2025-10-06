import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

export default function NavBar() {
  const active = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            SuperMarket <span className="text-primary">Saavedra</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={active} to="/">
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/category/frutas">
                      Frutas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/category/verduras">
                      Verduras
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/category/lacteos">
                      Lácteos
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Widget del carrito */}
            <CartWidget count={3} />
          </div>
        </div>
      </nav>

      {/* 🔽 Offcanvas del carrito (panel lateral) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartDrawer"
        aria-labelledby="cartDrawerLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartDrawerLabel">
            Tu carrito
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p className="text-muted">Acá verás tus productos más adelante.</p>

          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Ejemplo: Manzanas x2
              <span className="badge bg-primary rounded-pill">$2.400</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Ejemplo: Leche x1
              <span className="badge bg-primary rounded-pill">$1.500</span>
            </li>
          </ul>

          <button className="btn btn-success w-100" disabled>
            Continuar (en entrega final profe)
          </button>
        </div>
      </div>
    </>
  )
}
