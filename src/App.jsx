import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import Driver from './components/Driver/Driver.jsx'
import Drivers from './components/Pages/Drivers.jsx'

const App = () => {
  return (
    <div >

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/drivers"
          element={<Drivers />}
        />

      </Routes>
    </div>
  )
}

export default App
