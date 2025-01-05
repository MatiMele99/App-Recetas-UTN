import React from 'react'
// import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import HeroImage from '../../assets/hero-img-2.jpg'

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="hero"
          style={{
            backgroundImage:
              `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
          url(${HeroImage})`

          }}>
          <div className="hero-text container">
            <h1 className='hero-title'><span className="title-recipe">Recipe</span><span className='title-save'>Save</span>: Guarda tus recetas.</h1>
            <p className='hero-p'>Nunca más olvides tus recetas. Crea y guarda combinaciones de ingredientes, ¡y aprende sobre el valor nutricional de lo que cocinas! Todo esto gracias a <span className='span-recipe'>RecipeSave</span>.</p>
          </div>
        </div>

        <div className="start">
          <h2 className='start-title'>Comienza creando una receta</h2>
          <a href="#create-recipe" className='start-btn-home'>Crear nueva receta</a>
        </div>
      </section>
    </>
  )
}

export default Home
