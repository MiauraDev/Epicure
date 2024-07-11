// MainNav.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../components/CartContext'
import icon from '/icon.png'
import './MainNav.css'

function MainNav() {
  const { cartCount } = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <Link className="navbar-brand logo" to="/">
          <img src={icon} alt="icono" />
          <p>EPICURE</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/pedidos">
                Super Pedidos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proveedores">
                Proveedores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/paises">
                Paises
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/empleados">
                Empleados
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link seleccionados"
                to="/seleccionados"
                title="Seleccionados"
              >
                <i className="bi bi-person-heart"></i>
                <span className="bolita">{cartCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { MainNav }
