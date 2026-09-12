import React from 'react'
import Team from '../Team/Team'

const Teams = () => {
  return (
    <div>
      <section
      id="teams"
      className="
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

        <Team />

      </section>
    </div>
  )
}

export default Teams
