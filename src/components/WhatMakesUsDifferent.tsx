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
              className="text-center p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 shadow-card hover:shadow-elegant"
            >
              <div className="mb-6">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <h3 className="text-lg font-display font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};