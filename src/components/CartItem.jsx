import React from 'react'

export default function CartItem({ item, onRemove }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <img src={item.image} alt={item.title} width="56" height="56" className="rounded object-fit-cover" />
        <div>
          <div className="fw-semibold">{item.title}</div>
          <small className="text-muted">x{item.quantity} · ${item.price?.toLocaleString?.() ?? item.price}</small>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="fw-bold">${(item.quantity * item.price).toLocaleString()}</div>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onRemove(item.id)}>Quitar</button>
      </div>
    </li>
  )
}
