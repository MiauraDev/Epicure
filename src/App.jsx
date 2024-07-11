// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import { MainHeader } from './common/MainHeader/MainHeader'
import { MainNav } from './common/MainNav/MainNav'
import { MainFooter } from './common/MainFooter/MainFooter'
import { Inicio } from './pages/Inicio/Inicio'
import { Pedidos } from './pages/Pedidos/Pedidos'
import { Proveedores } from './pages/Proveedores/Proveedores'
import { Empleados } from './pages/Empleados/Empleados'
import { ProductoDetalle } from './pages/ProductoDetalle/ProductoDetalle'
import { PedidoDetalle } from './pages/PedidoDetalle/PedidoDetalle'
import { Seleccionados } from './pages/Seleccionados/Seleccionados'
import { Paises } from './pages/Paises/Paises'

function App() {
  return (
    <Router>
      <CartProvider>
        <MainHeader />
        <MainNav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route
            path="/productoDetalle/:idproducto"
            element={<ProductoDetalle />}
          />
          <Route path="/pedido-detalle/:idpedido" element={<PedidoDetalle />} />
          <Route path="/seleccionados" element={<Seleccionados />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/paises" element={<Paises />} />
        </Routes>
        <MainFooter />
      </CartProvider>
    </Router>
  )
}

export default App
