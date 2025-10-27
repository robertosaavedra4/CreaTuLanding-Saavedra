import React, { useState } from 'react'

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial)
  const inc = () => setCount(c => Math.min(c + 1, stock))
  const dec = () => setCount(c => Math.max(c - 1, 1))
  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <div className="btn-group" role="group">
        <button className="btn btn-outline-secondary" onClick={dec} disabled={count<=1}>-</button>
        <button className="btn btn-outline-secondary" disabled>{count}</button>
        <button className="btn btn-outline-secondary" onClick={inc} disabled={count>=stock}>+</button>
      </div>
      <button className="btn btn-success" onClick={() => onAdd?.(count)} disabled={stock===0}>
        Agregar al carrito
      </button>
    </div>
  )
}
