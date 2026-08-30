import React, {useState, useEffect} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { hover } from 'framer-motion'

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
  const [previousSlide, setPreviousSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const prevSlide = () => {
    if (isTransitioning) return
    
    setPreviousSlide(currentSlide)
    setIsTransitioning(true)
    
    setTimeout(() => {
      if (currentSlide === 0) {
        setCurrentSlide(slides.length - 1)
      } else {
        setCurrentSlide(currentSlide - 1)
      }
      
      setIsTransitioning(false)
    }, 500)
  }
  
  const nextSlide = () => {
  if (isTransitioning) return

  setPreviousSlide(currentSlide)
  setIsTransitioning(true)

    setTimeout(() => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide + 1)
      }

      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {

    if (isHovered) return

    const timer = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      clearTimeout(timer)
    }

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
          transition-shadow duration-300
        "
        onClick={prevSlide}
      />

    <div
      className={`
        relative
        w-[80%] h-115
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
      <div
        className="
          absolute inset-0
          bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[previousSlide].image})`
        }}
        />

      <div
        className={`
          absolute inset-0
          bg-cover bg-center
          transition-opacity duration-500
          ${isTransitioning ? "opacity-0" : "opacity-100"}
        `}
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`
        }}
      />
      
      <div className="absolute bottom-12 left-12 text-white">

        <h2 className="mb-6 text-4xl font-bold">
          {slides[currentSlide].title}
        </h2>

        <p className="max-w-xl text-lg font-normal">
          {slides[currentSlide].description}
        </p>

      </div>

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
          transition-shadow duration-300
        "
        onClick={nextSlide}
      />

    </div>
  )
}

export default Slideshow