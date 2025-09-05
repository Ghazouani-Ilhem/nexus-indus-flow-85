import { EnhancedWhatWeDo } from "@/components/EnhancedWhatWeDo";
import { EnhancedWhatMakesUsDifferent } from "@/components/EnhancedWhatMakesUsDifferent";
import { PageHero } from "@/components/PageHero";

export default function SolutionsPage() {
  return (
    <main className="container mx-auto px-4 py-0 space-y-16">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <PageHero
          badge="End-to-end Offerings"
          title="Solutions"
          subtitle="OPC UA, Integration, and AI"
          description="Modular, secure, and scalable building blocks for Industry 4.0."
          ctaText="Explore Solutions"
        />
      </div>
      <EnhancedWhatWeDo />
      <EnhancedWhatMakesUsDifferent />
    </main>
  )
}

