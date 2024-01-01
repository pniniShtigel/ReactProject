import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import AppStore from "../classes/appStore"

import { useState, useEffect } from "react";
// import ShowService from './showService';
export default function AddMeeting() {
    const [serviceName, setServiceName] = useState();
    const [dateTime, setDateTime] = useState();
    const [clientName, setClientName] = useState();
    const [clientPhone, setClientPhone] = useState();
    const [clientEmail, setClientEmailn] = useState();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8787/services')
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok'); }
                return response.json();
            })
            .then(result => { setData(result); })
            .catch(error => { console.error('Error fetching data:', error); });
    },
        []);
    const handleAddMeeting = (event) => {
        event.preventDefault();
        fetch('http://localhost:8787/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                serviceName,
                clientName,
                clientPhone,
                clientEmail,
                dateTime
            }),
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
            AppStore.setIsAddMeeting(false);
    }
    return (<div className='fix details-content'>





        <form onSubmit={handleAddMeeting}>

            <Select onChange={e => setServiceName(e.target.value)}
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
                color="success"
                placeholder="Choose service type">
                {data.map((op) => <Option value={op.name}>{op.name}</Option>)}
                
            </Select>
        


            <Input placeholder="clientName" variant="outlined" color="success"
                value={clientName}
                onChange={e => setClientName(e.target.value)}
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

            <Input placeholder="clientPhone" variant="outlined" color="success"
                value={clientPhone}
                onChange={e => setClientPhone(e.target.value)}
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
            <Input placeholder="clientEmail" variant="outlined" color="success" type='email'
                value={clientEmail}
                onChange={e => setClientEmail(e.target.value)}
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
            <LocalizationProvider dateAdapter={AdapterDayjs} >

                <DateTimePicker value={dateTime} onChange={e => setDateTime(e)} sx={{
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
            </LocalizationProvider >
<div></div>
            <Button type="submit" color="success">
                submit
            </Button>
        </form>
    </div>


    )
}