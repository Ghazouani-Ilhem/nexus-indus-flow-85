import { ServicesSection } from "@/components/ServicesSection";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      <div>
        <h1 className="text-3xl font-bold mb-6">Services</h1>
        <p className="text-muted-foreground">Explore our professional services for Industry 4.0 and OPC UA.</p>
      </div>
      <WhatWeDo />
      <ServicesSection />
    </main>
  )
}

