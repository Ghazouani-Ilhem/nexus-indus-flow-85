import { Clock, Shield, Award, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const differentiators = [
  {
    icon: Clock,
    title: "Proven delivery and operational excellence",
    description: "Decades of successful deployments with measurable performance improvements."
  },
  {
    icon: Shield,
    title: "Robust products for a long-term investment",
    description: "Our solutions are built to last, providing reliable performance and value for years to come."
  },
  {
    icon: Award,
    title: "Standards-based and future-proof",
    description: "Built on OPC UA and best practices to ensure longevity and interoperability."
  },
  {
    icon: Users,
    title: "Deep IT-OT expertise",
    description: "From plant floor to cloud, spanning connectivity, analytics, and security."
  }
];

export const WhatMakesUsDifferent = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Why Partner With Us"
          title="What Makes Us Different"
          subtitle="Discover the key advantages that set us apart in the Industry 4.0 landscape"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-elegant hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/30 rounded-full group-hover:bg-accent/60 transition-colors duration-300" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-lg font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};