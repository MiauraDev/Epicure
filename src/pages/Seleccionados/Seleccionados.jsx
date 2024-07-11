import React, { useContext } from 'react'
import { CartContext } from '../../components/CartContext'
import './Seleccionados.css'

function Seleccionados() {
  const { cartItems, eliminarItem, vaciarCarrito } = useContext(CartContext)
  const ApiWebURL = 'https://servicios.campus.pe/fotos/'

  const dibujarTabla = () => {
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Fecha de Nacimiento</th>
              <th>País</th>
              <th>Ciudad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((empleado) => (
                <tr key={empleado.id}>
                  <td>
                    <img
                      src={`${ApiWebURL}${empleado.foto}`}
                      alt={`Foto de ${empleado.nombres} ${empleado.apellidos}`}
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                      }}
                    />
                  </td>
                  <td>{empleado.nombre}</td>
                  <td>{formatFechaNacimiento(empleado.fechanacimiento)}</td>
                  <td>{empleado.pais}</td>
                  <td>{empleado.ciudad}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger button"
                      onClick={() => eliminarItem(empleado)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Su lista de empleados seleccionados está vacía.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }

  const formatFechaNacimiento = (fecha) => {
    if (!fecha) return 'N/A'
    return fecha.split(' ')[0]
  }

  return (
    <section className="padded">
      <div className="container">
        <h2>Empleados Seleccionados</h2>
        <p>
          Solicita la atención de tus empleados seleccionados, encuéntralos en
          el restaurante EPICURE.
        </p>

        {dibujarTabla()}
        <button
          className="btn btn-danger button"
          onClick={() => vaciarCarrito()}
        >
          Vaciar Seleccionados
        </button>
      </div>
    </section>
  )
}

export { Seleccionados }
