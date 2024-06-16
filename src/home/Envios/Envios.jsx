import { useState, useEffect } from 'react'
import { ApiWebURL } from '../../utils/index'

function Envios() {
  const [listaEnvios, setListaEnvios] = useState([])
  const rutaServicio = ApiWebURL + '/envios.php'

  useEffect(() => {
    leerServicio()
  }, [])

  const leerServicio = async () => {
    try {
      const response = await fetch(rutaServicio)
      const data = await response.json()
      setListaEnvios(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <section className="padded">
      <div className="container">
        <h2>Envios</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Colegio</th>
                <th>Latitud</th>
                <th>Longitud</th>
              </tr>
            </thead>
            <tbody>
              {listaEnvios.map((item) => (
                <tr key={item.idempresaenvio}>
                  <td>{item.idempresaenvio}</td>
                  <td>{item.nombre}</td>
                  <td>{item.telefono}</td>
                  <td>{item.latitud}</td>
                  <td>{item.longitud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export { Envios }
