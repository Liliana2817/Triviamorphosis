import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Avatar, Space } from 'antd';
import './login.css'
function Login() {
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
                        localStorage.setItem('user', JSON.stringify(res.data))
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.clear();
        window.location = 'pruebadreact/';
    };
    if(localStorage.getItem('user') !== undefined){
        profile = JSON.parse(localStorage.getItem('user'));
    }
    return (
        <div>
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
                        <div ><button class="nuevo" onClick={logOut}>Cerrar sesión</button></div>
                    </div>
                    </div>
                </div>

                    

                </div>
            ) : (
                <div class="selectorOrder">
                    <div class="dropup">
                        <button onClick={() => login()}>Sign in with Google 🚀 </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Login;