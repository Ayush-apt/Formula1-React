import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

const footerLinks = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
      { title: 'Testimonials', href: '#testimonials' },
      { title: 'Integration', href: '/' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'About Us', href: '/about' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Services', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Brand', href: '/brand' },
      { title: 'Help', href: '/help' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'Facebook', href: '#' },
      { title: 'Instagram', href: '#' },
      { title: 'Youtube', href: '#' },
      { title: 'LinkedIn', href: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <footer
      className="
        relative
        w-full
        bg-black
        text-white
        border-t
        border-white/10
        rounded-t-[3rem]
        px-10
        py-16
        md:px-16
        md:py-20
        lg:px-20
      "
    >

      {/* Top Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          h-40
          w-[45%]

          rounded-full
          bg-white/[0.04]
          blur-3xl
        "
      />

      {/* Top Line */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          h-px
          w-[90%]

          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
        "
      />

      <div className="
        mx-auto
        max-w-[1400px]
      ">

        {/* Top Section */}
        <div
          className="
            flex
            flex-col
            gap-10

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >

          {/* Logo + Copyright */}
          <AnimatedContainer className="space-y-8">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-lg
                border
                border-white/30

                text-sm
                font-semibold
              "
            >
              F1
            </div>

            <p
              className="
                text-sm
                text-white/50
              "
            >
              © {new Date().getFullYear()} Formula 1. All rights reserved.
            </p>

          </AnimatedContainer>


          {/* Links */}
          <div
            className="
              grid
              w-full

              grid-cols-2
              gap-x-12
              gap-y-10

              md:grid-cols-4
              md:gap-x-16

              lg:max-w-[800px]
            "
          >

            {footerLinks.map((section, index) => (
              <AnimatedContainer
                key={section.label}
                delay={0.1 + index * 0.1}
              >

                <div>

                  <h3
                    className="
                      text-sm
                      font-medium
                      text-white
                    "
                  >
                    {section.label}
                  </h3>

                  <ul
                    className="
                      mt-5
                      space-y-3
                    "
                  >

                    {section.links.map((link) => (
                      <li key={link.title}>

                        <a
                          href={link.href}
                          className="
                            text-sm
                            text-white/50

                            transition-colors
                            duration-300

                            hover:text-white
                          "
                        >
                          {link.title}
                        </a>

                      </li>
                    ))}

                  </ul>

                </div>

              </AnimatedContainer>
            ))}

          </div>

        </div>

      </div>

    </footer>
  )
}


const AnimatedContainer = ({
  className,
  delay = 0.1,
  children,
}) => {

  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{
        filter: 'blur(4px)',
        translateY: -8,
        opacity: 0,
      }}
      whileInView={{
        filter: 'blur(0px)',
        translateY: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.8,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


export default Footer