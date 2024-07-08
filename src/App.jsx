import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import { MainHeader } from './common/MainHeader/MainHeader'
import { MainNav } from './common/MainNav/MainNav'
import { MainFooter } from './common/MainFooter/MainFooter'
import { Inicio } from './pages/Inicio/Inicio'
import { Proveedores } from './pages/Proveedores/Proveedores'
import { Empleados } from './pages/Empleados/Empleados'
import { Tienda } from './pages/Tienda/Tienda'
import { ProductoDetalle } from './pages/ProductoDetalle/ProductoDetalle'
import { Carrito } from './pages/Carrito/Carrito'
import { Directores } from './pages/Directores/Directores'
import { Futbol } from './pages/Futbol/Futbol'

function App() {
  return (
    <Router>
      <CartProvider>
        <MainHeader />
        <MainNav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Proveedores" element={<Proveedores />} />
          <Route path="/Empleados" element={<Empleados />} />
          <Route
            path="/ProductoDetalle/:idproducto"
            element={<ProductoDetalle />}
          />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Directores" element={<Directores />} />
          <Route path="/Futbol" element={<Futbol />} />
        </Routes>

        <MainFooter />
      </CartProvider>
    </Router>
  )
}

export default App
