'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Rajdhani, Inter } from 'next/font/google'
import { ContactForm } from '@/components/contactform'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@trinetraaero.com',
    href: 'mailto:contact@trinetraaero.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91  7841955627',
    href: 'tel:+91 7841955627',
  },
  {
    icon: MapPin,
    label: 'Registered Address',
    value:
      'Gat No. 63, Fl. No. D-803, Defence Colony Co-Op, Haveli, Wagholi, Pune-412207',
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className={`${inter.className} scroll-mt-20 bg-[#EFEFED] pt-8 pb-20 md:pt-10 md:pb-28`}
    >
      <div className="mx-auto max-w-6xl px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="-mt-8 mb-14 text-center md:-mt-10"
        >
          <div
            className={`${rajdhani.className}
              mb-5
              flex
              items-center
              justify-center
              gap-4
              text-sm
              font-extrabold
              uppercase
              tracking-[0.6em]
              text-[#2F2F2D]
            `}
          >
            <span
              className="h-px w-12"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #C8C8C4)',
              }}
            />

            

            <span
              className="h-px w-12"
              style={{
                background:
                  'linear-gradient(270deg, transparent, #C8C8C4)',
              }}
            />
          </div>

          <h2
            className={`${rajdhani.className}
              text-[clamp(34px,4vw,48px)]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.02em]
              text-[#111110]
            `}
          >
            LET&apos;S DISCUSS
            <br />

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(150deg, #5A5A58 0%, #9C9C9A 28%, #CECECE 48%, #A0A09E 65%, #5A5A58 100%)',
              }}
            >
              YOUR MISSION
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Details */}

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-14 self-start pt-10"
          >
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-5"
              >
                {/* Icon */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#111110] text-white shadow-lg">
                  <item.icon
                    className="h-5 w-5"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Text */}

                <div>
                  <p
                    className={`${rajdhani.className}
                      text-sm
                      font-extrabold
                      uppercase
                      tracking-[0.35em]
                      text-[#111110]
                    `}
                  >
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-[20px] font-normal leading-relaxed text-[#5A5A58] transition-colors hover:text-[#111110]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 max-w-md text-[20px] font-normal leading-relaxed text-[#5A5A58]">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}