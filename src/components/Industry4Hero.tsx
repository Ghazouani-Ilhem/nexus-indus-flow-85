import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Network, Zap, Shield, Cpu } from "lucide-react";

const heroContent = [
  {
    badge: "POWERING INDUSTRY 4.0",
    title: "We transform manufacturing using",
    highlight: "data, AI and tech",
    description: "Industry-leading OPC UA connectivity solutions that enable seamless IT-OT integration, real-time analytics, and secure industrial automation for the future of smart manufacturing."
  },
  {
    badge: "SIOTH® TECHNOLOGY",
    title: "Mission control for",
    highlight: "industrial data",
    description: "Our success is based on developing OPC UA servers and industrial automation solutions that have a direct impact on operational efficiency and digital transformation."
  },
  {
    badge: "DIGITAL TRANSFORMATION",
    title: "Powering global",
    highlight: "manufacturing operations",
    description: "Transform your industrial operations with secure connectivity, real-time analytics, and AI-powered insights that drive efficiency and innovation."
  }
];

const floatingElements = [
  { icon: Network, delay: "0s", x: "15%", y: "20%" },
  { icon: Zap, delay: "1s", x: "85%", y: "30%" },
  { icon: Shield, delay: "2s", x: "20%", y: "70%" },
  { icon: Cpu, delay: "3s", x: "80%", y: "75%" }
];

export function Industry4Hero() {
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-secondary via-secondary-dark to-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Tech Grid */}
        <div className="tech-grid opacity-20" />
        
        {/* Neural Network Pattern */}
        <div className="neural-network opacity-15" />
        
        {/* Floating Tech Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="digital-particle opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icon Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute z-10 hidden lg:block"
          style={{
            left: element.x,
            top: element.y,
            animationDelay: element.delay
          }}
        >
          <div className="relative floating-3d">
            <div className="w-16 h-16 rounded-2xl glass-effect border border-white/20 flex items-center justify-center">
              <element.icon className="w-8 h-8 text-accent" />
            </div>
            <div className="absolute inset-0 rounded-2xl border border-accent/30 animate-ping" />
          </div>
        </div>
      ))}

      {/* 3D Background Elements */}
      <div className="absolute top-1/4 right-1/4 scene-3d opacity-60">
        <div className="cube-3d" />
      </div>
      
      <div className="absolute bottom-1/3 left-1/4 opacity-50">
        <div className="sphere-3d" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Badge */}
                <Badge 
                  variant="outline" 
                  className="mb-8 px-6 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm text-sm font-medium tracking-wider"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse" />
                  {current.badge}
                </Badge>

                {/* Main Heading */}
                <div className="space-y-4 mb-8">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight">
                    {current.title}
                  </h1>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-accent leading-[0.9] tracking-tight">
                    {current.highlight}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed mb-10 font-light">
                  {current.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white px-10 py-6 h-16 text-lg font-semibold rounded-2xl shadow-glow group transition-all duration-300"
                  >
                    <span className="font-medium">Discover SIOTH®</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 h-16 text-lg font-semibold rounded-2xl backdrop-blur-sm group transition-all duration-300"
                  >
                    <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">Watch Demo</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - AI Robot Silhouette */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative">
                {/* Main Robot Figure */}
                <div className="relative w-full h-[600px] flex items-center justify-center">
                  {/* Robot Head */}
                  <div className="absolute top-8 w-32 h-40 rounded-3xl glass-effect border border-white/20 backdrop-blur-sm">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-accent/50 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent/20 animate-pulse" />
                    </div>
                    {/* Eyes */}
                    <div className="absolute top-16 left-6 w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <div className="absolute top-16 right-6 w-3 h-3 bg-accent rounded-full animate-pulse" />
                  </div>

                  {/* Robot Body */}
                  <div className="absolute top-48 w-40 h-64 rounded-3xl glass-effect border border-white/20 backdrop-blur-sm">
                    {/* Chest Panel */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-16 rounded-xl border border-accent/30 bg-accent/10">
                      <div className="grid grid-cols-3 gap-2 p-3">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Robot Arms */}
                  <div className="absolute top-56 -left-8 w-8 h-32 rounded-full glass-effect border border-white/20 backdrop-blur-sm transform rotate-12" />
                  <div className="absolute top-56 -right-8 w-8 h-32 rounded-full glass-effect border border-white/20 backdrop-blur-sm transform -rotate-12" />

                  {/* Robot Hands with Tech Hologram */}
                  <div className="absolute top-80 right-4 w-12 h-12 rounded-full glass-effect border border-white/20 backdrop-blur-sm">
                    {/* Floating Hologram */}
                    <div className="absolute -top-8 -left-16 w-32 h-20 hologram-element rounded-xl">
                      <div className="absolute inset-2 grid grid-cols-4 gap-1">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div 
                            key={i} 
                            className="w-full h-2 bg-accent/30 rounded animate-pulse" 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Data Streams */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px h-20 bg-gradient-to-t from-accent/60 to-transparent"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 20}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      >
                        <div className="absolute top-0 w-2 h-2 bg-accent rounded-full animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orbiting Tech Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-1/4 left-0 w-4 h-4 bg-accent/60 rounded-full" />
                  <div className="absolute top-1/2 right-0 w-3 h-3 bg-primary/60 rounded-full" />
                  <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-accent/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent w-12' 
                  : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}