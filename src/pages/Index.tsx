import { Header } from "@/components/Header";
import { ModernIndustry4Hero } from "@/components/ModernIndustry4Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { EnhancedWhatWeDo } from "@/components/EnhancedWhatWeDo";
import { EnhancedWhatMakesUsDifferent } from "@/components/EnhancedWhatMakesUsDifferent";
import { EnhancedClientsSection } from "@/components/EnhancedClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ModernIndustry4Hero />
        <ServicesSection />
        <EnhancedWhatWeDo />
        <EnhancedWhatMakesUsDifferent />
        <EnhancedClientsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
