import React from 'react'
import {
  BrowserRouter ,
  Route, Routes
} from "react-router-dom";


import Jugar from './components/Jugar';
import Comenzarjuego from './components/jugar/Comenzarjuego';


import Resumen from './components/resumen'

import './App.css';

function App() {

  return (
    <BrowserRouter>
    <div>

        <Routes>
            <Route exact path='retoseguridad/' element={<Jugar />} />
            <Route path='jugar' element={<Comenzarjuego />} />
            <Route path='resumen' element={<Resumen />} /> 
        </Routes>
   
    </div>
    </BrowserRouter>
  )
}

export default App;