import React, {useState, useEffect} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "The Monégasque Masterclass",
    description:
      "Charles Leclerc conquered the streets of Monte Carlo, mastering tight corners and immense pressure to secure a legendary home victory.",
    image: "https://i.pinimg.com/1200x/23/35/42/2335429d8774ad233d05277be4b859ae.jpg",
  },
  {
    title: "The Silverstone Redemption",
    description:
      "Lewis Hamilton snapped a 945-day winless streak at his home circuit, weeping with joy after an emotional, rain-slicked triumph.",
    image: "https://images.ctfassets.net/1fvlg6xqnm65/LyxmaAic4xtBIeoCkNfMh/e4e13df83821df9119b6f91bc9c49f2d/M448377.jpg?w=1920&q=75&fm=webp",
  },
  {
    title: "The Breakthrough in Sunshine State",
    description:
      "Lando Norris capitalised on a perfect safety car window to effortlessly cruise past Max Verstappen and claim his long-awaited maiden victory.",
    image: "https://images.ctfassets.net/gy95mqeyjg28/2oaie5XTOOA5ICjRfxKazg/dd3e0aa1dbca2cb95a7df6d376d52d67/GP2406_164045_67A3339.jpg?w=1920&q=75&fm=webp",
  },
  {
    title: "The Prodigy's Perfect Debut",
    description:
      "Max Verstappen rewrote the history books as an 18-year-old, fending off absolute icons to become F1’s youngest-ever race winner.",
    image: "https://i.pinimg.com/1200x/e9/32/fa/e932fa04fa6e1c1f0fd34fc2a3375bd7.jpg",
  },
  {
    title: "The Miracle of Interlagos",
    description:
      "Lewis Hamilton fought a rain-drenched battlefield, performing a heart-stopping final-corner overtake to snatch his first World Championship title.",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/141124192839-hamilton-win-brazil.jpg?q=w_2576,h_1708,x_0,y_0,c_fill",
  },
]

const Slideshow = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (isHovered) return

    const timer = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentSlide, isHovered])

  return (
    <div className="flex flex-row justify-center items-center pt-22">

      <ChevronLeft
        className="
          w-13 h-auto
          p-2
          mr-8
          rounded-full
          border-2 border-gray-200
          bg-white
          shadow-[0_4px_14px_rgba(0,0,0,0.18)]
          hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)]
          hover:bg-gray-100
          active:bg-gray-300
          active:scale-90
          transition-all duration-300
          cursor-pointer
        "
        onClick={prevSlide}
      />

    <div
      className={`
        relative
        w-[85%]
        h-80

        sm:h-96
        md:h-105
        lg:h-115
        rounded-4xl
        bg-black
        overflow-hidden
        shadow-[0_8px_35px_rgba(0,0,0,0.40)]
        hover:shadow-[0_12px_45px_rgba(0,0,0,0.50)]
        transition-all duration-500
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        >
          {/* Subtle gradient overlay to ensure text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
          
          <div className="
            absolute
            bottom-6 left-6 right-6
            sm:bottom-8 sm:left-8 sm:right-8
            md:bottom-10 md:left-10 md:right-10
            lg:bottom-12 lg:left-12 lg:right-12
            text-white
          ">
            <h2 className="
              mb-3
              text-2xl sm:text-3xl md:text-4xl
              font-bold
            ">
              {slide.title}
            </h2>
            <p className="
              max-w-xl
              text-sm sm:text-base md:text-lg
              font-normal
            ">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      </div>

      <ChevronRight
        className="
          w-13 h-auto
          p-2
          ml-8
          rounded-full
          border-2 border-gray-200
          bg-white
          shadow-[0_4px_14px_rgba(0,0,0,0.18)]
          hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)]
          hover:bg-gray-100
          active:bg-gray-300
          active:scale-90
          transition-all duration-300
          cursor-pointer
        "
        onClick={nextSlide}
      />

    </div>
  )
}

export default Slideshow