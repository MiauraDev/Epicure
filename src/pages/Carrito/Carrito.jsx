import React, { useContext } from 'react'
import { CartContext } from '../../components/CartContext'

function Carrito() {
  const { cartItems, total, eliminarItem, vaciarCarrito } =
    useContext(CartContext)

  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th className="text-end">Precio</th>
            <th className="text-end">Cantidad</th>
            <th className="text-end">Subtotal</th>
            <th className="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item.idproducto}>
                <td>{item.idproducto}</td>
                <td>{item.nombre}</td>
                <td className="text-end">{Number(item.precio).toFixed(2)}</td>
                <td className="text-end">{item.cantidad}</td>
                <td className="text-end">
                  {(item.precio * item.cantidad).toFixed(2)}
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-link icono-eliminar"
                    title="Eliminar"
                    onClick={() => eliminarItem(item)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <div className="alert alert-warning" role="alert">
                  Su carrito de compras está actualmente vacío
                </div>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3" className="text-end">
              Total
            </th>
            <th className="text-end">
              {cartItems.reduce((acc, item) => acc + item.cantidad, 0)}
            </th>
            <th className="text-end">{total.toFixed(2)}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    )
  }

  return (
    <section className="padded">
      <div className="container">
        <h2>Carrito de compras</h2>
        {dibujarTabla()}
        <button className="btn btn-danger" onClick={() => vaciarCarrito()}>
          Vaciar carrito
        </button>
      </div>
    </section>
  )
}

export { Carrito }
