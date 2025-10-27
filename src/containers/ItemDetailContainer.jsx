import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../services/firebase.js'
import ItemDetail from '../components/ItemDetail.jsx'

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    fetchProductById(id)
      .then(res => { if (active) setItem(res) })
      .catch(err => { if (active) setError(err?.message || 'Error al cargar el producto') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (error) return <p className="text-danger">{error}</p>
  if (!item) return <p>No se encontró el producto.</p>

  return (
    <section className="py-4">
      <ItemDetail item={item} />
    </section>
  )
}
