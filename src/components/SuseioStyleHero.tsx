"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

const slides = [
  {
    badge: "Industrial Connectivity Solutions",
    title: "OPC UA Universal Server",
    subtitle: "built in minutes using SIOTH®",
    description: "An industrial automation platform blending cutting-edge connectivity, innovative OPC UA technology, and deep industrial insights to achieve transparent, measurable success at any scale.",
    ctaText: "Discover Solutions",
    image: "/assets/enhanced-opc-ua-server.jpg",
    alt: "Modern OPC UA universal server architecture"
  },
  {
    badge: "Mission Control for Industrial Data",
    title: "Real-time Industrial Analytics",
    subtitle: "powered by SIOTH® technology",
    description: "Our success is based on developing OPC UA connectivity and industrial automation solutions that have a direct impact on the growth of our clients' manufacturing operations.",
    ctaText: "Explore Platform",
    image: "/assets/automation-dashboard.jpg",
    alt: "Industrial real-time analytics dashboard"
  },
  {
    badge: "Powering Global Manufacturing",
    title: "Industry 4.0 Integration",
    subtitle: "transforming operations worldwide", 
    description: "We transform industrial businesses using secure connectivity, real-time data analytics, and AI-powered insights for the future of smart manufacturing.",
    ctaText: "Learn More",
    image: "/assets/hero-industry40.jpg",
    alt: "Industry 4.0 smart factory with connected machinery"
  }
];

export function SuseioStyleHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = slides[currentSlide];

  return (
    <section className="relative min-h-screen bg-background overflow-hidden dark">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10 tech-grid" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />

      {/* Background Image - dynamic per slide */}
      <div className="absolute inset-0 z-0">
        <img 
          src={currentContent.image}
          alt={currentContent.alt || "Hero visual"}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-auto h-[70vh] object-contain opacity-40 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-12 max-w-2xl">
              {/* Enhanced Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 glass-effect border-border rounded-full text-foreground text-sm font-medium tracking-wide group hover:shadow-glow transition-all duration-300">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  {currentContent.badge}
                  <Zap className="w-3 h-3 text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </div>

              {/* Enhanced Main Content */}
              <div className="space-y-8 mb-12">
                <h1 className="font-display font-bold text-foreground leading-[0.9] tracking-tight">
                  <span className="block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent animate-fade-in-up">
                    {currentContent.title}
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-primary mt-4 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {currentContent.subtitle}
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  {currentContent.description}
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button 
                  variant="hero"
                  size="lg"
                  className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <span className="relative z-10 font-medium">{currentContent.ctaText}</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              {/* Enhanced Mobile Social Links */}
              <div className="flex items-center space-x-6 lg:hidden mobile-touch">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wide hover:scale-105 active:scale-95">
                  linkedin
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wide hover:scale-105 active:scale-95">
                  twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wide hover:scale-105 active:scale-95">
                  github
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-8 z-20 mobile-safe-area">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative rounded-full transition-all duration-500 group mobile-touch ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-gradient-tech shadow-glow' 
                  : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125 active:scale-95'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-tech rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
    </section>
  );
}