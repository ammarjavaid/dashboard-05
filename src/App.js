import React, { useState } from 'react'
import Layout from './layout/Layout'
import Sidebar from './layout/sidebar/Sidebar'
import Topbar from './layout/topbar/Topbar'
import Dashboard from "./pages/dashboard/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Riders from './pages/riders/Riders'
import Payment from './pages/payment/Payment'
import Learning from './pages/learning/Learning'
import FAQ from './pages/faq/FAQ'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

const App = () => {

const [open, setOpen] = useState(false)

const handle = ()=>{
  setOpen(!open)
}

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/riders" element={<Riders />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<h1> Page Not Found </h1>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App