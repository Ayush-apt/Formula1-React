import React from 'react'
import teams from './drivers.js'
import DriverCard from './DriverCard'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const DriverGrid = () => {

    const previewDrivers = teams
    .flatMap((team) =>
      team.drivers.map((driver) => ({
        team,
        driver,
      }))
    )
    .slice(0, 4)

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
            {previewDrivers.map(({ team, driver }) => (
            <DriverCard
                key={driver.name}
                team={team}
                driver={driver}
            />
            ))}
        </div>

        <div
        className="
            relative
            -mt-16
            h-30
            bg-gradient-to-b
            from-transparent
            via-white/70
            to-white
        "
        />
        
        <div
        className="
            flex
            justify-center
        "
        >
            
        <Link
        to="/drivers"
            className="
                group
                flex flex-col
                mb-10
                justify-center items-center
                text-black
                hover:text-gray-600
                transition-all duration-200
            "
            >
            <div
                className="
                text-3xl
                font-medium
                "
            >
                See More
            </div>

            <ChevronDown
                className="
                w-8 h-8
                transition-transform duration-300
                group-hover:translate-y-1
                "
            />
            </Link>
        </div>
    </div>
  )
}

export default DriverGrid
