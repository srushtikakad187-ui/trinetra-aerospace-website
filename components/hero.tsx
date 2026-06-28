'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/Final.mp4" type="video/mp4" />
        </video>

        {/* Premium Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl pt-28 md:pt-0">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`${rajdhani.className}
  text-4xl
  font-bold
  uppercase
  leading-[1]
  tracking-[0.02em]
  text-white
  sm:text-5xl
  md:text-[3.8rem]
  lg:text-[4rem]
`}
          >
            Engineered in India.
            <br />
            Built for Every Mission.
          </motion.h1>

          {/* Sub Heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              mt-8
              max-w-2xl
              text-base
              leading-relaxed
              text-white/80
              sm:text-lg
              md:text-xl
            "
          >
            India's indigenous autonomous aerial systems-from
            counter UAS and border surveillance to critical
            infrastructure protection.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.03]
              "
            >
              Initiate the Discussion

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              mt-10
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/60
              sm:text-xs
            "
          >
            Conceived in India. Engineered for India. Built for the World.
          </motion.p>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          md:flex
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="h-12 w-px bg-gradient-to-b from-white/80 to-transparent"
        />
      </motion.div>
    </section>
  )
}