import React, { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import CheckoutForm from '../components/CheckoutForm.jsx'
import { createOrder } from '../services/firebase.js'
import { Link } from 'react-router-dom'

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart()
  const [orderId, setOrderId] = useState(null)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)

  if (orderId) {
    return (
      <section className="py-4">
        <h1 className="h4 mb-3">¡Gracias por tu compra!</h1>
        <p>Tu número de orden es:</p>
        <div className="alert alert-success"><strong>{orderId}</strong></div>
        <Link className="btn btn-primary" to="/">Volver al inicio</Link>
      </section>
    )
  }

  if (!items.length) {
    return (
      <section className="py-4">
        <h1 className="h4 mb-3">Checkout</h1>
        <p>Tu carrito está vacío.</p>
        <Link className="btn btn-primary" to="/">Ir al catálogo</Link>
      </section>
    )
  }

  const handleConfirm = async (buyer) => {
    try {
      setProcessing(true)
      setError(null)
      const order = {
        buyer,
        items: items.map(({id, title, price, quantity}) => ({ id, title, price, quantity })),
        total: totalPrice,
      }
      const id = await createOrder(order)
      setOrderId(id)     
      clearCart()        
    } catch (e) {
      setError(e?.message || 'No se pudo generar la orden')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <section className="py-4">
      <h1 className="h4 mb-3">Checkout</h1>
      <div className="row g-4">
        <div className="col-md-6">
          <CheckoutForm onConfirm={handleConfirm} />
          {processing && <p className="text-muted mt-2">Procesando orden…</p>}
          {error && <p className="text-danger mt-2">{error}</p>}
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="mb-3">Resumen</h5>
            <ul className="list-group mb-3">
              {items.map(it => (
                <li className="list-group-item d-flex justify-content-between" key={it.id}>
                  <span>{it.title} x{it.quantity}</span>
                  <span>${(it.price * it.quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <strong>${totalPrice.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
