import React from 'react'
import TeamCard from './TeamCard'
import teams from '../Driver/drivers'

const Team = () => {
  return (
    <div className="
      grid
      grid-cols-2
      gap-
      justify-items-center
    ">
      {teams.map((team) => (
        <TeamCard
          key={team.team}
          team={team}
        />
      ))}
    </div>
  )
}

export default Team
