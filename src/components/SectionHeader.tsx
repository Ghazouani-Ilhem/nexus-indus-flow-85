type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} mb-12 max-w-4xl`}>
      {eyebrow ? (
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary font-medium mb-6 text-xs">
          <span className="w-2 h-2 bg-primary rounded-full mr-2" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-foreground">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

