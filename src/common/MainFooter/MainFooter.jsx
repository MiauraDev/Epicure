import './MainFooter.css'
import github from './../../assets/images/github.png'

function MainFooter() {
  return (
    <footer id="main-footer">
      <div className="container footer">
        <div className="footer-contact-info">
          <div>
            <p className="contact-info">
              Dirección: Av. Principal 123, Ciudad Principal
            </p>
            <p className="contact-info">
              Horario: Lunes a Viernes 12:00 PM - 10:00 PM
            </p>
          </div>
          <div>
            <p className="contact-info">Reservaciones: +53 987 654 321</p>
            <p className="terminos-condiciones">Terminos y Condiciones</p>
          </div>
        </div>
        <div className="container-bottom">
          <div className="footer-text">
            <p>© 2024 Todos los derechos reservados</p>
          </div>
          <div className="social-links">
            <a
              className="social-link"
              href="https://github.com/MiauraDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { MainFooter }
