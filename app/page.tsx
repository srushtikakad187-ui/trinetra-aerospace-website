import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { VisionMission } from '@/components/vision-mission'
import { Solutions } from '@/components/solutions'
import { Careers } from '@/components/careers'
import { Founders } from '@/components/founders'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />

      <main>
        <Hero />

        <About />

        <VisionMission />

        <Solutions />

        <Careers />

        {/* Founders Section */}
        <Founders />

        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}