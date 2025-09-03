import { Clock, Shield, Award, Users, ArrowRight, CheckCircle, Star, Zap } from "lucide-react";
import expertTeamImage from "@/assets/enhanced-expert-team.jpg";

const differentiators = [
  {
    icon: Clock,
    title: "On-time & On-budget Delivery",
    description: "Consistent project delivery with transparent communication and efficient execution.",
    metric: "98%",
    metricLabel: "On-time Delivery"
  },
  {
    icon: Shield,
    title: "Robust & Reliable Solutions",
    description: "Built-to-last products with future-proof architecture and 24/7 support.",
    metric: "99.9%",
    metricLabel: "System Uptime"
  },
  {
    icon: Award,
    title: "Cybersecurity Compliance",
    description: "Meeting latest security standards with continuous updates and monitoring.",
    metric: "ISO 27001",
    metricLabel: "Certified"
  },
  {
    icon: Users,
    title: "IT-OT Integration Expertise",
    description: "Proven experience in industrial automation and system integration.",
    metric: "1000+",
    metricLabel: "Deployments"
  }
];

const achievements = [
  { icon: Star, value: "20+", label: "Years Experience" },
  { icon: Zap, value: "500+", label: "Projects Delivered" },
  { icon: Shield, value: "99.9%", label: "Security Rating" },
  { icon: CheckCircle, value: "100%", label: "Client Satisfaction" }
];

export const EnhancedWhatMakesUsDifferent = () => {
  return (
    <section className="modern-section py-16 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="geometric-bg" />
      <div className="floating-shape top-28 right-28" style={{ animationDelay: '0.5s' }} />
      <div className="floating-shape bottom-36 left-24" style={{ animationDelay: '2.5s' }} />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl ai-interface-card border border-accent/20 text-accent font-semibold mb-8 text-sm">
            <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-scale-pulse" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient-tech leading-tight">
            What Makes Us Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Key advantages that make us your trusted Industry 4.0 transformation partner.
          </p>
        </div>

        {/* Enhanced Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="p-6 rounded-2xl ai-interface-card border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-tech hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary p-2 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-full h-full text-primary-foreground" />
                </div>
                <div className="text-3xl font-display font-bold text-gradient-primary mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Main Differentiators */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="p-8 rounded-2xl ai-interface-card border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-glow hover:-translate-y-2 h-full">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary p-3 shadow-tech group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <item.icon className="w-full h-full text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-display font-bold text-gradient-primary">
                      {item.metric}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-semibold mb-4 text-foreground group-hover:text-gradient-primary transition-all duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-tech-pulse" />
                <div className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-primary rounded-full opacity-30" />
              </div>
            </div>
          ))}
        </div>


        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="p-8 rounded-2xl elegant-card border border-accent/20 max-w-2xl mx-auto hover:shadow-orange transition-all duration-300">
            <h3 className="text-2xl font-display font-bold mb-4 text-gradient-cyber">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-foreground mb-6">
              Transform your industrial operations with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-6 py-3 rounded-lg bg-gradient-elegant text-primary-foreground font-medium shadow-elegant hover:shadow-orange transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-accent/40 text-accent hover:border-accent/60 hover:bg-accent/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};