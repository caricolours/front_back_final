import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ServicioProvider from './context/ServiciosContext.jsx'
import CarritoProvider from './context/CarritoContext.jsx'
import UserProvider from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <ServicioProvider>
     <UserProvider>
        <CarritoProvider>
          
            <App />
          
        </CarritoProvider>
        </UserProvider>
      </ServicioProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
