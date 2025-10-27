import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { CartProvider } from './context/CartContext.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'

export default function App() {
  return (
    <CartProvider>
      <NavBar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido/a a SuperMarket Saavedra!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo filtrado" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<p>404 - Página no encontrada</p>} />
        </Routes>
      </main>
    </CartProvider>
  )
}
