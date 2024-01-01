import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
// import AppStore from "./classes/appStore"

import { useState, useEffect } from "react";
import ShowService from './showService';
import AppStore from '../classes/appStore';
export default function AddService() {
    const [id, setId] = useState("  :)   ");
    const [name, setName] = useState("  new born ");
    const [description, setDescription] = useState("  0hdtyjhdjgh");
    const [price, setPrice] = useState("  5.5$  ");
    const [duration, setDuration] = useState(" 30 min  ");

    const handleAddService = (event) => {
        event.preventDefault();
        fetch('http://localhost:8787/service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id, name, description, price ,duration}),
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
       AppStore.setIsAddService(false);


    }


    return (<div className="fix details-content">

        <form onSubmit={handleAddService}>
            <Input placeholder="id" variant="outlined" color="success"
                value={id}
                onChange={e => setId(e.target.value)}
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
            <Input placeholder="name" variant="outlined" color="success"
                value={name}
                onChange={e => setName(e.target.value)}
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

            <Input placeholder="description" variant="outlined" color="success"
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
            <Input placeholder="price" variant="outlined" color="success"
                value={price}
                onChange={e => setPrice(e.target.value)}
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

            <Input placeholder="duration" variant="outlined" color="success"
                value={duration}
                onChange={e => setDuration(e.target.value)}
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
            <Button type="submit" color="success">
                submit
            </Button>
        </form>
    </div>


    )
}