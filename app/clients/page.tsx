import { ClientsSection } from "@/components/ClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PageHero } from "@/components/PageHero";

export default function ClientsPage() {
  return (
    <main className="container mx-auto px-4 py-0 space-y-16">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <PageHero
          badge="Trusted Worldwide"
          title="Our Clients"
          subtitle="leading manufacturers and enterprises"
          description="We partner with global organizations to deliver reliable and secure industrial solutions."
        />
      </div>
      <ClientsSection />
      <TestimonialsSection />
    </main>
  )
}

