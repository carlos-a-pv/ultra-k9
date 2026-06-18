import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LogoStrip } from "@/components/logo-strip"
import { Benefits } from "@/components/benefits"
import { Product } from "@/components/product"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <LogoStrip />
        <Benefits />
        <Product />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
