import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import AppStore from "../classes/appStore"
import { Outlet, Link } from "react-router-dom"

// import EditIcon from '@mui/icons-material/Edit';
import Service from "./service ";
import AddService from "./addService";
import AddMeeting from "../meeting/addMeeting";

export default function ShowService() {
    const [open, setOpen] = useState(false);
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

    // פונקציה לפתיחת חלון הוספת פגישה
    const handleAddMeetingClick = () => {
        setIsAddingMeeting(true);
    };

    // פונקציה לסגירת חלון הוספת פגישה
    const handleAddMeetingClose = () => {
        setIsAddingMeeting(false);
    };

    return (<div >
        <div className="show">
            {data.map((ser) => <Service name={ser?.name} description={ser?.description}></Service>)}
        </div>

        {AppStore.getIsLogin ? <Button onClick={() => AppStore.setIsAddService(true)}
        >add service</Button>
            : <Button onClick={() => AppStore.setIsAddMeeting(true)}>add meeting</Button>}


        <Outlet />
    </div>)
}