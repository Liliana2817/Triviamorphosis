import {useState} from 'react';
import valores from "../data/datos_valor.json";
import './css/productos.css'


function Productos() {
  const [carrito, setCarrito] = useState([]);

  const anidar = (datos) => {
    const carro = [...carrito, datos];
    setCarrito(carro);
    localStorage.setItem('carro', JSON.stringify(carro));
  };
    return (
      <main>
        <h2>Elija tu plan</h2>
        <div class="row">
        { 
          valores.map((datos, id)=>(
            <div class="column">
              <div class="card">
                <h3>{datos.title}</h3>
                <div className='precio'>{datos.precio} {datos.moneda}</div>
                <p>{datos.op1}</p>
                <p>{datos.op2}</p>
                <p>{datos.op3}</p>
                <div className='usuario'>Usuarios: {datos.invited}</div>
                <button onClick={()=>anidar(datos)}>Seleccionar plan</button>
              </div>
            </div>
          ))
        }
        </div>
      </main>

    );
  };
  
export default Productos;