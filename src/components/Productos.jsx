import { Link } from 'react-router-dom';
import { useState } from 'react';
import valores from '../data/datos_valor.json';
import './css/productos.css';

function Productos() {
  const [carrito, setCarrito] = useState([]);

  const anidar = (datos) => {
    const carro = [...carrito, datos];
    setCarrito(carro);
    localStorage.setItem('carro', JSON.stringify(carro));
  };

  return (
    <main>
      <h2>Elija un plan que se adapte a sus necesidades de participación</h2>
      <div className="row">
        {valores.map((datos, id) => (
          <div className="column" key={id}>
            <div className="card">
              <h3>{datos.title}</h3>
              <div className="precio">
                {datos.precio} {datos.moneda}
              </div>
              <p>{datos.op1}</p>
              <p>{datos.op2}</p>
              <p>{datos.op3}</p>
              <div className="usuario">{datos.invited}</div>
              <button onClick={() => anidar(datos)}>Seleccionar plan</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Productos;