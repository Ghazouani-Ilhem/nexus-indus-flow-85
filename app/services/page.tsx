import { ServicesSection } from "@/components/ServicesSection";
import { WhatWeDo } from "@/components/WhatWeDo";
import { PageHero } from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-0">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <PageHero
          badge="Professional Services"
          title="Services"
          subtitle="for Industry 4.0 and OPC UA"
          description="From architecture to implementation, we deliver secure, scalable industrial solutions."
          ctaText="Explore Services"
        />
      </div>
      <div className="py-16 space-y-16">
        <WhatWeDo />
        <ServicesSection />
      </div>
    </main>
  )
}

