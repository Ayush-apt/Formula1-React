import React from 'react'

const DriverCard = ({ team, driver }) => {
  return (
    <div>
      <div
        className="
          w-[350px]
          rounded-2xl
          overflow-hidden
          bg-[#010102]
          shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          transition-all duration-500
          hover:-translate-y-2
          hover:scale-102
          hover:shadow-[0_14px_35px_rgba(0,0,0,0.35)]
        "
      >

        <img
          className="
            block
            w-full
            h-[400px]
            object-cover
          "
          src={driver.image}
          alt={driver.name}
        />

        <div
          className="
            h-20
            px-3 py-2
            bg-[#010102]
            text-white
          "
        >
          <div className='flex justify-between items-center'>
            <div>
              <div className="flex items-center gap-2">

                <img
                  className="
                    h-6 w-6
                    rounded-full
                    border border-white/20
                  "
                  src={team.teamImage}
                  alt={team}
                />

                <h4
                  className="
                    text-sm
                    font-medium
                    text-white/70
                  "
                >
                  {team.team}
                </h4>

              </div>

              <div className="flex items-center gap-2 mt-2">

                <img
                  className="
                    h-6 w-6
                    rounded-full
                    border border-white/20
                  "
                  src={driver.flag}
                  alt={driver.nationality}
                />

                <h3
                  className="
                    text-xl
                    font-bold
                    tracking-wide
                  "
                >
                  {driver.name}
                </h3>

              </div>
            </div>

            <div className='text-3xl font-bold'>{driver.number}</div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default DriverCard
