import React from 'react'
import {
  BrowserRouter ,
  Route, Routes
} from "react-router-dom";


import Jugar from './components/Jugar';
import Nuvousuario from './components/Nuvousuario';
import Detalles from './components/Detalles';
import Productos from './components/Productos';
import Header from './components/Header';
import Footer from './footer/Footer';
import Comenzarjuego from './components/jugar/Comenzarjuego';
import Logarse from './components/logarse';
import Lista from './components/Lista'
import Resumen from './components/resumen'

import './App.css';

function App() {

  return (
    <BrowserRouter>
    <div>
      <Header/>
        <Routes>
            <Route exact path='pruebadreact/' element={<Jugar />} />
            <Route path='productos' element={<Productos />} />
            <Route path='register' element={<Nuvousuario />} />
            <Route path='logarse' element={<Logarse />} />
            <Route path='detalles/:id' element={<Detalles />} />
            <Route path='jugar' element={<Comenzarjuego />} />
            <Route path='carrito' element={<Lista />} /> 
            <Route path='resumen' element={<Resumen />} /> 
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;