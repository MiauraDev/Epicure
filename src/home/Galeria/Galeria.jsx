import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import platillo1 from './../../assets/images/platillo1.jpg'
import platillo2 from './../../assets/images/platillo2.jpg'
import platillo3 from './../../assets/images/platillo3.jpg'
import platillo4 from './../../assets/images/platillo4.jpg'
import platillo5 from './../../assets/images/platillo5.jpg'
import platillo6 from './../../assets/images/platillo6.jpg'
import platillo7 from './../../assets/images/platillo7.jpg'
import platillo8 from './../../assets/images/platillo8.jpg'
import platillo9 from './../../assets/images/platillo9.jpg'
import platillo10 from './../../assets/images/platillo10.jpg'
import platillo11 from './../../assets/images/platillo11.jpg'
import platillo12 from './../../assets/images/platillo12.jpg'
import './Galeria.css'

function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="padded galeria">
      <div className="container">
        <h2 className="text-center">Galería de Platillos</h2>
        <div className="row">
          {[
            platillo1,
            platillo2,
            platillo3,
            platillo4,
            platillo5,
            platillo6,
            platillo7,
            platillo8,
            platillo9,
            platillo10,
            platillo11,
            platillo12,
          ].map((platillo, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              data-aos="fade-up"
              key={index}
              onClick={() => openModal(platillo)}
              style={{ cursor: 'pointer' }}
            >
              <div className="img-container">
                <img
                  src={platillo}
                  className="img-fluid"
                  alt={`Platillo ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-galery">
              <div className="modal-body">
                <img src={selectedImage} className="img-fluid" alt="Platillo" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export { Galeria }
