import React from 'react'
import { Link } from 'react-router-dom';
import './css/resumen.css';
function resumen() {
  return (
    <main>
      <div><Link className="iniciar-booton" to={`/retoseguridad`}>Volver al inicio</Link></div>
      <div className='gameover'>Game Over</div>
    </main>
  )
}

export default resumen