'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Careers', href: '#careers' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setOpen(false)

    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[95%] items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavigation(e, '#home')}
            aria-label="Trinetra Aerospace Home"
            className="shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/Final%20(1).png"
              alt="Trinetra Aerospace"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="ml-10 hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
className="group relative py-2 text-[14px] font-bold uppercase tracking-[0.18em] text-neutral-600 transition-colors duration-300 hover:text-black"              >
                <span className="transition-all duration-300 group-hover:-translate-y-[1px]">
                  {link.label}
                </span>

                {/* Underline */}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, '#contact')}
            className="hidden rounded-full bg-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-neutral-800 lg:inline-flex"
          >
            Get In Touch
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center rounded-full border border-neutral-300 p-3 transition-all duration-300 hover:bg-neutral-100 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="border-t border-neutral-200 bg-white px-6 py-6">

          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-700 transition-colors duration-300 hover:text-black"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavigation(e, '#contact')}
              className="rounded-full bg-black px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white"
            >
              Get In Touch
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}