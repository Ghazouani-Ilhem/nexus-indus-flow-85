"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-xl border-b border-border/60 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-tech rounded-xl flex items-center justify-center shadow-glow">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-background rounded-sm" />
                </div>
                <span className="text-lg md:text-xl font-display font-bold text-gradient-tech">
                  Integration Objects
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center gap-6 lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "transition-colors duration-200 text-sm font-medium px-1 py-2 relative group",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>{item.name}</span>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-8 group-hover:bg-primary/80" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" className="font-medium bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 shadow-card">
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
          <div className="px-4 pt-4 pb-6 space-y-2 ai-interface-card backdrop-blur-2xl rounded-2xl mt-3 border border-border/60 shadow-card">
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
            <div className="pt-4 border-t border-primary/20 mt-4">
              <Button 
                variant="default" 
                size="lg"
                className="w-full font-medium bg-gradient-primary hover:shadow-glow"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}