import  React ,{ useEffect } from 'react'
import teams from '../Driver/drivers'
import DriverCard from '../Driver/DriverCard'
import Top from '../Home/Top'
import DriverTop from '../Driver/DriverTop'

const Drivers = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
  return (
    <div>

        <Top />
        <DriverTop />

        <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            mt-20
            mb-10
            gap-20
            w-fit
            mx-auto
        "
        >
            {teams.map((team) =>
                team.drivers.map((driver) => (
                    <DriverCard
                    key={driver.name}
                    team={team}
                    driver={driver}
                    />
                ))
            )}
        </div>

        <div
        className="
            h-px
            w-[80%]
            mx-auto
            my-10
            bg-gradient-to-r
            from-transparent
            via-gray-600
            to-transparent
        "
        />
    </div>
  )
}

export default Drivers