import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Server, Monitor, Shield } from "lucide-react";
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
              className="relative border border-border hover:border-primary/30 transition-colors duration-300 rounded-2xl shadow-card hover:shadow-elegant"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg font-display text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};