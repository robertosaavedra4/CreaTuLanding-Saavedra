import React from 'react'
import ItemCard from './ItemCard.jsx'

export default function ItemList({ items }) {
  if (!items?.length) return <p>No hay productos para mostrar.</p>
  return (
    <div className="row g-3">
      {items.map((it) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={it.id}>
          <ItemCard item={it} />
        </div>
      ))}
    </div>
  )
}
