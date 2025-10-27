import React, { useState } from 'react'

export default function CheckoutForm({ onConfirm }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [sending, setSending] = useState(false)

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await onConfirm?.(form)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <h5 className="mb-3">Datos del comprador</h5>
      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input name="name" className="form-control" placeholder="Ej: Roberto Saavedra" value={form.name} onChange={onChange} required />
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" placeholder="roberto@gmail.com" value={form.email} onChange={onChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input name="phone" className="form-control" placeholder="Ej: 11-2345-6789" value={form.phone} onChange={onChange} required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? 'Generando orden...' : 'Confirmar compra'}
      </button>
    </form>
  )
}
