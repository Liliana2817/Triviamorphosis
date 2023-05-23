import React from 'react'
import logo from '../img/triviafly.svg'
import logo1 from '../img/Frame 6.svg'
import icons1 from '../img/logo-facebook.svg'
import icons2 from '../img/logo-instagram.svg'
import icons3 from '../img/logo-twitter.svg'
import './Footer.css'
function Footer() {
  return (
 

    <footer className="footer">
    <div className="container">
     
      <div className="footer-columns">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo1} alt="logo" className="logo" />
        </div>
      </div>
        <div className="footer-column">
          <h2>Sobre Nosotros</h2>
          <ul>
            <li>Nuestra historia</li>
            <li>
              Protección de datos
            </li>
            <li>
              Uso de Cookies
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h2>¡Síguenos! :)</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={icons1} alt="icons" className="icons" /> 
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
              <img src={icons2} alt="icons" className="icons" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
              <img src={icons3} alt="icons" className="icons" />
              </a>
            </li>
          </ul>
        </div>
            <div className="footer-column last subscribe-container">
          <h2>¿Quieres Jugar y Divertirte?<br />¡Déjanos tu correo!</h2>
          <form action="#" method="get">
            <input type="email" placeholder="Email" required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div>Desarrollado por Equipo 2 F5 © 2023 Todos los derechos reservados.</div>
    </div>
  </footer>
);

  
}

export default Footer