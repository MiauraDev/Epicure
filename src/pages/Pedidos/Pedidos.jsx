import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiWebURL } from '../../utils/index'
import './Pedidos.css'

function Pedidos() {
  const [listaPedidos, setListaPedidos] = useState([])
  const [listaPedidosFiltrados, setListaPedidosFiltrados] = useState([])
  const [textoBuscar, setTextoBuscar] = useState('')
  const [filasPagina, setFilasPagina] = useState(5)
  const [totalPaginas, setTotalPaginas] = useState(0)
  const [totalFilas, setTotalFilas] = useState(0)
  const [pagina, setPagina] = useState(0)
  const [estadoAscendente, setEstadoAscendente] = useState(1)
  const [columnaAnterior, setColumnaAnterior] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = 10
    const duration = 2000
    const incrementTime = duration / end

    const counter = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) {
        clearInterval(counter)
      }
    }, incrementTime)

    return () => clearInterval(counter)
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    leerServicio()
  }, [])

  useEffect(() => {
    setTotalPaginas(Math.ceil(listaPedidosFiltrados.length / filasPagina))
  }, [listaPedidosFiltrados, filasPagina])

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + 'pedidos.php'
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaPedidos(data)
        setListaPedidosFiltrados(data)
        setTotalFilas(data.length)
        setTotalPaginas(Math.ceil(data.length / filasPagina))
      })
  }

  const seleccionarColumna = (event, columna) => {
    let iconosOrden = document.querySelectorAll('#tabla-pedidos th i')
    iconosOrden.forEach((item) => item.remove())

    let ascendente = estadoAscendente
    if (columna !== columnaAnterior) {
      ascendente = 1
    } else {
      ascendente = -ascendente
    }
    const resultado = [...listaPedidosFiltrados].sort((a, b) =>
      a[columna] > b[columna] ? ascendente : -ascendente
    )
    let icono =
      ascendente === 1
        ? '<i class="bi bi-caret-down-fill"></i>'
        : '<i class="bi bi-caret-up-fill"></i>'
    event.currentTarget.innerHTML += icono

    setListaPedidosFiltrados(resultado)
    setColumnaAnterior(columna)
    setEstadoAscendente(ascendente)
  }

  const handleRowClick = (idpedido) => {
    navigate(`/pedido-detalle/${idpedido}`)
  }

  const dibujarTabla = () => {
    return (
      <div className="tabla-container">
        <table className="table pedidosTable" id="tabla-pedidos">
          <thead>
            <tr>
              <th>N°</th>
              <th onClick={(event) => seleccionarColumna(event, 'nombres')}>
                Cliente Epicure
              </th>
              <th onClick={(event) => seleccionarColumna(event, 'total')}>
                Total de pedidos
              </th>
            </tr>
          </thead>
          <tbody>
            {listaPedidosFiltrados
              .slice(pagina * filasPagina, (pagina + 1) * filasPagina)
              .map((item) => (
                <tr
                  key={item.idpedido}
                  onClick={() => handleRowClick(item.idpedido)}
                  className="nuestros-clientes"
                >
                  <td>{item.idpedido}</td>
                  <td>{item.nombres}</td>
                  <td>{Number(item.total).toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }

  const buscarTexto = (event) => {
    let texto = event.target.value
    setTextoBuscar(texto)
    const resultado = listaPedidos.filter(
      (item) =>
        item['nombres'].toUpperCase().includes(texto.toUpperCase()) ||
        item['total'].toUpperCase().includes(texto.toUpperCase())
    )
    setListaPedidosFiltrados(resultado)
    setPagina(0)
  }

  const dibujarPaginacion = () => {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => retroceder()}>
              ◀
            </a>
          </li>
          {dibujarNumerosPaginacion()}
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => avanzar()}>
              ▶
            </a>
          </li>
        </ul>
      </nav>
    )
  }

  const dibujarNumerosPaginacion = () => {
    const rangoMaximo = 2
    const paginaActual = pagina + 1
    let inicioRango, finRango

    if (totalPaginas <= rangoMaximo) {
      inicioRango = 1
      finRango = totalPaginas
    } else {
      if (paginaActual <= Math.ceil(rangoMaximo / 2)) {
        inicioRango = 1
        finRango = rangoMaximo
      } else if (paginaActual + Math.floor(rangoMaximo / 2) >= totalPaginas) {
        inicioRango = totalPaginas - rangoMaximo + 1
        finRango = totalPaginas
      } else {
        inicioRango = paginaActual - Math.floor(rangoMaximo / 2)
        finRango = paginaActual + Math.floor(rangoMaximo / 2)
      }
    }

    const paginas = []
    for (let i = inicioRango; i <= finRango; i++) {
      paginas.push(
        <li
          className={i === paginaActual ? 'page-item active' : 'page-item'}
          key={i}
        >
          <a className="page-link" href="#" onClick={() => setPagina(i - 1)}>
            {i}
          </a>
        </li>
      )
    }

    return (
      <>
        {inicioRango > 1 && (
          <>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPagina(0)}>
                1
              </a>
            </li>
            {inicioRango > 2 && (
              <li className="page-item">
                <span className="page-link">...</span>
              </li>
            )}
          </>
        )}
        {paginas}
        {finRango < totalPaginas && (
          <>
            {finRango < totalPaginas - 1 && (
              <li className="page-item">
                <span className="page-link">...</span>
              </li>
            )}
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => setPagina(totalPaginas - 1)}
              >
                {totalPaginas}
              </a>
            </li>
          </>
        )}
      </>
    )
  }

  const retroceder = () => {
    if (pagina > 0) {
      setPagina(pagina - 1)
    }
  }

  const avanzar = () => {
    if (pagina < totalPaginas - 1) {
      setPagina(pagina + 1)
    }
  }

  return (
    <section id="pedidos" className="padded">
      <div className="container pedidos">
        <div>
          <div className="table">
            <h2>Super Pedidos</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Busca por nombre o número de pedidos"
                value={textoBuscar}
                onChange={(event) => buscarTexto(event)}
              />
            </div>
            {dibujarTabla()}
            {dibujarPaginacion()}
          </div>
        </div>
        <div className="text-content">
          <span className="personas">+{count}K</span>
          <p>
            Personas confían en nosotros todos los días <br />
            <span className="cliente">
              ¡Sé nuestro próximo cliente frecuente!
            </span>
          </p>
          <div className="white-triangle"></div>
        </div>
      </div>
    </section>
  )
}

export { Pedidos }
