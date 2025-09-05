import { Sparkles } from "lucide-react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} mb-16 max-w-4xl`}>
      {eyebrow ? (
        <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect border border-primary/20 text-primary font-medium mb-8 text-sm tracking-wide backdrop-blur-xl shadow-glass hover:shadow-glow transition-all duration-300 group">
          <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
          <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground gradient-text animate-fade-in-up">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

