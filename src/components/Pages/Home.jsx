import React, { useState, useEffect } from 'react'
import Slideshow from "../Home/Slideshow";
import Driver from '../Driver/Driver';
import Top from '../Home/Top';
import Teams from './Teams';

const Home = () => {

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight

      const currentScroll = window.scrollY

      const progress = scrollable > 0
        ? currentScroll / scrollable
        : 0

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
        <Top />
        <Slideshow />
        <Driver />


        <div className="h-screen">

        <div
          className="
            sticky
            top-0
            h-screen
            bg-black
            text-white
            flex
            items-center
            justify-center
            overflow-hidden
          "
          style={{
            transform: `translateY(${100 - scrollProgress * 100}%)`
          }}
        >
          <Teams />
        </div>

        </div>
    </div>
  )
}

export default Home
