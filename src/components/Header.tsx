"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

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
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300",
      "border-b",
      scrolled ? "glass-effect border-primary/30 shadow-elegant" : "bg-background/40 border-transparent"
    )}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-tech rounded-xl flex items-center justify-center shadow-glow">
                  <div className="w-5 h-5 bg-background rounded-sm" />
                </div>
                <span className="text-xl font-display font-bold text-gradient-tech">
                  Integration Objects
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "transition-colors duration-200 text-sm font-medium",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pl-4 ml-2 border-l border-primary/20">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="sm" className="font-medium shadow-card">
              Get Started
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

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-500 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-4 pt-4 pb-6 space-y-2 ai-interface-card backdrop-blur-2xl rounded-2xl mt-4 border border-primary/20 shadow-glow">
            <div className="flex items-center justify-between pb-2">
              <ThemeToggle />
              <Button 
                variant="hero" 
                size="sm"
                className="font-medium shadow-card"
              >
                Get Started
              </Button>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 relative group",
                  pathname === item.href
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}