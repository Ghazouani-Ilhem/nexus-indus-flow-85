import { PageHero } from "@/components/PageHero";

export default function ResourcesPage() {
  return (
    <main className="container mx-auto px-4 py-0">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <PageHero
          badge="Learn and Explore"
          title="Resources"
          subtitle="documentation, case studies, webinars"
          description="Guides and insights for building reliable industrial systems."
        />
      </div>
      <div className="py-16">
        <p className="text-muted-foreground">Documentation, case studies, and webinars coming soon.</p>
      </div>
    </main>
  )
}

