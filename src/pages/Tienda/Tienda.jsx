import { useEffect, useState } from 'react'
import { ApiWebURL } from '../../utils'
import { Productos } from '../../components/Productos/Productos'

function Tienda() {
  const [listaCategorias, setListaCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    leerServicio()
  }, [])

  const leerServicio = () => {
    const rutaServicio = `${ApiWebURL}categorias.php`
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaCategorias(data)
        if (data.length > 0) {
          seleccionarCategoria(data[0])
        }
        setLoading(false)
      })
      .catch((error) => {
        setError('Error al cargar las categorías')
        setLoading(false) / console.error('Error fetching categories:', error)
      })
  }

  const dibujarLista = () => {
    return (
      <ul className="list-group">
        {listaCategorias.map((item) => (
          <li
            className={
              item.idcategoria ===
              (categoriaSeleccionada && categoriaSeleccionada.idcategoria)
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item.idcategoria}
            title={item.descripcion}
            onClick={() => seleccionarCategoria(item)}
          >
            {item.nombre}{' '}
            <span className="badge text-bg-secondary">{item.total}</span>
          </li>
        ))}
      </ul>
    )
  }

  const seleccionarCategoria = (item) => {
    setCategoriaSeleccionada(item)
  }

  if (loading) {
    return (
      <section id="tienda" className="padded">
        <div className="container">
          <h3>Cargando...</h3>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="tienda" className="padded">
        <div className="container">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="tienda" className="padded">
      <div className="container">
        <h2>Tienda</h2>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <h3>Categorías</h3>
            {dibujarLista()}
          </div>
          <div className="col-lg-9 col-md-8">
            {categoriaSeleccionada ? (
              <>
                <h3>{categoriaSeleccionada.nombre}</h3>
                <p>
                  {categoriaSeleccionada.descripcion} (
                  {categoriaSeleccionada.total})
                </p>
                <Productos
                  codigoCategoria={categoriaSeleccionada.idcategoria}
                />
              </>
            ) : (
              <p>Seleccione una categoría</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Tienda }
