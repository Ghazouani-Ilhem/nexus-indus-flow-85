import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Network, 
  Database, 
  Brain, 
  Shield, 
  Zap, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";
const opcNetworkImage = "/assets/opc-ua-network.jpg";
const automationImage = "/assets/automation-dashboard.jpg";

const services = [
  {
    icon: Network,
    title: "OPC UA Solutions",
    description: "Industry-leading OPC UA servers and clients for seamless connectivity",
    features: ["Universal Server", "Data Access", "Historical Data"],
    badge: "Core Product"
  },
  {
    icon: Database,
    title: "IT-OT Integration",
    description: "Bridge operational technology with information systems",
    features: ["Real-time Data", "Cloud Integration", "Edge Computing"],
    badge: "Featured"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation powered by advanced AI algorithms",
    features: ["Predictive Analytics", "Anomaly Detection", "Process Optimization"],
    badge: "Innovation"
  },
  {
    icon: Shield,
    title: "Industrial Security",
    description: "Cybersecurity solutions for critical infrastructure",
    features: ["Secure Communication", "Access Control", "Threat Detection"],
    badge: "Security"
  }
];

export function ServicesSection() {
  return (
    <section id="integration" className="relative py-16 overflow-hidden bg-gradient-subtle">
      {/* Subtle Mesh Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-mesh)', opacity: 0.08 }} />

      <div className="container mx-auto relative">
        {/* Modern Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl glass-effect border border-accent/20 text-accent font-semibold mb-8 text-sm">
            <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-scale-pulse" />
            Our Solutions
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient-tech leading-tight">
            Complete Industry 4.0 <br className="hidden md:block" />Ecosystem
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Industrial automation solutions to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Enhanced Featured Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* OPC UA Feature - Enhanced */}
          <div className="group relative overflow-hidden ai-interface-card border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-glow hover:-translate-y-2 rounded-2xl">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Top Border Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Badge with Animation */}
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/30 text-primary font-semibold mb-6 text-sm">
                <span className="w-3 h-3 bg-primary rounded-full mr-3 animate-tech-pulse" />
                OPC UA Certified
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-gradient-tech">
                Universal Connectivity
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Connect any device with industry-standard OPC UA solutions for seamless integration.
              </p>
              
              {/* Interactive Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Universal Server", "Data Access", "Historical Data", "Alarms & Events"].map((feature, idx) => (
                  <div key={idx} className="flex items-center group/item">
                    <CheckCircle className="w-4 h-4 text-primary mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ transitionDelay: `${idx * 0.1}s` }} />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Enhanced CTA Button */}
                <Button size="lg" className="group/btn bg-gradient-elegant hover:shadow-orange font-semibold px-8 py-4 rounded-xl border-0 text-primary-foreground">
                  <span className="relative z-10">Explore OPC UA Solutions</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
            </div>
            
            {/* Image with Parallax Effect */}
            <div className="absolute top-8 right-8 bottom-8 w-1/2 rounded-2xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src={opcNetworkImage} 
                alt="OPC UA network connectivity visualization with industrial nodes and data streams" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/20 to-primary/40" />
            </div>
          </div>

          {/* AI Solutions Feature - Enhanced */}
          <div className="group relative overflow-hidden ai-interface-card border border-accent/20 hover:border-accent/40 transition-all duration-700 hover:shadow-glow hover:-translate-y-2 rounded-2xl">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Top Border Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cyber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Badge with Animation */}
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-accent/30 text-accent font-semibold mb-6 text-sm">
                <span className="w-3 h-3 bg-accent rounded-full mr-3 animate-tech-pulse" />
                AI Powered
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-gradient-cyber">
                Intelligent Automation
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Leverage AI and machine learning to optimize processes and predict maintenance needs.
              </p>
              
              {/* Interactive Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Predictive Analytics", "Anomaly Detection", "Process Optimization", "Digital Twins"].map((feature, idx) => (
                  <div key={idx} className="flex items-center group/item">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ transitionDelay: `${idx * 0.1}s` }} />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Enhanced CTA Button */}
                <Button size="lg" className="group/btn bg-gradient-cyber hover:shadow-orange font-semibold px-8 py-4 rounded-xl border-0 text-primary-foreground">
                  <span className="relative z-10">Discover AI Solutions</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
            </div>
            
            {/* Image with Parallax Effect */}
            <div className="absolute top-8 right-8 bottom-8 w-1/2 rounded-2xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src={automationImage} 
                alt="AI-powered industrial automation dashboard showing predictive analytics and machine learning insights" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent/20 to-accent/40" />
            </div>
          </div>
        </div>

        {/* Modern Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group relative ai-interface-card border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 rounded-xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary p-2.5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-full w-full text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs px-2 py-1 glass-effect border-primary/30">
                    {service.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-display text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <CheckCircle className="w-3 h-3 text-accent mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full group/btn border-accent/40 hover:border-accent/60 hover:bg-accent/10 text-xs transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}