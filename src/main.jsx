import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import BusinessUser from "./components/businessUser.jsx"
import BusinessAdmin from "./components/businessAdmin.jsx"
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import Login from './components/login.jsx'
import ShowService from './components/services/showService.jsx'
import ShowMeeting from "./components/meeting/showMeeting.jsx"
import AddMeeting from "./components/meeting/addMeeting.jsx"
import AddService from './components/services/addService.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <BusinessUser></BusinessUser>,
    errorElement: <div>error contants</div>
  },
  {
    path: '/admin',
    element: <BusinessAdmin />,
    errorElement: <div>error contants</div>,
    children: [  
      {
        path: 'services',
        element: <ShowService></ShowService>,
        errorElement: <div>error contant not found</div>        
      },
      {
        path: 'meetings',
        element: <ShowMeeting></ShowMeeting>,
        errorElement: <div>error contant not found</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

