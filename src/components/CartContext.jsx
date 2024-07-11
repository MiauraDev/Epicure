import React, { createContext, useState, useEffect } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    leerServicio()
  }, [])

  const leerServicio = () => {
    const datosCarrito =
      JSON.parse(sessionStorage.getItem('carritocompras')) || []
    setCartItems(datosCarrito)
    calcularTotal(datosCarrito)
    actualizarContador(datosCarrito)
  }

  const actualizarContador = (datosCarrito) => {
    let count = 0
    datosCarrito.forEach((item) => {
      count += item.cantidad
    })
    setCartCount(count)
  }

  const calcularTotal = (datosCarrito) => {
    const sumaTotal = datosCarrito.reduce(
      (acumulador, fila) =>
        fila.tipo === 'empleado'
          ? acumulador + fila.precio * fila.cantidad
          : acumulador,
      0
    )
    setTotal(sumaTotal)
  }

  const eliminarItem = (item) => {
    const carritoMenos = cartItems.filter(
      (itemCart) => itemCart.id !== item.id || itemCart.tipo !== item.tipo
    )
    setCartItems(carritoMenos)
    sessionStorage.setItem('carritocompras', JSON.stringify(carritoMenos))
    calcularTotal(carritoMenos)
    actualizarContador(carritoMenos)
  }

  const vaciarCarrito = () => {
    setCartItems([])
    sessionStorage.removeItem('carritocompras')
    setTotal(0)
    setCartCount(0)
  }

  const addItem = (item, cantidad) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.tipo === item.tipo
    )
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.tipo === item.tipo
          ? { ...cartItem, cantidad: cartItem.cantidad + cantidad }
          : cartItem
      )
      setCartItems(updatedItems)
      sessionStorage.setItem('carritocompras', JSON.stringify(updatedItems))
      calcularTotal(updatedItems)
      actualizarContador(updatedItems)
    } else {
      const updatedItems = [...cartItems, { ...item, cantidad }]
      setCartItems(updatedItems)
      sessionStorage.setItem('carritocompras', JSON.stringify(updatedItems))
      calcularTotal(updatedItems)
      actualizarContador(updatedItems)
    }
  }

  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        total,
        eliminarItem,
        vaciarCarrito,
        addItem,
        incrementCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
