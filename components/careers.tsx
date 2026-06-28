'use client'

import { motion } from 'framer-motion'
import { Rajdhani } from 'next/font/google'
import { CareerForm } from '@/components/careersform'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export function Careers() {
  return (
    <section
      id="careers"
      className="relative overflow-hidden scroll-mt-20 py-8 md:py-10"
    >
      <div className="absolute inset-0">
        <img
  src="/careersbg.png"
  alt="Careers Background"
  className="h-full w-full object-cover object-center brightness-100"
/>

<div className="absolute inset-0 bg-black/50" />

<div className="absolute inset-0 bg-gradient-to-b from-black/600 via-black/55 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <div className="-mt-10 text-center md:-mt-14">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className={`${rajdhani.className}
              text-base
              font-extrabold
              uppercase
              tracking-[0.6em]
              text-white
              md:text-lg
            `}
          >
            CAREERS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className={`${rajdhani.className}
              mt-4
              text-4xl
              font-bold
              uppercase
              leading-[0.9]
              text-white
              md:text-5xl
              lg:text-6xl
            `}
          >
            JOIN 
            <br />
            TRINETRA AEROSPACE
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="mx-auto mt-6 h-[3px] rounded-full bg-white"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            Every system we build protects a soldier, secures a border, or defends a nation. If that is the work you want to do, you belong here.
          </motion.p>

        </div>

        <div className="mt-8">
          <CareerForm />
        </div>

      </div>
    </section>
  )
}