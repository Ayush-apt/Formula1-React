import React from 'react'
import Slideshow from "../Home/Slideshow"
import Driver from '../Driver/Driver'
import Top from '../Home/Top'
import Teams from './Teams'

const Home = () => {

  return (
    <div>

      <Top />

      <Slideshow />

      <Driver />

      <section className="
        bg-black
        text-white
        py-20
      ">

        <div className="
          flex
          flex-col
          items-center
          justify-center
          mb-12
        ">

          <h1 className="
            text-5xl
            font-bold
            underline
            underline-offset-8
          ">
            TEAMS
          </h1>

          <div className="
            mt-8
            h-px
            w-[80%]
            bg-gradient-to-r
            from-transparent
            via-gray-600
            to-transparent
          " />

        </div>

        <Teams />

      </section>

    </div>
  )
}

export default Home