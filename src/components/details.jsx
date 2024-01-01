import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import AppStore from "./classes/appStore";


export default function Details() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8787/businessData')
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok'); }
                return response.json();
            })
            .then(result => { setData(result); })
            .catch(error => { console.error('Error fetching data:', error); });
    }, []);

    return (
        <div className="details-container">
            <div className="details-content">
                <img className="details-logo" src={data?.logo} alt="Logo" />
              
                    <div className="details-item">{data?.name}</div>
                    <div className="details-item">{data?.address}</div>
                    <div className="details-item">{data?.phone}</div>
                    <div className="details-item">{data?.owner}</div>
                    <div className="details-description">{data?.description}</div>
                
            </div>

            {AppStore.getIsLogin &&
                <Button type="submit" onClick={() => AppStore.setIsEditData(true)} color="success">
                    Update
                </Button>
            }
        </div>
    );
}
