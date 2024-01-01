import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import AppStore from "./classes/appStore"

import { useState,useEffect } from "react";
export default function UpdateDetails() {
    const [name, setUsername] = useState("  Truecolor Studio "  );
const [address, setAddress] = useState("  rabi akiva 20"  );
const [phone, setPhone] = useState("  0556765181  ");
const [owner, setOwner] = useState("pnini shtigel  ");
const [logo, setLogo] = useState("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Truecolor-Studio-logo.jpg");
const [description, setDescription] = useState("  A photographer for every purpose  ");

    const handleUpdateDetails = (event) => {
        event.preventDefault();
    fetch('http://localhost:8787/businessData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address, phone,owner,logo,description}),
    })
        .then(response => {              
            return response;
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
        AppStore.setIsEditData(false);

}


    return (<div>
   
        <form onSubmit={handleUpdateDetails}>
            <Input placeholder="name" variant="outlined" color="success"
                value={name}
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
            <Input placeholder="address"  variant="outlined" color="success"
                value={address}
                onChange={e => setAddress(e.target.value)}
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

<Input placeholder="phone"  variant="outlined" color="success"
                value={phone}
                onChange={e => setPhone(e.target.value)}
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

<Input placeholder="owner"  variant="outlined" color="success"
                value={owner}
                onChange={e => setOwner(e.target.value)}
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

<Input placeholder="logo"  variant="outlined" color="success" type="images"
                value={logo}
                onChange={e => setLogo(e.target.value)}
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

<Input placeholder="description"  variant="outlined" color="success"
                value={description}
                onChange={e => setDescription(e.target.value)}
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
            <Button type="submit"  color="success">
                submit
            </Button>
        </form>
    </div>
      

    )
}