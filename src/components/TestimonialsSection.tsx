"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chuck Alexander",
    company: "",
    text: "Our IO Project Manager, was among the best project managers I have worked with. She not only had a very thorough knowledge of the technology, but was always responsive to project needs and deadlines, and worked/communicated well with the other team members. The field engineers that IO sent to the field (Angola) were always true subject matter experts, who travelled well. Administratively, the IO organization provided excellent support in managing travel logistics, shipping, visa application and invoicing."
  },
  {
    name: "Kim Fiddaman",
    company: "SAGE Automation",
    text: "The product (OPC AE Archiver) was exactly what I was looking for. It worked immediately, was painless to install and configure. It was very easy to purchase and download and it just worked. I'm very happy with the product."
  },
  {
    name: "Philippe Dubreuil",
    company: "TotalEnergies",
    text: "With SIOTH, we will be able to ensure the IT-OT convergence which has been a challenge to us for many years, for cyber security reasons. We can now move on with closing the gap between IT-OT, and streamlining critical applications in which we expect significant incremental value to TotalEnergies."
  },
  {
    name: "Robert L. Luttrell, Jr.",
    company: "ExxonMobil Production Company",
    text: "Excellent technical support. Each IO employee that I encountered and interfaced with was highly qualified, professional, and retained a 'can-do' frame of mind even during challenging moments."
  },
  {
    name: "Ramesh Desabhotla",
    company: "Esso Highlands Limited",
    text: "I am impressed with the service provided by the Integration Objects team while we were troubleshooting the OPC HDA data collection issue. Keep up the good customer support."
  },
  {
    name: "Kevin Komara",
    company: "Customized Energy Solutions",
    text: "I cannot say enough about the AWESOME support I have receive from IO on my issues with UA Wrapper !! They worked VERY hard and fixed ALL of my issues. !! Their product works flawlessly to integrate the SISCO AX-S4 ICCP/OPC DA Server into Inductive Automation's Ignition System using OPC UA !!"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-background">
      {/* Subtle Mesh Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-mesh)', opacity: 0.06 }} />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl glass-effect border border-accent/20 text-accent font-semibold mb-8 text-sm">
            <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-scale-pulse" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient-tech leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from industry leaders who trust our solutions for their critical operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group relative overflow-hidden ai-interface-card border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-glow">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Top Border Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
                
                <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 relative z-10">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <cite className="text-xl font-display font-semibold text-foreground not-italic">
                      {testimonials[currentIndex].name}
                    </cite>
                    {testimonials[currentIndex].company && (
                      <p className="text-primary mt-1 font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 sm:mt-0">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Enhanced Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};