import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products.js'
import ItemDetail from '../components/ItemDetail.jsx'

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id).then(setItem).finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (!item) return <p>No se encontró el producto.</p>
  return (
    <section className="py-4">
      <ItemDetail item={item} />
    </section>
  )
}
