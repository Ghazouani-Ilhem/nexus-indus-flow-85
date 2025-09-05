import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-0">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <PageHero
          badge="Get in Touch"
          title="Contact"
          subtitle="we'd love to hear from you"
          description="Reach us at contact@integrationobjects.com"
          ctaText="Send a Message"
        />
      </div>
      <div className="py-16">
        <p className="text-muted-foreground">Reach us at contact@integrationobjects.com</p>
      </div>
    </main>
  )
}

