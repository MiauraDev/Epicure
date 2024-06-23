export const ApiWebURL = 'https://servicios.campus.pe/'

export const agregarCarrito = (item) => {
  item.cantidad = 1
  item.precio = item.preciorebajado === '0' ? item.precio : item.preciorebajado
  let carrito = []
  carrito.push(item)

  sessionStorage.setItem('carritocompras', JSON.stringify(carrito))
}
