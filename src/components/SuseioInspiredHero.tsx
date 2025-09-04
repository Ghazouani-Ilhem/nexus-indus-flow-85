import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const heroImage = "/assets/hero-industry40.jpg";
import { 
  ArrowRight, 
  Play, 
  Network,
  Shield,
  Zap,
  Users,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    badge: "OPC UA Solutions",
    title: "Industrial Connectivity Platform",
    subtitle: "Transform your industrial operations with cutting-edge OPC UA connectivity solutions that enable seamless IT-OT integration and real-time data exchange.",
    cta: "Discover Solutions"
  },
  {
    id: 2,
    badge: "SIOTH® Technology", 
    title: "Mission Control for Industrial Data",
    subtitle: "Our success is based on developing OPC UA servers and industrial automation solutions that have a direct impact on the efficiency of our clients' operations.",
    cta: "Explore SIOTH®"
  },
  {
    id: 3,
    badge: "Industry 4.0 Ready",
    title: "Powering Global Manufacturing",
    subtitle: "We transform industrial operations using secure connectivity, real-time analytics, and AI-powered insights for the future of manufacturing.",
    cta: "Learn More"
  }
];

const stats = [
  { number: "89%", label: "Client Retention" },
  { number: "40%", label: "Efficiency Growth" }, 
  { number: "99.9%", label: "System Uptime" },
  { number: "69%", label: "Service Demand" },
  { number: "50+", label: "Countries Served" }
];

const services = [
  {
    icon: Network,
    title: "OPC UA Connectivity",
    subtitle: "Award winning, industrial first connectivity solutions",
    description: "Secure and scalable OPC UA server solutions backed by our advanced SIOTH® technology, enabling seamless industrial communication.",
    link: "#"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions", 
    subtitle: "The most secure industrial platform in the world",
    description: "With enterprise-grade security across all industrial protocols, get unrivalled protection for your critical infrastructure and operations.",
    link: "#"
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    subtitle: "Industrial performance meets intelligent insights", 
    description: "Award winning, proprietary analytics platform powers everything we do, scaling data processing and intelligence for greater operational efficiency.",
    link: "#"
  }
];

export function SuseioInspiredHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Industrial automation and OPC UA connectivity solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-primary/70" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="tech-grid opacity-20" />
        <div className="circuit-pattern opacity-15" />
      </div>
      
      {/* Floating 3D Elements */}
      <div className="absolute top-20 right-20 scene-3d">
        <div className="cube-3d">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20">
        <div className="sphere-3d"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Rotating Hero Content */}
            <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Badge 
                variant="outline" 
                className="mb-6 px-4 py-2 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                {currentHero.badge}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                {currentHero.title}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-4xl mb-8">
                {currentHero.subtitle}
              </p>
              
              <Button 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-semibold rounded-lg shadow-glow group"
              >
                {currentHero.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-effect p-4 rounded-lg border border-white/10">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="outline"
              className="w-full mt-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              About Integration Objects
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Services Preview */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          <div className="text-center">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Trusted by thousands worldwide</p>
            
            {/* Client Logos Placeholder */}
            <div className="flex items-center justify-center space-x-8 opacity-40 mb-16">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-16 h-8 bg-white/20 rounded"></div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-effect p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <service.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-accent hover:text-white hover:bg-accent/20 p-0 h-auto font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Play Button - Centered */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <Button 
            size="lg"
            variant="outline"
            className="w-20 h-20 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
          >
            <Play className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </Button>
          
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-accent' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}