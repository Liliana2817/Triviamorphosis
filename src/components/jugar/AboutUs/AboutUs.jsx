import './AboutUs.css'
import aboutusimg from '../../../img/aboutus.svg';

import React from 'react'

export default function AboutUs() {
  return (
    <section className="about-us">
          <div className="container-about">
              <div className="column-about">
                <img src={aboutusimg} alt="Arcoiris difuminado" />
              </div>
              <div className="column-about">
                <h2>Despierta tu genialidad en Triviamorphosis</h2>
                <p>¡Bienvenidos a Triviamorphosis, donde la magia de la inteligencia artificial se combina con la diversión de las preguntas únicas! Nuestra empresa ha dado vida a un universo lleno de desafíos fascinantes generados por algoritmos inteligentes. Aquí, te sumergirás en un océano de conocimiento programado, donde cada pregunta te sorprenderá y te llevará a explorar nuevas fronteras en el mundo de la programación</p>
                <p>En Triviamorphosis, hemos llevado la innovación al siguiente nivel al utilizar inteligencia artificial para generar preguntas verdaderamente únicas. Cada pregunta ha sido cuidadosamente creada por nuestros algoritmos inteligentes para desafiar tus habilidades de programación de una manera original y sorprendente. Prepárate para enfrentarte a desafíos que te harán pensar fuera de lo común y te llevarán a explorar nuevos horizontes en el fascinante mundo de la programación.</p>
              </div>
          </div>
    </section>
  )
}
