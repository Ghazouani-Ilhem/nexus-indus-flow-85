import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Server, Monitor, Shield, ArrowRight, CheckCircle, Play } from "lucide-react";
import { useState } from "react";
const industry40Image = "/assets/enhanced-industry40-transformation.jpg";

const services = [
  {
    icon: Network,
    title: "SIOTH IT-OT Integration",
    description: "Scalable IoT platform for seamless IT-OT integration and intelligent data transformation.",
    features: ["Real-time Data", "Edge Computing", "Cloud Integration"]
  },
  {
    icon: Server,
    title: "OPC Products",
    description: "Industry-standard OPC UA solutions for secure industrial data exchange.",
    features: ["OPC UA Server", "Data Access", "Secure Communication"]
  },
  {
    icon: Monitor,
    title: "Remote Monitoring",
    description: "SCADA and dashboard solutions for complete operational visibility.",
    features: ["Real-time Dashboards", "Alarm Management", "Mobile Access"]
  },
  {
    icon: Shield,
    title: "Military Surveillance",
    description: "C4ISR solutions for advanced monitoring and device control.",
    features: ["Command & Control", "Intelligence Systems", "Surveillance"]
  }
];

export const EnhancedWhatWeDo = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="modern-section py-12 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="geometric-bg" />
      <div className="floating-shape top-24 right-24" style={{ animationDelay: '1s' }} />
      <div className="floating-shape bottom-40 left-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl glass-effect border border-accent/20 text-accent font-semibold mb-8 text-sm">
            <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-scale-pulse" />
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient-tech leading-tight">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Industry 4.0 solutions designed to transform your industrial operations.
          </p>
        </div>

        {/* Services Grid - Modern and Clean */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden ai-interface-card border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-glow hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-full h-full text-primary-foreground" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-3 h-3 rounded-full bg-accent animate-tech-pulse" />
                  </div>
                </div>
                
                <CardTitle className="text-xl font-display text-foreground group-hover:text-gradient-primary transition-all duration-300 mb-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
                
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{ transitionDelay: `${idx * 0.1}s` }}>
                      <CheckCircle className="w-4 h-4 text-accent mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ transitionDelay: `${idx * 0.1}s` }} />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group/btn border-accent/40 hover:border-accent/60 hover:bg-accent/10 text-foreground font-medium transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Visual Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-2xl border border-primary/20 hover:border-accent/30 transition-all duration-500 group hover:shadow-tech text-center hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary p-2 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-full h-full text-primary-foreground" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2 text-base">Connected Systems</h4>
              <p className="text-muted-foreground text-sm">Real-time integration across networks</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl border border-primary/20 hover:border-accent/30 transition-all duration-500 group hover:shadow-tech text-center hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-tech p-2 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-full h-full text-primary-foreground" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2 text-base">Smart Analytics</h4>
              <p className="text-muted-foreground text-sm">AI-powered insights</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl border border-primary/20 hover:border-accent/30 transition-all duration-500 group hover:shadow-tech text-center hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-cyber p-2 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-full h-full text-primary-foreground" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2 text-base">Secure Operations</h4>
              <p className="text-muted-foreground text-sm">Enterprise-grade security</p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-tech/20 rounded-2xl blur-xl" />
            <Button size="lg" className="relative bg-gradient-elegant hover:shadow-orange group border-0 px-8 py-4 text-primary-foreground font-semibold rounded-xl">
              <span className="relative z-10">Explore Our Solutions</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};