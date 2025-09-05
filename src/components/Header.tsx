"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "IT-OT Integration", href: "/integration" },
  { name: "OPC Products", href: "/opc-ua-wrapper" },
  { name: "AI Solutions", href: "/ai" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "glass-effect backdrop-blur-xl border-b border-primary/30 shadow-glass" 
        : "glass-effect backdrop-blur-xl border-b border-primary/20"
    )}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-tech rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-tech transition-all duration-300 group-hover:scale-105">
                  <Sparkles className="w-5 h-5 text-background group-hover:animate-pulse" />
                </div>
                <span className="text-xl font-display font-bold text-gradient-tech group-hover:bg-gradient-cyber bg-clip-text text-transparent transition-all duration-300">
                  Integration Objects
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative transition-all duration-300 text-sm font-medium group",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-fade-in-up" />
                  )}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              size="sm" 
              className="font-medium bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105 group"
            >
              <span>Get Started</span>
              <Sparkles className="w-4 h-4 ml-1 group-hover:animate-pulse" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-500 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-4 pt-4 pb-6 space-y-2 glass-effect backdrop-blur-2xl rounded-2xl mt-4 border border-primary/20 shadow-glass">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 relative group animate-fade-in-up",
                  pathname === item.href
                    ? "text-foreground bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/10 border border-transparent"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                {pathname === item.href && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </Link>
            ))}
            <div className="pt-4 border-t border-primary/20 mt-4">
              <Button 
                variant="default" 
                size="lg"
                className="w-full font-medium bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 group"
              >
                <span>Get Started</span>
                <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}