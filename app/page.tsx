import { SuseioStyleHero } from "@/components/SuseioStyleHero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatMakesUsDifferent } from "@/components/WhatMakesUsDifferent";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Reveal } from "@/components/Reveal";

export default function Page() {
  return (
    <main className="flex flex-col relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <SuseioStyleHero />
      <div className="container mx-auto px-4 space-y-24 py-16 relative z-10">
        <Reveal delayMs={0}><WhatWeDo /></Reveal>
        <Reveal delayMs={100}><WhatMakesUsDifferent /></Reveal>
        <Reveal delayMs={150}><ServicesSection /></Reveal>
        <Reveal delayMs={200}><ClientsSection /></Reveal>
        <Reveal delayMs={250}><TestimonialsSection /></Reveal>
      </div>
    </main>
  );
}
