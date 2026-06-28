
'use client'

import { Reveal } from '@/components/reveal'
import { motion } from 'framer-motion'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function About() {
  const heading =
    'THE NEXT WAR WILL NOT WAIT FOR HUMAN DECISIONS.'

  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-20 py-20 md:py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/Aboutbg.png"
          alt="Trinetra Aerospace"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[65vh] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="-mt-8 lg:-mt-12">
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className={`${rajdhani.className}
                max-w-2xl
                text-3xl
                font-bold
                uppercase
                leading-[1]
                tracking-[0.02em]
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-[4rem]
              `}
            >
              {heading.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="mr-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <Reveal delay={0.2}>
            <div className="max-w-[720px] rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl lg:ml-auto">
              <div className="inline-block">
                <p
                  className={`${rajdhani.className}
                    text-xl
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-transparent
                    bg-gradient-to-r
                    from-white
                    via-slate-200
                    to-white
                    bg-clip-text
                  `}
                >
                  WHY WE EXIST
                </p>

                <div className="mt-3 h-[3px] w-36 rounded-full bg-gradient-to-r from-zinc-400 via-gray-100 to-zinc-500 shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
              </div>

              <p className="mt-6 text-base leading-7 text-white/80">
                India’s borders face a new reality. A single low-cost drone can threaten military assets worth millions. Drone swarms, electronic warfare, and GPS-denied environments are redefining modern conflict.
              </p>

              <p className="mt-4 text-base leading-7 text-white/80">
                When communications are disrupted and navigation signals are contested, autonomous systems that can detect, decide, and act independently become mission-critical.
              </p>

              <p className="mt-4 text-base leading-7 text-white/80">
                Winning the next war requires autonomous systems that operate faster than human command and remain resilient in contested electronic environments.
              </p>

              <p className="mt-4 text-base leading-7 text-white/80">
                Trinetra builds indigenous autonomous aerial systems with integrated decision intelligence, engineered for every terrain India must defend.
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <p className="mt-5 text-base font-medium italic text-white/90">
                “The nation that controls its autonomous systems controls its future.”
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

