import { Link } from 'react-router-dom';

import fondomain from '../../../img/fondo_main.svg';

import '../MainPage/MainPage.css'

import React from 'react'

export default function MainPage() {
  return (
    <section>
        <img className="fondo-pagina" src={fondomain} alt="fondo con los colores" />
        <div className="titulo-container">

          <hr />
          <Link className="iniciar-booton" to={`/jugar`}>Jugar</Link>
        </div>
      </section>
  )
}