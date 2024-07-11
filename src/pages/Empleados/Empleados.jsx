import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../components/CartContext'
import { ApiWebURL } from '../../utils'
import AOS from 'aos'
import './Empleados.css'

function Empleados() {
  const { cartItems, addItem, eliminarItem } = useContext(CartContext)
  const [listaEmpleados, setListaEmpleados] = useState([])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    leerServicio()
  }, [])

  useEffect(() => {
    actualizarEstadoSelecciones()
  }, [cartItems])

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + 'empleados.php'
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        const empleadosFiltrados = data.filter(
          (item) => item.idempleado !== '10'
        )
        const empleadosConEstado = empleadosFiltrados.map((emp) => ({
          ...emp,
          favorite: cartItems.some(
            (item) => item.id === emp.idempleado && item.tipo === 'empleado'
          ),
        }))
        setListaEmpleados(empleadosConEstado)
      })
  }

  const toggleFavorite = (empleado) => {
    const isFavorite = cartItems.some(
      (item) => item.id === empleado.idempleado && item.tipo === 'empleado'
    )

    if (!isFavorite) {
      const newItem = {
        id: empleado.idempleado,
        tipo: 'empleado',
        nombre: `${empleado.nombres} ${empleado.apellidos}`,
        fechanacimiento: empleado.fechanacimiento,
        pais: empleado.pais,
        ciudad: empleado.ciudad,
        foto: empleado.foto,
      }
      addItem(newItem, 1)
    } else {
      const itemToRemove = cartItems.find(
        (item) => item.id === empleado.idempleado && item.tipo === 'empleado'
      )
      eliminarItem(itemToRemove)
    }
  }

  const actualizarEstadoSelecciones = () => {
    const updatedEmpleados = listaEmpleados.map((emp) => ({
      ...emp,
      favorite: cartItems.some(
        (item) => item.id === emp.idempleado && item.tipo === 'empleado'
      ),
    }))
    setListaEmpleados(updatedEmpleados)
  }

  return (
    <section id="empleados" className="padded">
      <div className="container">
        <h2 className="text-center">Empleados</h2>
        <p className="text-center">
          Selecciona a tus empleados estrella favoritos de EPICURE
        </p>
        <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2 g-4">
          {listaEmpleados.map((empleado) => (
            <div className="col" key={empleado.idempleado}>
              <div
                className="card position-relative"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src={ApiWebURL + 'fotos/' + empleado.foto}
                  className="card-img-top"
                  alt={empleado.nombres}
                />
                <div className="card-body">
                  <h5 className="card-title nombreEmpleados">
                    {empleado.nombres} {empleado.apellidos}
                  </h5>
                </div>
                <div
                  className="favorite-icon "
                  onClick={() => toggleFavorite(empleado)}
                >
                  <i
                    className={`bi ${empleado.favorite ? 'bi-heart-fill' : 'bi-heart'}`}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Empleados }
