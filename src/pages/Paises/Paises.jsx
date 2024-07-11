import React, { useEffect, useState } from 'react'
import { ApiWebURL } from '../../utils'
import './Paises.css'

function Paises() {
  const [listaPaises, setListaPaises] = useState([])
  const [codPais, setCodPais] = useState('')
  const [pais, setPais] = useState('')
  const [capital, setCapital] = useState('')
  const [area, setArea] = useState('')
  const [poblacion, setPoblacion] = useState('')
  const [continente, setContinente] = useState('')

  useEffect(() => {
    leerServicio()
  }, [])

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + 'paises.php'
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => b.idpais - a.idpais)
        setListaPaises(sortedData)
      })
      .catch((error) => {
        console.error('Error al obtener la lista de países:', error)
      })
  }

  const dibujarTabla = () => {
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Código</th>
              <th>País</th>
              <th>Capital</th>
              <th>Área</th>
              <th>Población</th>
              <th>Continente</th>
            </tr>
          </thead>
          <tbody>
            {listaPaises.map((item) => (
              <tr key={item.idpais}>
                <td>{item.idpais}</td>
                <td>{item.codpais}</td>
                <td>{item.pais}</td>
                <td>{item.capital}</td>
                <td>{item.area}</td>
                <td>{item.poblacion}</td>
                <td>{item.continente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const insertPais = (event) => {
    event.preventDefault()

    if (isNaN(area) || isNaN(poblacion)) {
      alert('Área y Población deben ser números.')
      return
    }

    const rutaServicio = ApiWebURL + 'paisesinsert.php'

    let formData = new FormData()
    formData.append('codpais', codPais)
    formData.append('pais', pais)
    formData.append('capital', capital)
    formData.append('area', area)
    formData.append('poblacion', poblacion)
    formData.append('continente', continente)

    fetch(rutaServicio, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Respuesta del servidor:', data)
        leerServicio()
        limpiarCampos()
        document.querySelector('#insertModal .btn-close').click()
      })
      .catch((error) => {
        console.error('Error al insertar país:', error)
      })
  }

  const limpiarCampos = () => {
    setCodPais('')
    setPais('')
    setCapital('')
    setArea('')
    setPoblacion('')
    setContinente('')
  }

  const handleInputChange = (event, setterFunction) => {
    const value = event.target.value

    if (!isNaN(value) || value === '') {
      setterFunction(value)
    }
  }

  const dibujarInsertModal = () => {
    return (
      <div
        className="modal fade"
        id="insertModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-paises">
            <div className="modal-header paises">
              <h3 className="modal-title fs-5" id="exampleModalLabel">
                Agregar País
              </h3>
            </div>
            <form onSubmit={insertPais}>
              <div className="modal-body">
                <div className="mb-3">
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Código País"
                    required
                    minLength={2}
                    maxLength={15}
                    value={codPais}
                    onChange={(event) => setCodPais(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="País"
                    required
                    minLength={1}
                    maxLength={50}
                    value={pais}
                    onChange={(event) => setPais(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Capital"
                    required
                    minLength={1}
                    maxLength={50}
                    value={capital}
                    onChange={(event) => setCapital(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número de Área"
                    required
                    minLength={1}
                    maxLength={50}
                    value={area}
                    onChange={(event) => handleInputChange(event, setArea)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número de Población"
                    required
                    minLength={1}
                    maxLength={50}
                    value={poblacion}
                    onChange={(event) => handleInputChange(event, setPoblacion)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Codigo Continente"
                    required
                    minLength={1}
                    maxLength={50}
                    value={continente}
                    onChange={(event) => setContinente(event.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer guardar">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="paises" className="padded">
      <div className="container">
        <h2>Países</h2>
        <p>
          Agrega el país en el que deseas que lleguemos. Pronto nos extenderemos
          por todo el mundo.
        </p>

        <div className="mb-3">
          <button
            className="btn btn-primary newPais"
            data-bs-toggle="modal"
            data-bs-target="#insertModal"
            onMouseDown={(e) => e.preventDefault()}
          >
            Agregar País
          </button>
        </div>
        {dibujarTabla()}
        {dibujarInsertModal()}
      </div>
    </section>
  )
}

export { Paises }
