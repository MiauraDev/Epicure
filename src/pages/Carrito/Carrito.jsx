import { useEffect, useState } from 'react'

function Carrito() {
  const [listaItems, setListaItems] = useState([])

  useEffect(() => {
    leerServicio()
  }, [])

  const leerServicio = () => {
    const datosCarrito = JSON.parse(sessionStorage.getItem('carritocompras'))
    console.log(datosCarrito)
    setListaItems(datosCarrito)
  }

  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {listaItems.map((item) => (
            <tr key={item.idproducto}>
              <td>{item.idproducto}</td>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio * item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  return (
    <section className="padded">
      <div className="container">
        <h2>Carrito de compras</h2>
        {dibujarTabla()}
      </div>
    </section>
  )
}

export { Carrito }
