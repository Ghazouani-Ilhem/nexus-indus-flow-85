import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Network, Zap, Shield, Cpu } from "lucide-react";
const opcUAServerImage = "/assets/enhanced-opc-ua-server.jpg";
const siothIntegrationImage = "/assets/enhanced-sioth-integration.jpg";
const opcConnectorsImage = "/assets/enhanced-opc-connectors.jpg";
const scadaMonitoringImage = "/assets/enhanced-scada-monitoring.jpg";

const heroContent = [
  {
    badge: "OPC UA SOLUTIONS",
    title: "OPC UA Universal Server",
    highlight: "built in minutes using SIOTH®",
    description: "Build powerful OPC UA servers in minutes using our innovative SIOTH® platform. Seamless integration, robust connectivity, and enterprise-grade reliability.",
    image: opcUAServerImage,
    alt: "Modern OPC UA universal server architecture with industrial network connectivity nodes and real-time data flow visualization"
  },
  {
    badge: "SIOTH® - SMART IOT HIGHWAY",
    title: "Seamless, Secure & Scalable",
    highlight: "IT-OT Integration",
    description: "Connect your operational technology with information systems through our Smart IoT Highway platform. Secure data exchange and real-time connectivity.",
    image: siothIntegrationImage,
    alt: "SIOTH Smart IoT Highway bridging IT office systems with OT industrial facilities through secure data streams and integration layers"
  },
  {
    badge: "OPC CONNECTORS",
    title: "Improve interoperability with",
    highlight: "our OPC connectors",
    description: "Ensure reliable data exchange between industrial systems with our comprehensive suite of OPC connectors and communication protocols.",
    image: opcConnectorsImage,
    alt: "Industrial OPC connectors enabling seamless interoperability between diverse manufacturing systems and standardized communication protocols"
  },
  {
    badge: "REMOTE MONITORING & SURVEILLANCE",
    title: "SCADA, Dashboards,",
    highlight: "& Security Systems",
    description: "Complete remote monitoring solutions combining SCADA systems, real-time dashboards, and advanced security for comprehensive operational oversight.",
    image: scadaMonitoringImage,
    alt: "Advanced SCADA control room with multiple monitoring screens displaying real-time industrial dashboards and security surveillance systems"
  }
];

const floatingTechElements = [
  { icon: Network, delay: "0s", x: "10%", y: "15%" },
  { icon: Zap, delay: "1.5s", x: "85%", y: "25%" },
  { icon: Shield, delay: "3s", x: "15%", y: "75%" },
  { icon: Cpu, delay: "4.5s", x: "80%", y: "80%" }
];

