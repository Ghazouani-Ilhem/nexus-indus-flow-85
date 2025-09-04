import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-0">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <PageHero
          badge="Our Mission"
          title="About Us"
          subtitle="innovation in industrial automation"
          description="We build OPC UA, IT-OT integration, and Industry 4.0 solutions."
        />
      </div>
      <div className="py-16">
        <p className="text-muted-foreground">We build OPC UA, IT-OT integration, and Industry 4.0 solutions.</p>
      </div>
    </main>
  )
}

