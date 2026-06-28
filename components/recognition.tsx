import { Award, BadgeCheck, Handshake, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    icon: Award,
    title: 'Awards',
    text: 'Recognized for excellence in autonomous systems and aerospace engineering.',
    meta: '12+ honors',
  },
  {
    icon: BadgeCheck,
    title: 'Certifications',
    text: 'Compliant with international aviation, safety, and data security standards.',
    meta: 'ISO · DGCA · BVLOS',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    text: 'Collaborating with defense, energy, and infrastructure leaders worldwide.',
    meta: '20+ partners',
  },
  {
    icon: Rocket,
    title: 'Innovation Milestones',
    text: 'Pioneering AI flight autonomy, edge analytics, and swarm coordination.',
    meta: '30+ patents',
  },
]

export function Recognition() {
  return (
    <section
      id="recognition"
      className="section-px scroll-mt-20 bg-accent py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Recognition
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl lg:text-[2.75rem]">
            Trusted at the highest levels
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-background p-8">
                <item.icon className="h-6 w-6 text-foreground" />
                <h3 className="mt-6 font-heading text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  {item.meta}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
