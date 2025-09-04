import { ClientsSection } from "@/components/ClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function ClientsPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      <div>
        <h1 className="text-3xl font-bold mb-6">Our Clients</h1>
        <p className="text-muted-foreground">Trusted by industry leaders worldwide.</p>
      </div>
      <ClientsSection />
      <TestimonialsSection />
    </main>
  )
}

