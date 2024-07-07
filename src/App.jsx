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
import { Directores } from './pages/Directores/Directores'
import { Futbol } from './pages/Futbol/Futbol'
import { CartProvider } from './components/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {' '}
        {/* CartProvider debe estar directamente bajo BrowserRouter */}
        <MainHeader />
        <MainNav />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/empleados" element={<Empleados />} />
            <Route
              path="/productoDetalle/:idproducto"
              element={<ProductoDetalle />}
            />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/directores" element={<Directores />} />
            <Route path="/futbol" element={<Futbol />} />
          </Routes>
        </main>
        <MainFooter />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
