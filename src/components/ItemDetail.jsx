import React, { useState } from 'react'
import ItemCount from './ItemCount.jsx'
import { useCart } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

export default function ItemDetail({ item }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  if (!item) return null
  const onAdd = (qty) => {
    addItem(item, qty)
    setAdded(true)
  }

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <img src={item.image} className="img-fluid rounded shadow-sm" alt={item.title} />
      </div>
      <div className="col-md-6">
        <h2 className="mb-1">{item.title}</h2>
        <p className="text-muted text-capitalize">{item.category}</p>
        <p className="lead">${item.price?.toLocaleString?.() ?? item.price}</p>
        <p>{item.description}</p>

        {item.stock === 0 ? (
          <p className="text-danger">Producto sin stock</p>
        ) : added ? (
          <div className="d-flex gap-2">
            <Link className="btn btn-success" to="/cart">Ir al carrito</Link>
            <Link className="btn btn-outline-primary" to="/">Seguir comprando</Link>
          </div>
        ) : (
          <ItemCount stock={item.stock ?? 20} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  )
}
