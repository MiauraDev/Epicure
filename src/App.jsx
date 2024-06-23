import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainHeader } from './common/MainHeader/MainHeader'
import { MainFooter } from './common/MainFooter/MainFooter'
import { MainNav } from './common/MainNav/MainNav'
import { Inicio } from './pages/Inicio/Inicio'
import { Proveedores } from './pages/Proveedores/Proveedores'
import { Empleados } from './pages/Empleados/Empleados'
import { Tienda } from './pages/Tienda/Tienda'
import { ProductoDetalle } from './pages/ProductoDetalle/ProductoDetalle'
import { Carrito } from './pages/Carrito/Carrito'

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <MainNav />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Proveedores" element={<Proveedores />} />
          <Route path="/Empleados" element={<Empleados />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route
            path="/ProductoDetalle/:idproducto"
            element={<ProductoDetalle />}
          />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </main>
      <MainFooter />
    </BrowserRouter>
  )
}

export default App
