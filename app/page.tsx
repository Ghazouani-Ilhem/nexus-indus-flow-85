import { HeroSection } from "@/components/HeroSection";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatMakesUsDifferent } from "@/components/WhatMakesUsDifferent";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <div className="container mx-auto px-4 space-y-24 py-16">
        <WhatWeDo />
        <WhatMakesUsDifferent />
        <ServicesSection />
        <ClientsSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}
