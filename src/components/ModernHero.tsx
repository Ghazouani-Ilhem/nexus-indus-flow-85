import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Play, 
  Zap, 
  Shield, 
  Network,
  Brain,
  ChevronDown
} from "lucide-react";

const stats = [
  { number: "500+", label: "Industrial Projects", icon: Network },
  { number: "99.9%", label: "System Uptime", icon: Shield },
  { number: "50+", label: "Countries Served", icon: Zap },
  { number: "24/7", label: "AI Monitoring", icon: Brain }
];

const floatingElements = [
  { id: 1, x: "10%", y: "20%", delay: "0s", size: "w-3 h-3" },
  { id: 2, x: "85%", y: "15%", delay: "2s", size: "w-2 h-2" },
  { id: 3, x: "15%", y: "80%", delay: "4s", size: "w-4 h-4" },
  { id: 4, x: "90%", y: "70%", delay: "1s", size: "w-2 h-2" },
  { id: 5, x: "70%", y: "25%", delay: "3s", size: "w-3 h-3" },
  { id: 6, x: "25%", y: "60%", delay: "5s", size: "w-2 h-2" }
];

export function ModernHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cyber">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 neural-network opacity-30" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div 
        className="absolute inset-0 tech-grid opacity-10"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />

      {/* Floating Particles */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} bg-primary rounded-full blur-sm animate-float`}
          style={{
            left: element.x,
            top: element.y,
            animationDelay: element.delay,
            boxShadow: "0 0 20px hsl(var(--primary) / 0.6)"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center">
            <Badge 
              variant="outline" 
              className="px-6 py-3 text-sm font-medium bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 cyber-glow"
            >
              <Zap className="w-4 h-4 mr-2" />
              Industry 4.0 Solutions
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight">
              <span className="block text-foreground">Build OPC UA</span>
              <span className="block text-gradient-tech">Servers in</span>
              <span className="block text-neon">Minutes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body">
              Revolutionary SIOTH® platform enables rapid deployment of industrial automation solutions. 
              Connect any device, anywhere, with enterprise-grade security and AI-powered insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button 
              size="xl" 
              className="group bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-cyber hover:shadow-glow transition-all duration-300 neon-border"
            >
              Start Building Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="group border-muted-foreground/30 text-foreground hover:border-primary hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="glass-effect p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-cyber">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  );
}