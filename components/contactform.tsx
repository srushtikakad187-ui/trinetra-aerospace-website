'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    const form = e.currentTarget

    setLoading(true)

    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (
        form.elements.namedItem('message') as HTMLTextAreaElement
      ).value,
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    setLoading(false)

    if (response.ok) {
      setSubmitted(true)
      form.reset()

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } else {
      alert('Failed to send message.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
  relative
  overflow-hidden
  rounded-[36px]
  border
  border-white/10
  bg-gradient-to-br
  from-[#050505]
  via-[#0E0E10]
  to-[#050505]
  p-12
  backdrop-blur-2xl
  shadow-[0_30px_90px_rgba(0,0,0,0.35)]
"
    >
      {/* Decorative Effects */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className={`relative z-10 ${rajdhani.className}`}>

        {/* Heading */}

        <div
          className={`${rajdhani.className}
            mb-10
            flex
            items-center
            gap-4
            text-[22px]
            font-bold
            uppercase
            tracking-[0.45em]
            text-white
          `}
        >
          Enquiry Form

          <span className="h-[2px] flex-1 bg-white/20" />
        </div>

        {/* Row 1 */}

        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            id="name"
            label="Full Name"
            placeholder=""
          />

          <Field
            id="email"
            label="Email"
            type="email"
            placeholder=""
          />
        </div>

        {/* Row 2 */}

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field
            id="company"
            label="ministry/unit/regiment"
            placeholder=""
          />

          <Field
            id="phone"
            label="Phone"
            placeholder=""
          />
        </div>

        {/* Message */}

        <div className="mt-6">
          <label
  className="
    mb-4
    block
    text-center
    text-[16px]
    font-bold
    uppercase
    tracking-[0.35em]
    text-white
  "
>
  Message
</label>

          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Describe your operational requirements..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-[#161719]
              px-6
              py-5
              text-[20px]
              font-medium
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-[#8E8E93]
              focus:border-white/30
              focus:bg-[#1B1C1F]
              focus:shadow-[0_0_0_3px_rgba(255,255,255,0.08)]
            "
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className={`${rajdhani.className}
            group
            relative
            mt-8
            flex
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-white
            px-8
            py-5
            text-sm
            font-bold
            uppercase
            tracking-[0.45em]
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_20px_45px_rgba(255,255,255,0.15)]
          `}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

          <span className="relative z-10 flex items-center gap-2">
            {loading ? (
              'Sending...'
            ) : submitted ? (
              <>
                <Check className="h-5 w-5" />
                Message Sent
              </>
            ) : (
              'Send Message'
            )}
          </span>
        </button>

      </div>
    </form>
  )
}

function Field({
  id,
  label,
  type = 'text',
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        className={`${rajdhani.className}
          mb-4
          block
          text-center
          text-[16px]
          font-bold
          uppercase
          tracking-[0.18em]
          leading-relaxed
          text-white
        `}
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#161719]
          px-6
          py-5
          text-[17px]
          font-medium
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-[#8E8E93]
          focus:border-white/30
          focus:bg-[#1B1C1F]
          focus:shadow-[0_0_0_3px_rgba(255,255,255,0.08)]
        "
      />
    </div>
  )
}