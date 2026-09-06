import React, { useState } from 'react'

const TeamCard = () => {

    const [rotation, setRotation] = useState({
        x: 0,
        y: 0
    })
    const [mousePosition, setMousePosition] = useState({
        x: 50,
        y: 50
    })

    const handleMouseMove = (e) => {

        const card = e.currentTarget

        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateY = ((x - centerX) / centerX) * 10
        const rotateX = ((centerY - y) / centerY) * 10

        setRotation({
            x: rotateX,
            y: rotateY
        })
          setMousePosition({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100
        })
    }

    const handleMouseLeave = () => {
        setRotation({
            x: 0,
            y: 0
        })
          setMousePosition({
            x: 50,
            y: 50
        })
    }

  return (
    <div>
        <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
        relative
        group

        flex flex-col
        justify-center items-center

        h-60 w-90
        bg-[#00A19B]
        rounded-2xl

        transition-transform
        duration-200
        ease-out

        [transform-style:preserve-3d]

        shadow-[0_10px_35px_rgba(0,161,155,0.30)]
        "
        style={{
            transform: `
            perspective(800px)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            `
        }}
        >

        {/* Team Logo */}
        <img
        className="
            h-20 w-20
            rounded-full
            border-2 border-white/40
            p-1
            [transform:translateZ(20px)]
        "
        src="https://i.pinimg.com/1200x/57/a4/50/57a45086257807913bbee3ace4922f37.jpg"
        alt="Mercedes"
        />

        {/* Team Name */}
        <h2
          className="
            mt-2
            text-2xl
            font-bold
            hover:underline
            [transform:translateZ(12px)]
          "
        >
          Mercedes
        </h2>


        {/* Drivers */}
        <div
        className="
            flex flex-row
            gap-5
            justify-center items-center
            mt-3
            [transform:translateZ(12px)]
        "
        >

          {/* George Russell */}
          <div className="flex items-center gap-2">

            <img
              className="
                h-6 w-6
                border-2 border-white
                rounded-full
              "
              src="https://i.pinimg.com/736x/d7/d0/41/d7d041eb12b37c510ea4cb73d0122a77.jpg"
              alt="George Russell"
            />

            <h3
            className="
                text-lg
                font-normal
                hover:underline
                cursor-pointer
            "
            >
                George <span className="font-medium">Russell</span>
            </h3>

          </div>


          {/* Driver Separator */}
          <div className="h-7 w-px bg-white/50" />


          {/* Kimi Antonelli */}
          <div className="flex items-center gap-2">

            <img
              className="
                h-6 w-6
                border-2 border-white
                rounded-full
              "
              src="https://i.pinimg.com/736x/11/16/f9/1116f9d030c685acf36dc3b90e7b510e.jpg"
              alt="Kimi Antonelli"
            />

            <h3
            className="
                text-lg
                font-normal
                hover:underline
                cursor-pointer
            "
            >
                Kimi <span className="font-medium">Antonelli</span>
            </h3>

          </div>

        </div>


        {/* Gradient Divider */}
        <div
        className="
            mt-3
            h-px
            w-[80%]
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            [transform:translateZ(8px)]
        "
        />

      </div>
    </div>
  )
}

export default TeamCard