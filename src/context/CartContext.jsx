import React, { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product, quantity) => {
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === product.id)
      if (idx >= 0) {
        const copy = [...prev]
        const nextQty = Math.min(copy[idx].quantity + quantity, product.stock ?? 99)
        copy[idx] = { ...copy[idx], quantity: nextQty }
        return copy
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id))
  const clearCart = () => setItems([])

  const totalQuantity = useMemo(() => items.reduce((acc, p) => acc + p.quantity, 0), [items])
  const totalPrice = useMemo(() => items.reduce((acc, p) => acc + p.quantity * p.price, 0), [items])

  const value = { items, addItem, removeItem, clearCart, totalQuantity, totalPrice }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
