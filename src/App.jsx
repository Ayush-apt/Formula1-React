import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import Drivers from './components/Pages/Drivers.jsx'
import Footer from './components/Pages/Footer.jsx'

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
