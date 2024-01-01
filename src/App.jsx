import { useState } from 'react'
import AddMeeting from "./components/meeting/addMeeting"
import AddService from "./components/services/addService"
import Login from './components/login';
import Service from './components/services/service ';
import BusinessData from './components/businessData';
import ShowMeeting from './components/meeting/showMeeting'
import '@fontsource/inter';
import './App.css'
import Meeting from "./components/meeting/meeting"
import Details from './components/details';
import UpdateDetails from './components/updateDetails';
import ShowService from "./components/services/showService"
import AlertErorr from "./components/alertErorr"
import BusinessUser from './components/businessUser';
import BusinessAdmin from './components/businessAdmin';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      {/* <BusinessData></BusinessData> */}
      {/* <AddMeeting></AddMeeting> */}
      {/* <ShowMeeting></ShowMeeting> */}
      {/* <UpdateDetails></UpdateDetails> */}
      {/* <Meeting serviceName="birthday"
        dateTime="01.12.2003"
        clientName="pnini"
        clientPhone="0556765181"
        clientEmail="pnini0556765181@gmail.com"></Meeting>
      <Service name="New Born photos" description="I'm taking the baby to my stunning studio and together it's going to be fun!">
      </Service>
      <AddService></AddService> */}
      {/* <AlertErorr></AlertErorr> */}
      {/* <ShowService></ShowService> */}
      {/* <BusinessUser/> */}
      {/* <BusinessAdmin></BusinessAdmin> */}
    </div>
  )
}

export default App
