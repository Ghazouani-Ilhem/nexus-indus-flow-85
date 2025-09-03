import { useState, useEffect } from "react";
import { Star, Award, Globe, TrendingUp } from "lucide-react";

const clients = [
  { name: "Hanwha Chemical", logo: "/placeholder.svg", industry: "Chemical" },
  { name: "Duke Energy", logo: "/placeholder.svg", industry: "Energy" },
  { name: "ENI", logo: "/placeholder.svg", industry: "Oil & Gas" },
  { name: "Imperial", logo: "/placeholder.svg", industry: "Oil & Gas" },
  { name: "Saras", logo: "/placeholder.svg", industry: "Refining" },
  { name: "ETAP", logo: "/placeholder.svg", industry: "Software" },
  { name: "GLENCORE", logo: "/placeholder.svg", industry: "Mining" },
  { name: "Aramco", logo: "/placeholder.svg", industry: "Oil & Gas" },
  { name: "Tupras", logo: "/placeholder.svg", industry: "Refining" },
  { name: "Emerson", logo: "/placeholder.svg", industry: "Technology" },
  { name: "Air Liquide", logo: "/placeholder.svg", industry: "Industrial Gas" },
  { name: "Total Energy", logo: "/placeholder.svg", industry: "Energy" },
  { name: "GE", logo: "/placeholder.svg", industry: "Conglomerate" },
  { name: "Perenco", logo: "/placeholder.svg", industry: "Oil & Gas" },
  { name: "Chevron", logo: "/placeholder.svg", industry: "Oil & Gas" },
  { name: "Novartis", logo: "/placeholder.svg", industry: "Pharmaceutical" },
  { name: "Shell", logo: "/placeholder.svg", industry: "Oil & Gas" },
  { name: "BHI", logo: "/placeholder.svg", industry: "Oil Services" },
  { name: "ExxonMobil", logo: "/placeholder.svg", industry: "Oil & Gas" },
  { name: "Linde", logo: "/placeholder.svg", industry: "Industrial Gas" },
];

const industries = [
  { name: "Oil & Gas", count: 8, icon: "🛢️" },
  { name: "Energy", count: 4, icon: "⚡" },
  { name: "Chemical", count: 3, icon: "⚗️" },
  { name: "Industrial", count: 5, icon: "🏭" }
];

const testimonialStats = [
  { icon: Star, value: "4.9/5", label: "Client Rating" },
  { icon: Award, value: "100%", label: "Project Success" },
  { icon: Globe, value: "40+", label: "Countries" },
  { icon: TrendingUp, value: "25%", label: "Avg. Efficiency Gain" }
];

export const EnhancedClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + itemsPerPage) % clients.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visibleClients = clients.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 neural-network opacity-5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech" />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full ai-interface-card border border-secondary/20 text-secondary font-medium mb-8 text-sm">
            <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-tech-pulse" />
            Trusted Worldwide
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient-tech">
            IO Technology Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide for mission-critical operations across 
            diverse sectors, from energy and manufacturing to defense and aerospace.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {testimonialStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="p-6 rounded-2xl ai-interface-card border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-tech">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary p-2 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-full h-full text-primary-foreground" />
                </div>
                <div className="text-2xl font-display font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-foreground">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="group text-center">
                <div className="p-4 rounded-xl ai-interface-card border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-tech">
                  <div className="text-2xl mb-2">{industry.icon}</div>
                  <div className="font-display font-semibold text-foreground">{industry.name}</div>
                  <div className="text-sm text-muted-foreground">{industry.count} clients</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="relative overflow-hidden mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {visibleClients.map((client, index) => (
              <div 
                key={`${client.name}-${currentIndex}-${index}`}
                className="group relative p-6 rounded-xl ai-interface-card border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-tech w-full h-24 flex items-center justify-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-tech">
                    <span className="text-xs font-bold text-primary-foreground">
                      {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                </div>
                
                {/* Enhanced Tooltip */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-card border border-primary/20 px-4 py-2 rounded-lg shadow-glow">
                    <div className="text-sm font-semibold text-foreground">{client.name}</div>
                    <div className="text-xs text-muted-foreground">{client.industry}</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-card"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Progress indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(clients.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index 
                    ? 'bg-primary w-8 shadow-glow' 
                    : 'bg-primary/30 hover:bg-primary/50 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl ai-interface-card border border-primary/20">
            <div className="text-4xl text-primary mb-4">"</div>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-6">
              "Integration Objects has consistently delivered robust, scalable solutions that have 
              transformed our industrial operations. Their expertise in OPC UA and IT-OT integration 
              is unmatched in the industry."
            </blockquote>
            <div className="font-display font-semibold text-foreground">
              Global Industrial Leader
            </div>
            <div className="text-sm text-muted-foreground">
              Fortune 500 Energy Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};