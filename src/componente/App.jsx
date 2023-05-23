import React, { useState, useEffect } from 'react';
import "./app.css";
import FormInput from "./FormInput";

//import emailjs from "emailjs.com"//

const Formulario = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Ejemplo: pepito",
      errorMessage:
        "Usuario-nombre minimo 3-16 caracteres ¡y no debe incluir ningún carácter especial!",
      label: "Usuario-nombre",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "ejemplo123@gmail.com",
      errorMessage: "¡Debe ser una dirección de correo electrónico válido!",
      label: "Correo-electronico",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Cumpleaños",
      label: "Cumpleaños",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      errorMessage:
        "¡La contraseña debe tener entre 8 y 20 caracteres e incluir al menos 1 letra, 1 número y 1 carácter especial!",
      label: "Contraseña",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirmar Contraseña",
      errorMessage: "¡Las contraseñas no coinciden!",
      label: "Confirmar Contraseña",
      pattern: values.password,
      required: true,
    },
  ];

  //const handleSubmit = (e) => {
    //e.preventDefault();
 // };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(captcha);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsValid(true);
    } else {
      setIsValid(false);
      generateCaptcha();
    }
    setUserInput('');
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
          
        ))}
       
     
       
     
     <label htmlFor="captchaInput">Enter the text: <strong>{captchaText}</strong></label>
     <br></br>
     <input
       id="captchaInput"
       type="text"
       value={userInput}
       onChange={handleInputChange}
       required
     />     
     <div className='miclass'>
     {isValid ? <p>Registro Enviado!</p>:<p>No valido</p>}
     </div>
   
   

        <button  type="submit">Enviar</button>
        
      </form>
    </div>
  );
};

export default Formulario;
