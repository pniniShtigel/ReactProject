import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import React, { useState } from 'react';
import AppStore from "./classes/appStore"
import AlertErorr from './alertErorr';
import Alert from '@mui/material/Alert';
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        fetch('http://localhost:8787/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                return response;
            })
            .then(data => {

                console.log('Success:', data);
                if (data.status === 401) {
                    AppStore.setIsLogin(false);
                    AppStore.setIsErrorLogin(true);
                    
                }
                if (data.status === 200){
                    AppStore.setIsLogin(true);
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });
            
    };
    return (
        <div>
            
      
      |
    
            <p>
                To enter your personal account,
                <br></br>please enter a username and password<br></br>
            </p>
            <div id="bord">

                <form onSubmit={handleLogin}>
                    <Input placeholder="user name" variant="outlined" color="success"
                        value={username}  
                        onChange={e => setUsername(e.target.value)}
                        sx={{
                            margin: "8px",
                            '&::before': {
                                display: 'none',
                            },
                            '&:focus-within': {
                                outline: '2px solid var(--Input-focusedHighlight)',
                                outlineOffset: '2px',
                            }
                        }} />
                    <Input placeholder="password" type='password' variant="outlined" color="success"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        sx={{
                            margin: "8px",
                            '&::before': {
                                display: 'none',
                            },
                            '&:focus-within': {
                                outline: '2px solid var(--Input-focusedHighlight)',
                                outlineOffset: '2px',
                            }
                        }}

                    />
                    <Button type="submit"color="success">
                        submit
                    </Button>
                </form >
            </div>
        </div>
    )
}
export default Login;

