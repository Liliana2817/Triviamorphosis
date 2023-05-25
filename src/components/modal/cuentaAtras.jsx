//import React, { useTransition, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
//import Countdown from "react-countdown";

const CuentaAtras = ({open, onComprobar}) => {
  

    

    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(20);

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
      if(second === "00"){
        console.log("finalizado")
        
        //open.bind(this, '0')
        onComprobar(0);
        //close()
      }
  
      return () => clearInterval(intervalId);
    }, [isActive, counter, second, onComprobar, open])

    useEffect(() => {
        const observer = new IntersectionObserver(onVisibilityChange);
        observer.observe(miRef.current);
        
        // limpiar el observer cuando no esté en uso
        return () => { 
          observer.disconnect(); 
        };
      }, []);
  //if(!open) return null;
    //estado ? setIsActive(true):setIsActive(false)
  //!start ? setIsActive() : ;
  return (
    <div className="container">
      <div className="time" ref={miRef}>
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>

   </div>
   
  );
}

export default CuentaAtras;