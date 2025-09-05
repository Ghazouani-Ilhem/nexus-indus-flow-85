import { SuseioStyleHero } from "@/components/SuseioStyleHero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatMakesUsDifferent } from "@/components/WhatMakesUsDifferent";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Reveal } from "@/components/Reveal";
import { FloatingParticles } from "@/components/FloatingParticles";

export default function Page() {
  return (
    <main className="flex flex-col relative">
      <SuseioStyleHero />
      <div className="container mx-auto px-4 space-y-24 py-16 relative">
        <FloatingParticles count={15} />
        <Reveal delayMs={0}><WhatWeDo /></Reveal>
        <Reveal delayMs={100}><WhatMakesUsDifferent /></Reveal>
        <Reveal delayMs={150}><ServicesSection /></Reveal>
        <Reveal delayMs={200}><ClientsSection /></Reveal>
        <Reveal delayMs={250}><TestimonialsSection /></Reveal>
      </div>
    </main>
  );
}
