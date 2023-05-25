import { Link } from 'react-router-dom';
import titletrivia from '../../../img/title_logo.svg';
import fondomain from '../../../img/fondo_main.svg';

import '../MainPage/MainPage.css'

import React from 'react'

export default function MainPage() {
  return (
    <section>
        <img className="fondo-pagina" src={fondomain} alt="fondo con los colores y logo de triviamorphosis" />
        <div className="titulo-container">
          <img className="titulo-principal" src={titletrivia} alt="Trivia Morphosis" />
          <Link className="iniciar-booton" to={`/logarse`}>Get Started</Link>
          <hr />
          <Link className="iniciar-booton" to={`/jugar`}>Jugar</Link>
        </div>
      </section>
  )
}