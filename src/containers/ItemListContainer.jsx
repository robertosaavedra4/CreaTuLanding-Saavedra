import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList.jsx'
import { getProducts, getProductsByCategory } from '../data/products.js'

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetcher = categoryId ? getProductsByCategory(categoryId) : getProducts()
    fetcher.then(setItems).finally(() => setLoading(false))
  }, [categoryId])

  return (
    <section className="py-4">
      <h1 className="h4 mb-3">{greeting}</h1>
      {categoryId && <p className="text-muted mb-3">Filtrando por categoría: <strong className="text-capitalize">{categoryId}</strong></p>}
      {loading ? <p>Cargando...</p> : <ItemList items={items} />}
    </section>
  )
}
