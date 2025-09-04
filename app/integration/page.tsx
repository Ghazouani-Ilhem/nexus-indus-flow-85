import { EnhancedClientsSection } from "@/components/EnhancedClientsSection";
import { EnhancedWhatWeDo } from "@/components/EnhancedWhatWeDo";
import { ServicesSection } from "@/components/ServicesSection";

export default function IntegrationPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      <div>
        <h1 className="text-3xl font-bold mb-6">IT-OT Integration</h1>
        <p className="text-muted-foreground">Bridge operational technology and information technology securely and at scale.</p>
      </div>
      <EnhancedWhatWeDo />
      <EnhancedClientsSection />
      <ServicesSection />
    </main>
  )
}

