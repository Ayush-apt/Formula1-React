import React from 'react'
import TeamCard from './TeamCard'
import teams from '../Driver/drivers'

const Team = () => {
  return (
    <div className="
      grid
      grid-cols-2
      gap-10
      justify-items-center
    ">

      {teams.map((team, index) => (
        <div
          key={team.team}
          className={
            index === teams.length - 1
              ? "col-span-2"
              : ""
          }
        >
          <TeamCard
            team={team}
          />
        </div>
      ))}

    </div>
  )
}

export default Team