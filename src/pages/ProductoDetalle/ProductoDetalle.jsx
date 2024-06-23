import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiWebURL } from '../../utils/index'
import nofoto from '../../assets/images/nofoto.jpg'

function ProductoDetalle() {
  const params = useParams()
  console.log(params)

  const [productoSeleccionado, setProductoSeleccionado] = useState(null) // Inicializa como null
  const [error, setError] = useState(null)

  useEffect(() => {
    if (params.idproducto) {
      leerServicio(params.idproducto)
    }
  }, [params.idproducto])

  const leerServicio = (idproducto) => {
    const rutaServicio = `${ApiWebURL}productos.php?idproducto=${idproducto}`
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.length > 0) {
          setProductoSeleccionado(data[0])
        } else {
          setError('Producto no encontrado')
        }
      })
      .catch((error) => {
        setError('Error al cargar los datos')
        console.error('Error fetching product:', error)
      })
  }

  if (error) {
    return (
      <section className="padded">
        <div className="container">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </section>
    )
  }

  if (!productoSeleccionado) {
    return (
      <section className="padded">
        <div className="container">
          <h2>Cargando...</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="padded">
      <div className="container">
        <h2>{productoSeleccionado.nombre}</h2>
        <div className="row">
          <div className="col">
            <img
              src={
                productoSeleccionado.imagengrande == null
                  ? nofoto
                  : `${ApiWebURL}${productoSeleccionado.imagengrande}`
              }
              className="img-fluid"
              alt={productoSeleccionado.nombre}
            />
          </div>
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <th>Detalle</th>
                  <td>{productoSeleccionado.detalle}</td>
                </tr>
                <tr>
                  <th>Proveedor</th>
                  <td>{productoSeleccionado.proveedor}</td>
                </tr>
                <tr>
                  <th>Stock</th>
                  <td>{productoSeleccionado.unidadesenexistencia}</td>
                </tr>
                <tr>
                  <th>Precio</th>
                  <td>
                    S/{' '}
                    {productoSeleccionado.preciorebajado === '0'
                      ? parseFloat(productoSeleccionado.precio).toFixed(2)
                      : parseFloat(productoSeleccionado.preciorebajado).toFixed(
                          2
                        )}
                    <span className="precio-anterior">
                      {productoSeleccionado.preciorebajado === '0'
                        ? ''
                        : `S/ ${parseFloat(productoSeleccionado.precio).toFixed(
                            2
                          )}`}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>País</th>
                  <td>{productoSeleccionado.pais}</td>
                </tr>
              </tbody>
            </table>
            <h3>Descripción</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: productoSeleccionado.descripcion,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ProductoDetalle }
