import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1">{item.title}</h5>
        <p className="text-muted mb-2 text-capitalize">{item.category}</p>
        <p className="fw-bold mb-3">${item.price?.toLocaleString?.() ?? item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary mt-auto">Ver detalle</Link>
      </div>
    </div>
  )
}
