import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ApiWebURL } from '../../utils'
import './Productos.css'

function Productos({ codigoCategoria }) {
  const [listaProductos, setListaProductos] = useState([])

  useEffect(() => {
    if (codigoCategoria) {
      leerServicio(codigoCategoria)
    }
  }, [codigoCategoria])

  const leerServicio = (idcategoria) => {
    const rutaServicio = ApiWebURL + 'productos.php?idcategoria=' + idcategoria
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaProductos(data)
      })
  }

  const dibujarCuadricula = () => {
    return (
      <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2 g-4">
        {listaProductos.map((item) => (
          <div className="col" key={item.idempleado}>
            <div className="card text-center">
              <img
                src={ApiWebURL + item.imagenchica}
                className="card-img-top"
                alt={item.nombres}
              />
              <div className="card-body">
                <p className="card-title">{item.nombre}</p>
                <p className="card-text">
                  S/{' '}
                  {item.preciorebajado === '0'
                    ? parseFloat(item.precio).toFixed(2)
                    : parseFloat(item.preciorebajado).toFixed(2)}
                  <span className="precio-anterior">
                    {item.preciorebajado === '0'
                      ? ''
                      : `S/ ${parseFloat(item.precio).toFixed(2)}`}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return <>{dibujarCuadricula()}</>
}

Productos.propTypes = {
  codigoCategoria: PropTypes.number.isRequired,
}

export default Productos
