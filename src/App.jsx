import React from 'react'
import Home from './components/Home/Home.jsx'

const App = () => {
  return (
    <div >
      <Home />
      <div className="h-[2000px]">
        <h1 className="pt-40 text-center text-4xl">
          Scroll down
        </h1>
      </div>
    </div>
  )
}

export default App
