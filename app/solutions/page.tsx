import { EnhancedWhatWeDo } from "@/components/EnhancedWhatWeDo";
import { EnhancedWhatMakesUsDifferent } from "@/components/EnhancedWhatMakesUsDifferent";

export default function SolutionsPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      <div>
        <h1 className="text-3xl font-bold mb-6">Solutions</h1>
        <p className="text-muted-foreground">End-to-end OPC UA, integration, and AI solutions.</p>
      </div>
      <EnhancedWhatWeDo />
      <EnhancedWhatMakesUsDifferent />
    </main>
  )
}

