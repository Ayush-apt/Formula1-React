import React from 'react'
import Home from './components/Home/Home.jsx'
import Driver from './components/Driver/Driver.jsx'

const App = () => {
  return (
    <div >
      <Home />
      <Driver />
      <div className="h-[2000px]">
        <h1 className="pt-70 text-center text-4xl">
          Scroll down
        </h1>
      </div>
    </div>
  )
}

export default App
