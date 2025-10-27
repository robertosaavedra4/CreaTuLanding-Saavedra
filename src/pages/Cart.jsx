import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import CartItem from '../components/CartItem.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, removeItem, clearCart, totalPrice } = useCart()

  if (!items.length) {
    return (
      <section className="py-4">
        <h1 className="h4 mb-3">Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link className="btn btn-primary" to="/">Ir al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="py-4">
      <h1 className="h4 mb-3">Carrito</h1>
      <ul className="list-group mb-3">
        {items.map(it => (
          <CartItem key={it.id} item={it} onRemove={removeItem} />
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
        <div className="fs-5 fw-bold">Total: ${totalPrice.toLocaleString()}</div>
      </div>
      <Link className="btn btn-success" to="/checkout">Ir al checkout</Link>
    </section>
  )
}
