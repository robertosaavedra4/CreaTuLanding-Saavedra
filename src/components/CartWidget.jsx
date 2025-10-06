import React from 'react'

export default function CartWidget({ count = 3 }) {
  return (
    <button
      type="button"
      className="btn btn-outline-light position-relative"
      data-bs-toggle="offcanvas"
      data-bs-target="#cartDrawer"
      aria-controls="cartDrawer"
    >
      <span className="me-2">🛒</span>
      <span className="visually-hidden">Carrito</span>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {count}
        <span className="visually-hidden">productos en el carrito</span>
      </span>
    </button>
  )
}
