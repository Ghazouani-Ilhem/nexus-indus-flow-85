import { Clock, Shield, Award, Users } from "lucide-react";

const differentiators = [
  {
    icon: Clock,
    title: "On-budget and timely project completion",
    description: "We deliver projects on time and within budget, ensuring your business objectives are met efficiently."
  },
  {
    icon: Shield,
    title: "Robust products for a long-term investment",
    description: "Our solutions are built to last, providing reliable performance and value for years to come."
  },
  {
    icon: Award,
    title: "Compliant with the latest cybersecurity standards",
    description: "All our products meet and exceed current cybersecurity requirements for industrial environments."
  },
  {
    icon: Users,
    title: "Expertise in deploying solutions for the entire IT-OT ecosystem",
    description: "Comprehensive knowledge across all aspects of industrial IT-OT integration and automation."
  }
];

export const WhatMakesUsDifferent = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            What Makes Us Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the key advantages that set us apart in the Industry 4.0 landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-glass border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary p-3 shadow-tech group-hover:animate-tech-pulse">
                  <item.icon className="w-full h-full text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};