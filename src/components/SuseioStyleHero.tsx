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

      {/* Vertical Social Links */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wider transform -rotate-90 origin-center">
            TWITTER
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wider transform -rotate-90 origin-center">
            INSTAGRAM
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wider transform -rotate-90 origin-center">
            FACEBOOK
          </a>
        </div>
      </div>

      {/* Background Image - dynamic per slide */}
      <div className="absolute inset-0 z-0">
        <img 
          src={currentContent.image}
          alt={currentContent.alt || "Hero visual"}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-auto h-[70vh] object-contain opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* OPC UA Icon */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 glass-effect border-primary/30 rounded-lg flex items-center justify-center animate-float">
          <div className="w-8 h-8 bg-primary rounded opacity-80"></div>
        </div>
        
        {/* SIOTH Badge */}
        <div className="absolute top-1/3 right-1/3 px-4 py-2 glass-effect border-border rounded-lg animate-float" style={{animationDelay: '1s'}}>
          <span className="text-foreground text-sm font-medium">SIOTH®</span>
        </div>
        
        {/* Data Flow Elements */}
        <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/2 w-10 h-10 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M 60% 30% Q 70% 40% 80% 35%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 65% 70% Q 75% 60% 85% 65%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 max-w-2xl">
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

            {/* Right 3D Description Area */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative ml-auto max-w-sm">
                {/* 3D Card Container */}
                <div className="relative transform rotate-y-12 perspective-1000">
                  <div className="glass-effect border-border rounded-2xl p-8 shadow-elegant">
                    {/* Mini Badge */}
                    <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full mb-6">
                      <span className="text-primary text-xs font-medium">Industry 4.0</span>
                    </div>
                    
                    {/* 3D Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                      Next-Gen Industrial
                      <span className="block text-primary">Connectivity</span>
                    </h3>
                    
                    {/* Features List */}
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Real-time OPC UA Server
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        SIOTH® Integration Platform
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        AI-Powered Analytics
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Secure Data Transfer
                      </li>
                    </ul>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                      <div>
                        <div className="text-2xl font-bold text-primary">99.9%</div>
                        <div className="text-xs text-muted-foreground">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-xs text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Shadow */}
                  <div className="absolute inset-0 bg-primary/10 blur-xl transform translate-x-4 translate-y-4 -z-10 rounded-2xl"></div>
                </div>
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