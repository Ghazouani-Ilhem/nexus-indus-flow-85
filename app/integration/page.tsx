import { EnhancedClientsSection } from "@/components/EnhancedClientsSection";
import { EnhancedWhatWeDo } from "@/components/EnhancedWhatWeDo";
import { ServicesSection } from "@/components/ServicesSection";
import { PageHero } from "@/components/PageHero";

export default function IntegrationPage() {
  return (
    <main className="container mx-auto px-4 py-0 space-y-16">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <PageHero
          badge="Bridge IT and OT"
          title="IT-OT Integration"
          subtitle="secure, scalable, and reliable"
          description="Connect systems, standardize data, and enable real-time operations across your enterprise."
          ctaText="Talk to an Expert"
        />
      </div>
      <EnhancedWhatWeDo />
      <EnhancedClientsSection />
      <ServicesSection />
    </main>
  )
}

