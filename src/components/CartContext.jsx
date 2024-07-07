import React, { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)

  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1)
  }

  const decrementCartCount = () => {
    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
  }

  const resetCartCount = () => {
    setCartCount(0)
  }

  return (
    <CartContext.Provider
      value={{
        cartCount,
        incrementCartCount,
        decrementCartCount,
        resetCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
