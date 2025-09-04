import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
const heroImage = "/assets/hero-industry40.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="tech-grid opacity-60" />
      </div>
      
      {/* Background Image - More prominent like Suseio */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Industry 4.0 industrial automation with connected machinery and IoT sensors" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary/40 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl">
          {/* Elegant Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-12 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse" />
            Leading OPC UA Solutions Provider
          </div>

          {/* Refined Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight animate-fade-in-up">
            OPC UA Universal Server
            <span className="block text-accent">
              built in minutes using SIOTH®
            </span>
          </h1>

          {/* Professional Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed font-body animate-fade-in-up">
            Industry-leading solutions for OPC UA connectivity, IT-OT integration, and digital transformation. 
            Connect, secure, and optimize your industrial operations with our cutting-edge automation platform.
          </p>

          {/* Elegant CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-4 h-14 rounded-lg shadow-elegant group"
            >
              Download SIOTH
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-4 h-14 rounded-lg backdrop-blur-sm group"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
            <div className="text-center md:text-left animate-fade-in-up">
              <div className="text-4xl font-display font-bold text-accent mb-2">500+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Global Clients</div>
            </div>
            <div className="text-center md:text-left animate-fade-in-up">
              <div className="text-4xl font-display font-bold text-accent mb-2">20+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center md:text-left animate-fade-in-up">
              <div className="text-4xl font-display font-bold text-accent mb-2">99.9%</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">System Uptime</div>
            </div>
            <div className="text-center md:text-left animate-fade-in-up">
              <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full opacity-40 animate-float blur-sm" />
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-primary/20 rounded-lg opacity-30 animate-float blur-sm" style={{ animationDelay: '1.5s' }} />
    </section>
  );
}