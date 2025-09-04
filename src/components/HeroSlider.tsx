import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
const heroImage = "/assets/3d-opc-connectivity.jpg";
const opcImage = "/assets/3d-iot-network.jpg";
const automationImage = "/assets/3d-automation-dashboard.jpg";
const aiTechBackground = "/assets/ai-tech-background-light.jpg";

const slides = [
  {
    id: 1,
    badge: "Leading OPC UA Solutions Provider",
    title: "Industrial",
    highlight: "Connectivity Excellence",
    subtitle: "with OPC UA Technology",
    description: "Transform your industrial operations with our comprehensive OPC UA servers, gateways, and connectivity solutions. Bridge the gap between operational technology and enterprise systems seamlessly.",
    image: heroImage,
    alt: "Industrial automation with OPC UA connectivity and smart manufacturing systems",
    primaryCta: "Explore OPC Solutions",
    secondaryCta: "View Demo"
  },
  {
    id: 2,
    badge: "Smart Manufacturing Solutions",
    title: "Seamless",
    highlight: "IT-OT Integration",
    subtitle: "for Industry 4.0",
    description: "Connect PLCs, SCADA systems, and industrial devices to enterprise IT infrastructure. Our proven solutions ensure secure, reliable data exchange across your entire manufacturing ecosystem.",
    image: opcImage,
    alt: "OPC UA network showing connected industrial devices and systems",
    primaryCta: "Discover Integration",
    secondaryCta: "Free Consultation"
  },
  {
    id: 3,
    badge: "Process Optimization Leader",
    title: "Real-time",
    highlight: "Data Intelligence",
    subtitle: "with Advanced Analytics",
    description: "Leverage real-time industrial data analytics to optimize manufacturing processes. Monitor equipment performance, predict maintenance needs, and enhance operational efficiency with our dashboards.",
    image: automationImage,
    alt: "Advanced industrial dashboard with real-time data analytics and monitoring",
    primaryCta: "See Analytics",
    secondaryCta: "Request Demo"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero scene-3d">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Digital Particles Layer - Inspired by AI design */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="digital-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 parallax-layer">
        {/* Floating AI Interface Cards */}
        <div className="absolute top-20 right-20 w-32 h-20 hologram-element rounded-lg floating-3d" style={{ animationDelay: '0s' }}>
          <div className="absolute inset-2 border border-primary/20 rounded"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-primary rounded-full -translate-x-1/2 -translate-y-1/2 animate-tech-pulse"></div>
        </div>
        
        <div className="absolute top-32 left-24 w-28 h-16 hologram-element rounded-lg floating-3d" style={{ animationDelay: '1.5s' }}>
          <div className="absolute inset-2 border border-secondary/20 rounded"></div>
          <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-tech rounded-full"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-tech rounded-full opacity-60"></div>
        </div>
        
        <div className="absolute bottom-40 right-32 w-36 h-24 hologram-element rounded-lg floating-3d" style={{ animationDelay: '3s' }}>
          <div className="absolute inset-2 border border-accent/20 rounded"></div>
          <div className="absolute top-3 left-3 w-3 h-3 bg-primary rounded-full animate-tech-pulse"></div>
          <div className="absolute top-3 right-3 w-2 h-2 bg-secondary rounded-full animate-tech-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-3 left-3 right-3 h-0.5 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Floating 3D Cubes */}
        <div className="absolute top-20 left-20 floating-3d" style={{ animationDelay: '0s' }}>
          <div className="cube-3d">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-1/4 floating-3d" style={{ animationDelay: '4s' }}>
          <div className="cube-3d">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>

        {/* Orbiting 3D Spheres */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 flex items-center justify-center" style={{ animationDelay: '1s' }}>
          <div className="sphere-3d"></div>
        </div>
        
        <div className="absolute top-3/4 right-1/4 w-40 h-40 flex items-center justify-center" style={{ animationDelay: '3s' }}>
          <div className="sphere-3d"></div>
        </div>
      </div>
      
      {/* Right-side Images */}
      <div className="absolute right-0 top-0 w-1/2 lg:w-2/5 h-full overflow-hidden z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover transform transition-transform duration-1000"
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-effect border border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 group shadow-card"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-effect border border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 group shadow-card"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl">{/*  Increased max width for better layout */}
          {/* Enhanced Content Layout */}
          <div 
            key={`badge-${currentSlide}`}
            className="inline-flex items-center px-6 py-3 rounded-full ai-interface-card border border-primary/20 text-primary font-medium mb-8 animate-fade-in-up shadow-card"
          >
            <span className="w-3 h-3 bg-primary rounded-full mr-3 animate-tech-pulse" />
            {currentSlideData.badge}
          </div>

          {/* Main Heading with AI-inspired styling */}
          <div 
            key={`title-${currentSlide}`}
            className="animate-fade-in-up"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight tracking-tight">
              {currentSlideData.title}
              <span className="block text-gradient-primary text-4xl md:text-6xl lg:text-7xl mt-2 relative">
                {currentSlideData.highlight}
                <div className="absolute -right-8 top-1/2 w-6 h-6 bg-gradient-primary rounded-full opacity-60 animate-tech-pulse"></div>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-muted-foreground mt-4 font-body">
                {currentSlideData.subtitle}
              </span>
            </h1>
          </div>

          {/* Enhanced Description */}
          <p 
            key={`desc-${currentSlide}`}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed animate-fade-in-up font-body relative"
          >
            {currentSlideData.description}
            <div className="absolute -left-4 top-2 w-1 h-8 bg-gradient-primary rounded-full opacity-30"></div>
          </p>

          {/* Enhanced CTA Buttons */}
          <div 
            key={`cta-${currentSlide}`}
            className="flex flex-col sm:flex-row gap-6 animate-fade-in-up"
          >
            <Button 
              variant="hero"
              size="xl"
              className="group relative overflow-hidden ai-interface-card border-primary/30"
            >
              <span className="relative z-10">{currentSlideData.primaryCta}</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-tech-pulse"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="group border border-primary/30 hover:border-primary/50 ai-interface-card hover:bg-primary/5 relative"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-500" />
              <span>{currentSlideData.secondaryCta}</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Button>
          </div>

          {/* Stats with AI-enhanced styling */}
          <div className="flex flex-wrap gap-12 mt-20 pt-8 border-t border-border relative">
            <div className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-primary"></div>
            <div className="text-center sm:text-left animate-fade-in-up group">
              <div className="text-4xl font-display font-bold text-gradient-tech mb-1">1000+</div>
              <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Industrial Clients</div>
            </div>
            <div className="text-center sm:text-left animate-fade-in-up group">
              <div className="text-4xl font-display font-bold text-gradient-tech mb-1">20+</div>
              <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Years of Excellence</div>
            </div>
            <div className="text-center sm:text-left animate-fade-in-up group">
              <div className="text-4xl font-display font-bold text-gradient-tech mb-1">99.9%</div>
              <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase">System Reliability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125 shadow-glow' 
                : 'bg-muted-foreground/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-border z-20">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Enhanced Floating Elements with 3D Effects */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-primary/10 rounded-2xl shadow-card animate-float backdrop-blur-sm tech-wireframe floating-3d" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-secondary/10 rounded-xl shadow-card animate-float backdrop-blur-sm tech-wireframe floating-3d" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/10 rounded-full shadow-card animate-float backdrop-blur-sm tech-wireframe floating-3d" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-primary/10 rounded-lg shadow-card animate-float backdrop-blur-sm tech-wireframe floating-3d" style={{ animationDelay: '3s' }} />
    </section>
  );
}