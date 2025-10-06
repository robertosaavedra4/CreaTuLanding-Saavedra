import { Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido/a a SuperMarket Saavedra!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo filtrado" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<p>404 - Página no encontrada</p>} />
        </Routes>
      </main>
    </>
  )
}
