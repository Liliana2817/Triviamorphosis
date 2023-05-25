import React, { useState } from 'react';
import { googleLogout } from '@react-oauth/google';

import { Avatar, Space } from 'antd';
import './login.css'
function Login() {

    let [ profile, setProfile ] = useState([]);



    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.clear();
        window.location = '/pruebadreact';
    };
    if(localStorage.getItem('user') !== undefined){
        profile = JSON.parse(localStorage.getItem('user'));
    }
    return (
        <div>
            {profile ? (
                <div className="opc">
                    <div className="selectorOrder">
                        <div className="dropup">
                            <button className="dropbtn">
                                <Space wrap size={16}>
                                    <Avatar src={profile.google ? profile.google.picture : 'https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg'} />
                                </Space>
                            </button>
                        <div className="dropup-content">
                            <p>{profile.nombre}</p>
                            <p>{profile.email}</p>
                            <div><button className="nuevo" onClick={logOut}>Cerrar sesión</button></div>
                        </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="selectorOrder">
                    <div className="login">
                        <a href='/logarse'>Logarse</a>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Login;