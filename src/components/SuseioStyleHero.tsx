"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 tech-grid" />

      

      {/* Background Image - dynamic per slide */}
      <div className="absolute inset-0 z-0">
        <img 
          src={currentContent.image}
          alt={currentContent.alt || "Hero visual"}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-auto h-[70vh] object-contain opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-12 max-w-2xl">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-block px-6 py-3 glass-effect border-border rounded-full text-foreground text-sm font-medium tracking-wide">
                  {currentContent.badge}
                </span>
              </div>

              {/* Main Content */}
              <div className="space-y-8 mb-12">
                <h1 className="font-display font-bold text-foreground leading-[0.9] tracking-tight">
                  <span className="block text-4xl md:text-5xl lg:text-6xl">{currentContent.title}</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-primary mt-4 font-light">
                    {currentContent.subtitle}
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
                  {currentContent.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-12">
                <Button 
                  variant="hero"
                  size="lg"
                  className="group transition-all duration-300"
                >
                  <span className="font-medium">{currentContent.ctaText}</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Bottom Social Links for Mobile */}
              <div className="flex items-center space-x-6 lg:hidden">
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
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
    </section>
  );
}