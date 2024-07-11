import React, { useEffect } from 'react'
import './Nosotros.css'
import nosotros from '../../assets/images/nosotros.jpg'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Nosotros() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  return (
    <section id="nosotros" className="padded">
      <div className="container">
        <div className="content">
          <div className="text">
            <h2>Sobre Nosotros</h2>
            <p>
              En <strong>Epicure</strong>, somos un equipo apasionado por la
              excelencia culinaria y el arte de la hospitalidad. Nuestro
              restaurante se erige como un templo de la alta gastronomía, donde
              cada plato es una creación única e inigualable.
            </p>
            <p>
              Inspirados por la diversidad cultural y la riqueza de los sabores
              globales, nos embarcamos en un viaje culinario que celebra la
              tradición y la innovación. Nuestro equipo, compuesto por chefs y
              expertos en gastronomía de renombre, trabaja incansablemente para
              ofrecer una experiencia sensorial inigualable a cada comensal.
            </p>
            <p>
              En Epicure, valoramos la conexión con la tierra y los productores
              locales. Nuestra misión es resaltar los ingredientes de origen
              sostenible, respetando la estacionalidad y el entorno. Cada visita
              a nuestro restaurante es una oportunidad para descubrir nuevas
              historias y sabores, presentados con elegancia y dedicación.
            </p>
            <p>
              Bienvenido a Epicure, donde cada detalle cuenta y cada comida es
              una celebración.
            </p>
          </div>
          <div className="image" data-aos="zoom-in-down">
            <img src={nosotros} alt="nosotros" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Nosotros }
