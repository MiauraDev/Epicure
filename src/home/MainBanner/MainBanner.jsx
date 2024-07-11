import React from 'react'
import './MainBanner.css'
import slide1 from './../../assets/images/banner1.jpg'
import slide2 from './../../assets/images/banner2.jpg'
import slide3 from './../../assets/images/banner3.jpg'

function MainBanner() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="6000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={slide1}
            className="d-block w-100"
            alt="Bienvenido a Epicure"
          />
          <div className="carousel-caption d-none d-md-block txtSlider">
            <h2>Elegancia y distinción en cada plato</h2>
            <p>
              Disfruta de una experiencia culinaria inigualable en nuestro
              elegante restaurante
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide2}
            className="d-block w-100"
            alt="Gastronomía de Alta Calidad"
          />
          <div className="carousel-caption d-none d-md-block txtSlider">
            <h2>Gastronomía de Alta Calidad</h2>
            <p>
              Saborea platos exquisitos preparados por nuestros chefs de
              renombre
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide3}
            className="d-block w-100"
            alt="Ambiente Sofisticado"
          />
          <div className="carousel-caption d-none d-md-block txtSlider">
            <h2>Ambiente Sofisticado</h2>
            <p>Relájate y disfruta en un entorno elegante y acogedor</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export { MainBanner }
