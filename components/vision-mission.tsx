'use client'

import { motion } from 'framer-motion'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function VisionMission() {
  return (
    <section
      id="vision"
      className="scroll-mt-20 bg-white py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="space-y-14">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-3xl"
          >
            <h2
              className={`${rajdhani.className}
                text-4xl
                font-bold
                uppercase
                leading-none
                tracking-tight
                text-zinc-900
                md:text-5xl
                lg:text-6xl
              `}
            >
            VISION
            </h2>

            <div className="mt-4 h-[4px] w-28 rounded-full bg-gradient-to-r from-black to-zinc-400" />

            <p className="mt-8 text-lg leading-relaxed text-zinc-600 md:text-xl">
              To make India the world's most trusted developer and exporter of autonomous aerial systems-from frontline defence, counter-drone defence, and space-defence communication to critical infrastructure intelligence-by 2047.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="ml-auto max-w-3xl text-right"
          >
            <h2
              className={`${rajdhani.className}
                text-4xl
                font-bold
                uppercase
                leading-none
                tracking-tight
                text-zinc-900
                md:text-5xl
                lg:text-6xl
              `}
            >
             MISSION
            </h2>

            <div className="ml-auto mt-4 h-[4px] w-28 rounded-full bg-gradient-to-r from-zinc-400 to-black" />

            <p className="mt-8 text-lg leading-relaxed text-zinc-600 md:text-xl">
              To design, build, and field indigenous autonomous systems engineered for every operational environment validating national defense capabilities with the Indian Armed Forces, and delivering critical infrastructure intelligence across India's most essential operations,built for export to strategic partner nations.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}