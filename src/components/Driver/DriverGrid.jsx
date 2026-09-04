import React from 'react'
import teams from './drivers.js'
import DriverCard from './DriverCard'

const DriverGrid = () => {
  return (
    <div>
        <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-20
            w-fit
            mx-auto
        "
        >
            {teams.map((team) => {
                return team.drivers.map((driver) => {
                    return (
                    <DriverCard
                        key={driver.name}
                        team={team}
                        driver={driver}
                    />
                    )
                })
            })}
        </div>
    </div>
  )
}

export default DriverGrid
