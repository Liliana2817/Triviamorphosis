import React from "react"
import '../css/resultado.css'
import ok from '../../img/fiesta.png'
import no from '../../img/pensamiento.png'

function Resultado({children, open, close, acierto}) {

    if(!open) return null
  return (
    
    <div className="resultado">
          <div>
            <button onClick={close}>x</button> </div>
            
          {
            acierto
             ? <div className="acertado acierto_fallo">
                    
                    <img src={ok} alt="Has acertado"/>
                </div>
             : <div className="fallo acierto_fallo">
                    
                    <img src={no} alt="Has fallado"/>
                </div>
          }
          
        </div>
  )
}

export default Resultado;
