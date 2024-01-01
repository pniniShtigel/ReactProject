import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import AppStore from "../classes/appStore"
import Fab from '@mui/material/Fab';
import Meeting from "./meeting";

export default function ShowService() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8787/appointments')
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok'); }
                return response.json();
            })
            .then(result => { 
                // מיון וסינון המידע לפי תאריך
                const currentDate = new Date();
                const filteredData = result
                    .filter(ser => new Date(ser.dateTime) >= currentDate.setHours(0, 0, 0, 0))
                    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

                setData(filteredData);
            })
            .catch(error => { console.error('Error fetching data:', error); });
    }, []);

    return (
        <div className="show">
            {data.map((ser) => (
                <Meeting  
                    key={ser?.id} 
                    serviceName={ser?.serviceName} 
                    dateTime={ser?.dateTime}
                    clientName={ser?.clientName}
                    clientPhone={ser?.clientPhone}
                    clientEmail={ser?.clientEmail}
                />
            ))}
        </div>
    );
}
