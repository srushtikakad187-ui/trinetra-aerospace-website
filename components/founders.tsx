'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const message = `
India is building. The defense ecosystem is stronger than it has
ever been and the world is watching. Trinetra exists to make sure
that when the world looks for counter-drone, aerospace intelligence,
and space-defense systems, they look to India first. This conviction
drives every decision at Trinetra: Build here, deploy for India, and
let India's trust be the proof that sells it to the world.
Atmanirbhar Bharat 2047 is not a deadline. It is a standard.
Trinetra is being built to meet it and exceed it on the global stage.
`

const words = message.trim().split(/\s+/)

export function Founders() {
  const pathname = usePathname()

  return (
    <section
      id="founders"
      key={pathname}
      className="bg-[#EFEFED] py-20"
    >
      <div className="mx-auto max-w-3xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#000205] md:text-4xl">
            Founder's Message
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#0B1F3A]" />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[28px] bg-[#F5F5F3] px-6 py-8 shadow-sm"
        >
          <div className="relative mx-auto max-w-2xl">

            {/* Opening Quote */}
            <span className="absolute left-0 top-0 font-['Cormorant_Garamond'] text-[58px] font-bold leading-none text-black">
              “
            </span>

            {/* Animated Paragraph */}
            <p
              className="
                pl-12
                pt-6
                text-left
                font-['Cormorant_Garamond']
                text-[clamp(18px,1.5vw,24px)]
                font-medium
                leading-[1.9]
                text-[#2B2B2B]
              "
            >
              {words.map((word, index) => (
                <motion.span
                  key={`${pathname}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 15,
                    filter: 'blur(8px)',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: 'easeOut',
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            {/* Closing Quote */}
            <div className="mt-4 text-right">
              <span className="font-['Cormorant_Garamond'] text-[55px] font-bold leading-none text-black">
                ”
              </span>
            </div>
          </div>

          {/* Founder Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-6 text-center"
          >
            <div className="mx-auto mb-4 h-[2px] w-16 bg-[#0B1F3A]" />

            <h3 className="text-2xl font-semibold text-[#111]">
              Aryan Surve
            </h3>

            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.35em] text-[#374151]">
              Founder & CEO, Trinetra Aerospace Technologies
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}