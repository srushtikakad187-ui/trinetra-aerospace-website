'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function CareerForm() {
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault()

  const form = e.currentTarget

  setLoading(true)

  const formData = new FormData(form)

  try {
    const response = await fetch('/api/careers', {
      method: 'POST',
      body: formData,
    })

    setLoading(false)

    if (response.ok) {
      form.reset()

      setShowSuccess(true)

      setTimeout(() => {
        setShowSuccess(false)
      }, 4000)
    } else {
      alert('Something went wrong.')
    }
  } catch (error) {
    setLoading(false)
    alert('Network error')
  }
}
  return (
    <>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
            transition={{ duration: 0.4 }}
            className="fixed right-6 top-24 z-[9999]"
          >
            <div className="flex w-[340px] items-start gap-3 rounded-2xl border border-emerald-500/30 bg-zinc-900/95 px-5 py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

              <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-emerald-400" />

              <div>
                <p className="text-sm font-semibold text-white">
                  Application Submitted Successfully
                </p>

                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Thank you for applying to Trinetra Aerospace.
                  Our team will review your application and
                  contact you if your profile matches our
                  requirements.
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="
          mx-auto
          mt-8
          max-w-xl
          rounded-[28px]
          border
          border-white/10
          bg-black/40
          p-4
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          md:p-5
        "
      >
        <div className="grid gap-4 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Full Name
            </label>

            <input
              name="fullName"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Phone Number
            </label>

            <input
              name="phone"
              required
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Position
            </label>

            <select
              name="position"
              required
              className="w-full rounded-xl border border-white/10 bg-[#0d0f14] px-4 py-3 text-sm text-white outline-none focus:border-white/30"
            >
              <option value="">Select Position</option>
              <option>AI/ML Intern</option>
              <option>Electronics Engineer</option>
              <option>Web Developer</option>
              <option>Business Analyst</option>
              <option>Social Media</option>
              <option>Mechanical Design</option>
            </select>
          </div>

        </div>

        <div className="mt-4">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">
            LinkedIn Profile
          </label>

          <input
            name="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-white/30"
          />
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">
            Cover Letter
          </label>

          <textarea
            rows={4}
            name="coverLetter"
            placeholder="Tell us about yourself..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-white/30"
          />
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Upload Resume (PDF)
          </label>

          <input
  type="file"
  name="resume"
  className="block w-full text-sm text-white"
/>
        </div>

        <button
          disabled={loading}
          className="
            mt-8
            rounded-full
            bg-white
            px-7
            py-3
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-black
            transition-all
            duration-300
            hover:scale-105
            disabled:opacity-50
          "
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </motion.form>
    </>
  )
}