export function ModernIndustry4Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroContent.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = heroContent[currentIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary to-primary dark">
      {/* Prominent Background Image - Suseio Style */}
      <div className="absolute inset-0">
        <img 
          src={current.image} 
          alt={current.alt} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-secondary/70 to-primary/60" />
      </div>

      {/* Animated Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 tech-grid" />

      {/* Floating Tech Elements */}
      {floatingTechElements.map((element, index) => (
        <div
          key={index}
          className="absolute z-10 hidden lg:block opacity-60"
          style={{
            left: element.x,
            top: element.y,
            animationDelay: element.delay
          }}
        >
          <div className="relative animate-float">
            <div className="w-12 h-12 rounded-xl glass-effect border border-primary/20 flex items-center justify-center backdrop-blur-sm">
              <element.icon className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute inset-0 rounded-xl border border-accent/20 animate-ping" />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 flex items-center min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {/* Badge */}
                <Badge 
                  variant="outline" 
                  className="mb-6 px-4 py-2 glass-effect border-primary/30 text-foreground text-sm font-medium tracking-wider font-mono backdrop-blur-sm"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                  {current.badge}
                </Badge>

                {/* Main Heading - Smaller fonts */}
                <div className="space-y-2 mb-6">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[0.95] tracking-tight">
                    {current.title}
                  </h1>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-accent leading-[0.95] tracking-tight">
                    {current.highlight}
                  </h2>
                </div>

                {/* Description - Smaller */}
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8 font-light">
                  {current.description}
                </p>

                {/* CTA Button - Smaller */}
                <div className="mb-12">
                  <Button 
                    variant="hero"
                    size="lg"
                    className="group transition-all duration-300"
                  >
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-6 pt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wide">
                    linkedin
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wide">
                    twitter  
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wide">
                    github
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Images */}
            <div className="lg:col-span-6 relative">
              <div className="relative flex items-center justify-center h-[600px]">
                {/* Content-Contextual Image Display */}
                <div className="relative z-10 group">
                  {/* Dynamic Content Badge */}
                  <div className="absolute -top-4 left-4 z-20">
                    <div className="flex items-center gap-2 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs text-primary-foreground font-medium">
                      {currentIndex === 0 && <Network className="w-3 h-3" />}
                      {currentIndex === 1 && <Zap className="w-3 h-3" />}
                      {currentIndex === 2 && <Cpu className="w-3 h-3" />}
                      {currentIndex === 3 && <Shield className="w-3 h-3" />}
                      <span className="uppercase tracking-wider">
                        {currentIndex === 0 && "OPC UA"}
                        {currentIndex === 1 && "SIOTH®"}
                        {currentIndex === 2 && "CONNECTOR"}
                        {currentIndex === 3 && "SCADA"}
                      </span>
                    </div>
                  </div>

                  {/* Image Container with Content-Specific Styling */}
                  <div className={`relative overflow-hidden rounded-2xl backdrop-blur-sm border p-4 shadow-elegant transition-all duration-700 ${
                    currentIndex === 0 ? 'glass-effect border-primary/30' :
                    currentIndex === 1 ? 'glass-effect border-primary/30' :
                    currentIndex === 2 ? 'glass-effect border-secondary/30' :
                    'glass-effect border-accent/30'
                  }`}>
                    
                    {/* Content-Specific Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 ${
                      currentIndex === 0 ? 'bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20' :
                      currentIndex === 1 ? 'bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20' :
                      currentIndex === 2 ? 'bg-gradient-to-r from-secondary/20 via-accent/10 to-secondary/20' :
                      'bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20'
                    }`} />
                    
                    {/* Main Image with Content-Aware Effects */}
                    <div className="relative">
                      <img 
                        src={current.image} 
                        alt={current.alt} 
                        className={`w-full max-w-md h-auto object-contain transition-all duration-700 transform group-hover:scale-105 ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                      />
                      
                      {/* Content-Specific Overlay Elements */}
                      {currentIndex === 0 && (
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                          <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                        </div>
                      )}
                      
                      {currentIndex === 1 && (
                        <div className="absolute bottom-4 left-4 flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                              key={i} 
                              className="w-1 bg-primary rounded-full animate-pulse" 
                              style={{
                                height: `${12 + i * 4}px`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            />
                          ))}
                        </div>
                      )}
                      
                      {currentIndex === 2 && (
                        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                          <div className="flex flex-col gap-1">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="flex items-center">
                                <div className="w-2 h-2 bg-secondary rounded-full" />
                                <div className="w-8 h-px bg-gradient-to-r from-secondary to-transparent ml-1" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {currentIndex === 3 && (
                        <div className="absolute top-6 left-6">
                          <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <div 
                                key={i} 
                                className="w-2 h-2 bg-accent/60 rounded-sm animate-pulse" 
                                style={{animationDelay: `${i * 0.1}s`}}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Contextual Corner Accents */}
                      <div className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-xl opacity-60 ${
                        currentIndex === 0 ? 'border-primary' :
                        currentIndex === 1 ? 'border-primary' :
                        currentIndex === 2 ? 'border-secondary' :
                        'border-accent'
                      }`} />
                      <div className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-xl opacity-60 ${
                        currentIndex === 0 ? 'border-primary' :
                        currentIndex === 1 ? 'border-primary' :
                        currentIndex === 2 ? 'border-secondary' :
                        'border-accent'
                      }`} />
                    </div>
                    
                    {/* Content-Specific Animated Border */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className={`absolute inset-0 rounded-2xl border animate-pulse ${
                        currentIndex === 0 ? 'border-primary/30' :
                        currentIndex === 1 ? 'border-primary/30' :
                        currentIndex === 2 ? 'border-secondary/30' :
                        'border-accent/30'
                      }`} />
                    </div>
                  </div>
                  
                  {/* Floating Holographic Elements */}
                  <div className="absolute top-16 -left-8 w-24 h-16 glass-effect rounded-lg border border-accent/30 backdrop-blur-sm animate-float">
                    <div className="p-3 grid grid-cols-4 gap-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 bg-accent/40 rounded-full animate-pulse" 
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Data Stream Elements */}
                  <div className="absolute top-32 -right-12 w-20 h-32 glass-effect rounded-lg border border-border backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
                    <div className="p-2 space-y-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                          <div className="flex-1 h-px bg-gradient-to-r from-accent/60 to-transparent" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Orbiting Particles */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-20 left-0 w-3 h-3 bg-accent/60 rounded-full shadow-glow" />
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-primary/60 rounded-full" />
                    <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-accent/40 rounded-full" />
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Play Button - Positioned like reference */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="relative">
          <Button 
            size="lg"
            variant="ghost"
            className="w-16 h-16 rounded-full glass-effect border-border hover:bg-primary/20 transition-all duration-300 group"
          >
            <Play className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
          </Button>
          
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
          <div className="absolute -inset-2 rounded-full border border-primary/20 animate-ping" style={{animationDelay: '1s'}} />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent w-8' 
                  : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary/60 to-transparent pointer-events-none" />
    </section>
  );
}