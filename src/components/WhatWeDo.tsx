import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Server, Monitor, Shield } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "SIOTH IT-OT Integration Platform",
    description: "A scalable and modular IoT platform for IT-OT integration, data exchange and transformation.",
    image: "/placeholder.svg"
  },
  {
    icon: Server,
    title: "OPC Products",
    description: "Ensure secure and reliable exchange of data.",
    image: "/placeholder.svg"
  },
  {
    icon: Monitor,
    title: "Remote Monitoring",
    description: "A single-window to your operations. SCADA & Dashboards all-in-one.",
    image: "/placeholder.svg"
  },
  {
    icon: Shield,
    title: "Military Surveillance",
    description: "C4ISR based solutions to act decisively, manage, monitor, and control device.",
    image: "/placeholder.svg"
  }
];

export const WhatWeDo = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for Industry 4.0 integration and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary p-4 shadow-glow">
                    <service.icon className="w-full h-full text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl font-display text-foreground">
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