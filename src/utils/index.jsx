export const ApiWebURL = 'https://servicios.campus.pe/'

export const agregarEmpleadosSeleccionados = (empleadosSeleccionados) => {
  let carrito = []
  if (sessionStorage.getItem('empleadosSeleccionados')) {
    carrito = JSON.parse(sessionStorage.getItem('empleadosSeleccionados'))
    empleadosSeleccionados.forEach((empleado) => {
      let index = carrito.findIndex((e) => e.idempleado === empleado.idempleado)
      if (index === -1) {
        carrito.push(empleado)
      }
    })
  } else {
    carrito = [...empleadosSeleccionados]
  }
  sessionStorage.setItem('empleadosSeleccionados', JSON.stringify(carrito))
}
