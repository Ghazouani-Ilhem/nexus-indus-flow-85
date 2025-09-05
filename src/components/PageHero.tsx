"use client";

import { Button } from "@/components/ui/button";

type PageHeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  imageUrl?: string;
};

export function PageHero({ badge, title, subtitle, description, ctaText, imageUrl = "/assets/hero-industry40.jpg" }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="tech-grid opacity-60" />
      </div>

      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt="Hero background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary/40 to-primary/30" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-mesh)', opacity: 0.15 }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {badge ? (
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse" />
            {badge}
          </div>
        ) : null}
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
          {title}
          {subtitle ? <span className="block text-accent">{subtitle}</span> : null}
        </h1>
        {description ? (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            {description}
          </p>
        ) : null}
        {ctaText ? (
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 h-12 rounded-lg shadow-elegant"
          >
            {ctaText}
          </Button>
        ) : null}
      </div>

      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full opacity-40 animate-float blur-sm" />
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-primary/20 rounded-lg opacity-30 animate-float blur-sm" style={{ animationDelay: '1.5s' }} />
    </section>
  );
}

