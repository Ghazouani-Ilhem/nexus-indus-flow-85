import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Server, Monitor, Shield, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    icon: Network,
    title: "SIOTH® IT-OT Integration",
    description: "Seamless, secure, and scalable data integration across plants and enterprise systems.",
    image: "/placeholder.svg"
  },
  {
    icon: Server,
    title: "OPC UA Products",
    description: "OPC UA wrappers, servers, and toolkits enabling reliable, interoperable connectivity.",
    image: "/placeholder.svg"
  },
  {
    icon: Monitor,
    title: "Manufacturing Operations Management",
    description: "Measure and control production activities to maximize performance and quality.",
    image: "/placeholder.svg"
  },
  {
    icon: Shield,
    title: "Industrial Cybersecurity",
    description: "Protect control systems and secure IT-OT integration with compliant architectures.",
    image: "/placeholder.svg"
  }
];

export const WhatWeDo = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Capabilities"
          title="What We Do"
          subtitle="Systems integration, OPC UA connectivity, MOM, and cybersecurity for Industry 4.0"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative border border-border hover:border-primary/30 transition-all duration-500 rounded-2xl shadow-card hover:shadow-elegant hover:scale-105 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500" style={{ animationDelay: '1s' }} />
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                <CardTitle className="text-lg font-display text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group/btn hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};