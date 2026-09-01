import React from 'react'

const DriverCard = () => {
  return (
    <div>
        <div
        className="
          flex flex-row
          justify-center items-center
          gap-20
          w-[80%]
          mx-auto
        "
      >

        <div
          className="
            w-[350px]
            rounded-2xl
            overflow-hidden
            bg-[#010102]
            shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          "
        >

          <img
            className="
              block
              w-full
              h-[400px]
              object-cover
            "
            src="https://i.pinimg.com/736x/d7/d0/41/d7d041eb12b37c510ea4cb73d0122a77.jpg"
            alt="George Russell"
          />

          <div
            className="
              h-20
              px-3 py-2
              bg-[#010102]
              text-white
            "
          >

            <div className="flex items-center gap-2">

              <img
                className="
                  h-6 w-6
                  rounded-full
                  border border-white/20
                "
                src="https://i.pinimg.com/1200x/57/a4/50/57a45086257807913bbee3ace4922f37.jpg"
                alt="Mercedes"
              />

              <h4
                className="
                  text-sm
                  font-medium
                  text-white/70
                "
              >
                Mercedes
              </h4>

            </div>


            <div className="flex items-center gap-2 mt-2">

              <img
                className="
                  h-6 w-6
                  rounded-full
                  border border-white/20
                "
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png"
                alt="England"
              />

              <h3
                className="
                  text-xl
                  font-bold
                  tracking-wide
                "
              >
                George Russell
              </h3>

            </div>

          </div>

        </div>
        </div>
    </div>
  )
}

export default DriverCard
