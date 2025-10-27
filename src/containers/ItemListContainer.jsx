import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList.jsx'
import { fetchProducts } from '../services/firebase.js'

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    fetchProducts(categoryId)
      .then(res => { if (active) setItems(res) })
      .catch(err => { if (active) setError(err?.message || 'Error al cargar productos') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [categoryId])

  return (
    <section className="py-4">
      <h1 className="h4 mb-3">{greeting}</h1>
      {categoryId && <p className="text-muted mb-3">Filtrando por categoría: <strong className="text-capitalize">{categoryId}</strong></p>}
      {loading && <p>Cargando productos...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && <ItemList items={items} />}
    </section>
  )
}
