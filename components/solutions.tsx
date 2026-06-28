'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const solutions = [
  {
    title: 'Defence & Security Operations',
    description:
      'We build and deliver autonomous aerial systems directly tailored to Indian Armed Forces operational requirements from Kamikaze , FPV platforms and payload-capable drones to surveillance and tactical reconnaissance systems. Every system is indigenously assembled, mission-configured, and delivered to specification.',
    image: '/images/border-surveillance.png',
    cta: 'Request a Capability Briefing',
  },
  {
    title: 'Critical Infrastructure & Public Safety',
    description:
      'We deploy autonomous aerial monitoring systems and real-time intelligence dashboards for government authorities, public safety agencies, and critical infrastructure operators including highway monitoring, railway surveillance, solar asset management, construction analytics, and crowd management for law enforcement. Our platforms integrate drone intelligence directly into existing command and control workflows.',
    image: '/images/infrastructure-inspection.png',
    cta: 'Request a Demo',
  },
]

export function Solutions() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section id="solutions" className="bg-[#F5F5F3] py-24">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p
            className={`${rajdhani.className}
              text-2xl
              font-extrabold
              uppercase
              tracking-[0.45em]
              text-zinc-900
              md:text-3xl
            `}
          >
            — OUR SOLUTIONS —
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                h-[500px]
                overflow-hidden
                rounded-[24px]
              "
            >
              {/* Background Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col p-9">

                {/* Push content to bottom */}
                <div className="mt-auto">

                  {/* Fixed height heading */}
                  <h3
                    className={`${rajdhani.className}
                      min-h-[90px]
                      text-2xl
                      font-bold
                      uppercase
                      leading-tight
                      text-white
                      md:text-3xl
                    `}
                  >
                    {solution.title}
                  </h3>

                  <div className="mt-4 h-[3px] w-14 rounded-full bg-white" />

                  <p className="mt-5 text-sm leading-relaxed text-white/85 md:text-base">
                    {solution.description}
                  </p>

                </div>

                {/* CTA Button always at bottom */}
                <button
                  onClick={scrollToContact}
                  className="
                    mt-auto
                    flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-black
                  "
                >
                  {solution.cta}
                  <ArrowRight size={16} />
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}