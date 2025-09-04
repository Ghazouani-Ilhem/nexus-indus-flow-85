"use client";
import { useState, useEffect } from "react";

const clients = [
  { name: "Hanwha Chemical", logo: "/placeholder.svg" },
  { name: "Duke Energy", logo: "/placeholder.svg" },
  { name: "ENI", logo: "/placeholder.svg" },
  { name: "Imperial", logo: "/placeholder.svg" },
  { name: "Saras", logo: "/placeholder.svg" },
  { name: "ETAP", logo: "/placeholder.svg" },
  { name: "GLENCORE", logo: "/placeholder.svg" },
  { name: "Aramco", logo: "/placeholder.svg" },
  { name: "Tupras", logo: "/placeholder.svg" },
  { name: "Emerson", logo: "/placeholder.svg" },
  { name: "Air Liquide", logo: "/placeholder.svg" },
  { name: "Total Energy", logo: "/placeholder.svg" },
  { name: "GE", logo: "/placeholder.svg" },
  { name: "Perenco", logo: "/placeholder.svg" },
  { name: "Chevron", logo: "/placeholder.svg" },
  { name: "Novartis", logo: "/placeholder.svg" },
  { name: "Shell", logo: "/placeholder.svg" },
  { name: "BHI", logo: "/placeholder.svg" },
  { name: "ExxonMobil", logo: "/placeholder.svg" },
  { name: "Linde", logo: "/placeholder.svg" },
];

export const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + itemsPerPage) % clients.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const visibleClients = clients.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            IO Technology Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by industry leaders worldwide for mission-critical operations
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {visibleClients.map((client, index) => (
              <div 
                key={`${client.name}-${currentIndex}-${index}`}
                className="group relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-tech w-full h-24 flex items-center justify-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary-foreground">
                      {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-primary/20 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 shadow-tech">
                  {client.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-card"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(clients.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};