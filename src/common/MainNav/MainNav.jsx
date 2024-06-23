import { Link } from 'react-router-dom'
function MainNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ID+
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
              <Link className="nav-link" to="/Proveedores">
                Proveedores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Empleados">
                Empleados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Tienda">
                Tienda
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Carrito">
                <i className="bi bi-basket" />
                Carrito
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#">
                <i className="bi bi-person" />
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { MainNav }
