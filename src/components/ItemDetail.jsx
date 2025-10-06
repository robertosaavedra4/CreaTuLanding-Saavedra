import React from 'react'
import ItemCount from './ItemCount.jsx'

export default function ItemDetail({ item }) {
  if (!item) return null
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <img src={item.image} className="img-fluid rounded shadow-sm" alt={item.title} />
      </div>
      <div className="col-md-6">
        <h2 className="mb-1">{item.title}</h2>
        <p className="text-muted text-capitalize">{item.category}</p>
        <p className="lead">${item.price.toLocaleString()}</p>
        <p>{item.description}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={(qty) => console.log('Agregar al carrito:', item.id, qty)} />
      </div>
    </div>
  )
}
