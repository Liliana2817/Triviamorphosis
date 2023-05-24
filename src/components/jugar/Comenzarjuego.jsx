import { Wheel } from 'react-custom-roulette';
import React, { useState } from 'react';
import  { useEffect, useRef } from 'react';
import { Button, Space } from 'antd';
import Resultado from '../modal/resultado';
import Pregunta from '../modal/pregunta';
//import CuentaAtras from '../modal/cuentaAtras';
import sound from './misc333.mp3';
import './ruleta.css';

import close from '../../img/close.svg';
import spin from '../../img/spin.svg';


const data = [
  { option: 'JavaScript', style: { backgroundColor: '#FEDC00' } },
  { option: 'CSS', style: { backgroundColor: '#FE8A34' } },
  { option: 'SASS', style: { backgroundColor: '#FE51FF' } },
  { option: 'REACT', style: { backgroundColor: '#9F65FF' } },
  { option: 'HTML', style: { backgroundColor: '#0064EF' } },
  { option: 'PYTHON', style: { backgroundColor: '#50DC64' } },
]
const inicioJson = {
  "choices": [
    {
      "text": "Iniciando juego",
    }
  ],
}

function Comenzarjuego() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(Math.floor(Math.random() * data.length));
  const [chatList, setChatList] = useState(inicioJson);
  const [classCambio, setClassCambio] = useState(false);
  const [preguntas, setPreguntas] = useState([]);
  const [respuesta, setRespuesta] = useState();
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [iniciarCuenta, setIniciarCuenta] = useState(false)
  const audio = new Audio(sound)

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      //audio.play();
      setClassCambio(false);
    }
  }
  if (!localStorage.getItem('user')) {
    window.location = '/';
  }
  let apikey = 'sk-';
  const miFecht = async (prompt) =>
    await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apikey}qMnzckqSmTuvsUVCp9j3T3BlbkFJLOsjRva1PSXRB9QGOEtw`
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 400

      })
    })
      .then(response => response.json())
      .then(data => setChatList(data))

  const comprobar = (nu) => {
    if (nu !== null){
      const ok = preguntas[4].descripcion.trim().toLowerCase().replace('respuesta correcta: ', '');
      let seleccion = preguntas[nu].descripcion.trim().toLowerCase();
      //let s_obj_ok = new String(ok)
      //seleccion = seleccion
      console.log("RESPUESTA = "+ seleccion + " BUENA = "+ok);

      let acierto = seleccion.includes(ok);
      console.log("resultado "+ acierto ? true : false)
      if(!acierto){
        acierto = ok.includes(seleccion);
      }
      setToggle(acierto)
      setIsOpen(true)
      setRespuesta(acierto ? true : false);
      console.log(ok.includes(seleccion));
    }
    
  }

  const resultadoSeparar = chatList.choices[0] ? chatList.choices[0].text : miFecht(`hazme una pregunta sobre ${data[prizeNumber].option}, con 
  tres posible respuestas y marcas la correcta, mostrándome
  entre paréntesis correcta, ejemplo: (correcta)`);
  
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(5);

  const miRef = useRef(null);
  const onVisibilityChange = (entries) => {
      // Si el componente es visible
      if (entries[0].isIntersecting === true) {
        console.log('El componente ahora es visible!');
        setIsActive(true)
        // Aquí puedes colocar la llamada a la función que deseas ejecutar
      }
    };



  useEffect(() => {
    let intervalId;
          if(second === '00'){
            console.log("finalizado");
            setIsActive(false)
        
          }else{
            console.log("segundo: "+second);
          }
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter - 1);
      }, 1000)
    }
    


    return () => clearInterval(intervalId);
  }, [isActive, counter, second])
  useEffect(() => {
    const observer = new IntersectionObserver(onVisibilityChange);
    observer.observe(miRef.current);

    // limpiar el observer cuando no esté en uso
    return () => { 
      observer.disconnect(); 
    };
  }, []);
  

  return (
    <main>
      <Wheel
       className="ruleta"
       mustStartSpinning={mustSpin}
       prizeNumber={prizeNumber}
       spinDuration={0.7}
       data={data}
       textColors={['transparent']}
       innerBorderColor={['transparent']}
       outerBorderWidth={0}
       innerBorderWidth={0}
       radiusLineWidth={0}
       borderWidth={0}
       innerRadius={1}
       sizeMultiplier={0}

        onStopSpinning={() => {
          setMustSpin(false);
          miFecht(`Quiero realizar un juego de preguntas concretas y específicas sobre diferentes temas dentro del ámbito de la programación. 
          Escribe una pregunta con obligatoriamente tres respuestas, sobre un tema de programación y nivel de dificultad indicado posteriormente. No incluyas la palabra del tema dentro de la pregunta.
          Como máximo de 20 palabras y mínimo de 5 a 8 palabras por pregunta y respuesta.
          Nivel de Dificultad: alta
          Tema: ${data[prizeNumber].option}
          Ejemplo de formato, quiero que me devuelvas la respuesta siempre así:
          Pregunta: ¿...?
          a) …
          b) …
          c) …
          respuesta correcta: ...
          `);
          /*
          miFecht(`hazme una pregunta sobre ${data[prizeNumber].option}, con 
                  tres posible respuestas y marcas la correcta, mostrándome
                  entre paréntesis correcta, ejemplo: (correcta)`);
*/
          console.log("Se ha parado");
          audio.pause();
          setClassCambio(true);
          setPreguntas([]);
          //if(resultadoSeparar.length > 1)
          setIniciarCuenta(true);

        }}
      />
        <a href='#' className="btn-girar" onClick={handleSpinClick}>
          <img src={spin} alt="close logo" />
        </a>
        <a href='/' className="btn-cerrar">
          <img src={close} alt="close logo" />
        </a>

      <div className={classCambio ? 'visible':'oculto'} style={data[prizeNumber].style}>

        <div className={`fondoModal_A ${classCambio ? 'visible':'oculto'}`} style={data[prizeNumber].style}>
          <div className="contenedorModal_A">
          
          <Resultado open = {isOpen} close = { () => setIsOpen(false)} acierto={respuesta}>{respuesta ? 'acertado':'fallado'}</Resultado>


          <Pregunta open = {!isOpen} close = { () => setIsOpen(false)}>
          
              <div className={`contenidoModal_A ${classCambio ? 'visible':'oculto'}`}>
              <div className="rpregunta" style={data[prizeNumber].style}>
                {data[prizeNumber].option}
              </div>
              
              {resultadoSeparar.split(/\r?\n/).map((instruction, index) => {
                //let marcador = '';
                if (instruction !== "") {
                  let existe = instruction.includes('(correcta)');
                  if (existe) {
                    instruction = instruction.replace('(correcta)', '');
                    //marcador = index + 1

                  } else {
                    instruction = instruction.replace('(incorrecto)', '');
                    instruction = instruction.replace('(incorrecta)', '');
                  }
                  //console.log("La respuesta es:" + marcador);
                  //console.log("Total retorno" + JSON.stringify(resultadoSeparar));
                  if (instruction !== "Iniciando juego") {
                    preguntas.push({
                      id: index + 1,
                      descripcion: instruction,
                    });
                  }
                  //return <div>{`Step ${index + 1}: ${instruction}`}</div>;

                }
              })
              }
              <Space direction="vertical" style={{ width: '100%'}} ref={miRef}>
              <div className="container">
                  <div className="time" >
                    <span className="minute">{minute}</span>
                    <span>:</span>
                    <span className="second">{second}</span>
                  </div>
              </div>
             
                {
                  preguntas.map((pregunta, index) => (
                    (() => {
                      switch (Number(index)) {
                        case 0:
                          return <div className='pregunta'>{pregunta.descripcion}</div>
                        case 1:
                          return <Button className='fuenteboton' onClick={() => comprobar(1)} type="dashed" block>{pregunta.descripcion}</Button>
                        case 2:
                          return <Button className='fuenteboton' onClick={() => comprobar(2)} type="dashed" block>{pregunta.descripcion}</Button>
                        case 3:
                          
                          return <Button className='fuenteboton' onClick={() => comprobar(3)} type="dashed" block>{pregunta.descripcion}</Button>
                        default:
                          return ""
                      }
                    })()))
                    
                }
              </Space>
              
              </div>
          </Pregunta>


            



            
          </div>
        </div>
      </div>

    </main>
  );
};

export default Comenzarjuego;