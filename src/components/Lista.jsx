import React, { useEffect, useState } from 'react';
import './css/lista.css';

function Lista() {
  const [lista, setLista] = useState([]);

  const anidar = () => {
    if (localStorage.getItem('carro') !== null) {
      setLista(JSON.parse(localStorage.getItem('carro')));
    } else {
      //setCarrito(JSON.parse(carritoCompra))
    }
    console.log('resultado ' + JSON.parse(localStorage.getItem('carro')));
  };

  const quitarCarrito = (index) => {
    const updatedLista = [...lista];
    updatedLista.splice(index, 1);
    setLista(updatedLista);
    localStorage.setItem('carro', JSON.stringify(updatedLista));
  };

  useEffect(() => {
    anidar();
  }, []);

  const calcularPrecioTotal = () => {
    let total = 0;
    lista.forEach((producto) => {
      if (producto.precio !== 'gratis') {
        total += parseFloat(producto.precio);
      }
    });
  
    // Separar los euros y los centavos con coma en lugar de punto
    // const [euros, centavos] = total.toFixed(2).split('.');
    // const precioFormateado = euros + ',' + centavos;
    const resultado = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(total) 
  
    return resultado;
  };

  return (
    <div className="lista-container">
      <br />
      <br />
      <br />
      <br />

      {lista.length === 0 ? (
          <h2 className="empty-message">No tienes ningún producto :(</h2>
      ) : (
        <>
          <div>
            {lista.map((index, i) => (
              <div className="column1" key={i}>
                <div className="card1">
                  <h3>{index.title}</h3>
                  <div className="precio">
                    {index.precio} {index.moneda}
                  </div>
                  <div className="p-1">
                  <h2>{index.op3}</h2>
                    <ul>
                      <li>{index.op1}</li>
                      <li>{index.op2}</li>
                    </ul>
                  </div>

                  <div className="usuario">{index.invited}</div>
                  <button className="botton" onClick={() => quitarCarrito(i)}>Quitar producto</button>
                </div>
              </div>
            ))}
          </div>
          <h2 className='total-carrito'>Total precio: {calcularPrecioTotal()} </h2>
        </>
      )}
    </div>
  );
}

export default Lista;

