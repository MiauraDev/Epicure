import { useEffect, useState } from 'react'
import { ApiWebURL } from '../../utils'
import { Productos } from '../../components/Productos/Productos'

function Tienda() {
  const [listaCategorias, setListaCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  useEffect(() => {
    leerServicio()
  }, [])

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + 'categorias.php'
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaCategorias(data)
        seleccionarCategoria(data[0])
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
            {item.nombre}
            <span className="badge text-bg-secondary">{item.total}</span>
          </li>
        ))}
      </ul>
    )
  }

  const seleccionarCategoria = (item) => {
    setCategoriaSeleccionada(item)
  }

  return (
    <section id="tienda" className="padded">
      <div className="container">
        <h2>Tienda</h2>
        <div className="row">
          <div className="col-3 col-md-4">
            <h3>Categorías</h3>
            {dibujarLista()}
          </div>
          <div className="col-9 col-md-8">
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
