import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "OPC UA Server", href: "/opc-ua-wrapper" },
    { name: "IT-OT Integration", href: "/integration" },
    { name: "SIOTH® Platform", href: "/solutions" },
    { name: "AI Solutions", href: "/ai" }
  ],
  resources: [
    { name: "Documentation", href: "/resources" },
    { name: "Case Studies", href: "/resources" },
    { name: "White Papers", href: "/resources" },
    { name: "Webinars", href: "/resources" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Partners", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  support: [
    { name: "Help Center", href: "/resources" },
    { name: "Training", href: "/resources" },
    { name: "Community", href: "/resources" },
    { name: "Status", href: "/resources" }
  ]
};

export function Footer() {
  return (
    <footer className="relative bg-secondary-dark bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-tech rounded-2xl flex items-center justify-center shadow-glow">
                  <div className="w-6 h-6 bg-primary-foreground rounded-lg" />
                </div>
                <span className="text-2xl font-display font-bold text-gradient-tech">Integration Objects</span>
              </div>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed font-body text-lg">
                Empowering Industry 4.0 transformation through innovative OPC UA solutions, 
                AI-powered automation, and seamless IT-OT integration.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-primary-foreground/70 hover:text-secondary transition-colors duration-300 group cursor-pointer">
                  <div className="p-2 rounded-lg bg-secondary/10 mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-medium">contact@integrationobjects.com</span>
                </div>
                <div className="flex items-center text-primary-foreground/70 hover:text-secondary transition-colors duration-300 group cursor-pointer">
                  <div className="p-2 rounded-lg bg-secondary/10 mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-primary-foreground/70 hover:text-secondary transition-colors duration-300 group cursor-pointer">
                  <div className="p-2 rounded-lg bg-secondary/10 mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Silicon Valley, CA</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-display font-semibold mb-6 text-secondary text-lg">Solutions</h3>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-all duration-300 font-medium relative group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-tech group-hover:w-full transition-all duration-300 rounded-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-display font-semibold mb-6 text-secondary text-lg">Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-all duration-300 font-medium relative group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-tech group-hover:w-full transition-all duration-300 rounded-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display font-semibold mb-6 text-secondary text-lg">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-all duration-300 font-medium relative group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-tech group-hover:w-full transition-all duration-300 rounded-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-display font-semibold mb-6 text-secondary text-lg">Stay Updated</h3>
              <p className="text-primary-foreground/70 mb-6 font-body leading-relaxed">
                Get the latest Industry 4.0 insights and product updates.
              </p>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  className="ai-interface-card border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-accent rounded-xl h-12"
                />
                <Button 
                  variant="default"
                  size="lg"
                  className="w-full group bg-gradient-primary hover:shadow-glow"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-tech opacity-30" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 mb-4 md:mb-0 font-medium">
            © 2024 Integration Objects. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="p-3 rounded-xl bg-primary-foreground/5 text-primary-foreground/60 hover:text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-xl bg-primary-foreground/5 text-primary-foreground/60 hover:text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110 group"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-xl bg-primary-foreground/5 text-primary-foreground/60 hover:text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}