import { Link } from 'react-router-dom';
import {useState} from 'react';
import valores from "../data/datos_valor.json";
import './css/productos.css'


function Productos() {
    // const carritoCompra = {'item':2,'item':1, 'item':3}
    const [carrito, setCarrito] = useState([])
    const anidar = (datos) =>{
      console.log('anidar'+datos)
      if(localStorage.getItem('carro')!==undefined){
        setCarrito(JSON.parse(localStorage.getItem('carro')));
      }else{
        //setCarrito(JSON.parse(carritoCompra))
      }
                                                                                    
      console.log('carrito '+ carrito)
      const carro = [...carrito, datos]
      setCarrito(carro)
      localStorage.setItem('carro',JSON.stringify(carrito))
    }
    return (
      <main>
        <h2>Elija un plan que se adapte a sus necesidades de participación</h2>
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
                <div className='usuario'>{datos.invited}</div>
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