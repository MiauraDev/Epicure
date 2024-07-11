import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PedidoDetalle.css'

function PedidoDetalle() {
  const { idpedido } = useParams()
  const [detalles, setDetalles] = useState([])

  useEffect(() => {
    const rutaServicio = `https://servicios.campus.pe/pedidosdetalle.php?idpedido=${idpedido}`
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        const detallesActualizados = data.map((detalle) => ({
          ...detalle,
          precio: Math.round(detalle.precio * 100) / 100,
        }))
        setDetalles(detallesActualizados)
      })
  }, [idpedido])

  return (
    <section className="padded">
      <div className="container pedido-detalle">
        <h2>Productos Destacados #{idpedido}</h2>
        <p>
          Elegimos los mejores productos de calidad. A continuación, presentamos
          los productos destacados de sus pedidos:
        </p>

        <div className="detalles-grid">
          {detalles.map((detalle) => (
            <div key={detalle.idproducto} className="card">
              <img
                src={`https://servicios.campus.pe/${detalle.imagenchica}`}
                alt={detalle.nombre}
              />
              <div className="card-body">
                <span className="decorative-lineTop"></span>
                <h5 className="card-title">{detalle.nombre}</h5>
                <p className="card-text">Detalle: {detalle.detalle}</p>
                <p className="card-text">Cantidad: {detalle.cantidad}</p>
                <span className="decorative-lineBottom"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PedidoDetalle }
