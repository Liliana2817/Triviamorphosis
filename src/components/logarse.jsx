import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Avatar, Space } from 'antd';
import './login.css';
import usuarios from '../data/usuarios.json';
function Logarse() {
    const [ user, setUser ] = useState([]);
    let [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);

                        comprobarUsuario(res.data.email, '');
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );


    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.clear();
        window.location = '/pruebadreact';
    };

    if(localStorage.getItem('user') !== undefined){
        profile = JSON.parse(localStorage.getItem('user'));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        
        comprobarUsuario(email, password);
      };
      
    const comprobarUsuario = (email, pass)=>{
        let existe = usuarios.find(element => element.email === email);
        if(existe){
            
           //alert(email + ' ' + pass + ' --> ' +existe.nombre );
           localStorage.setItem('user', JSON.stringify(existe)); 
           window.location = '/pruebadreact';
        }else{
            alert("Usuario no encontrado"); 
        }
        
    }
    return (
        <main className='logarse'>
            {profile ? (
                <div class="opc">
                    <div class="selectorOrder">
                        <div class="dropup">
                            <button class="dropbtn">
                                <Space wrap size={16}>
                                    <Avatar src={profile.picture} />
                                </Space>
                            </button>
                        <div class="dropup-content">
                            <p>{profile.name}</p>
                            <p>{profile.email}</p>
                            <div><button class="nuevo" onClick={logOut}>Cerrar sesión</button></div>
                        </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div class="formulario">
                    <h3>Login</h3>
                    <form className='miFormulario' onSubmit={handleSubmit}>
                        <input id="email" type="email" placeholder="Correo electrónico"  required />
                        <input id="password" type="password" placeholder="Contraseña" required />
                        <button type="submit">Iniciar sesión</button>
                    </form>
                    <button className='google' onClick={() => login()}>Inicar sesion con Google</button>
                        
                </div>
            )}
        </main>
    );
}
export default Logarse