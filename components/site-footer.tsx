
import { Rajdhani } from 'next/font/google'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
]

const socials = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/trinetra-aerospace-technologies-pvt-ltd/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/_trinetra_aerospace_?igsh=MWxiczduY2VjZzB3bw==',
  },
]
export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-20 text-white">
      <div className="mx-auto max-w-7xl px-8">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Company Info */}

          <div className="max-w-sm">

            <h2
              className={`${rajdhani.className}
                text-3xl
                font-bold
                uppercase
                tracking-[0.08em]
              `}
            >
              Trinetra
              <span className="font-normal text-white/50">
                {' '}Aerospace
              </span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Conceived in India. Engineered for India. Built for the World.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-white/70
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className={`${rajdhani.className}
                text-sm
                font-bold
                uppercase
                tracking-[0.35em]
                text-white
              `}
            >
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3
              className={`${rajdhani.className}
                text-sm
                font-bold
                uppercase
                tracking-[0.35em]
                text-white
              `}
            >
              Get In Touch
            </h3>

            <ul className="mt-7 space-y-5 text-sm text-white/60">

              <li>
                <a
                  href="mailto:contact@trinetraaerospace.com"
                  className="transition-colors hover:text-white"
                >
                  contact@trinetraaero.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+91 7841955627"
                  className="transition-colors hover:text-white"
                >
                 +91 7841955627
                </a>
              </li>

              <li className="leading-relaxed">
                Gat No. 63, Fl. No. D-803, Defence Colony Co-Op, 
                <br />
                Haveli, Wagholi, Pune-412207
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Trinetra Aerospace Technologies Pvt.Ltd.
            All Rights Reserved.
          </p>

          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </a>

        </div>

      </div>
    </footer>
  )
}