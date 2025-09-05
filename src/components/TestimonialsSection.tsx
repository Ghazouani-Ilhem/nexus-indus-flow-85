"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

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
        <SectionHeader
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from industry leaders who trust our solutions for their critical operations."
        />

        <div className="max-w-4xl mx-auto">
          <Card className="group relative border border-border rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20 group-hover:text-primary/30 transition-colors duration-300" />
                
                <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <cite className="text-xl font-display font-semibold text-foreground not-italic group-hover:text-primary transition-colors duration-300">
                      {testimonials[currentIndex].name}
                    </cite>
                    {testimonials[currentIndex].company && (
                      <p className="text-primary mt-1 font-medium group-hover:text-accent transition-colors duration-300">
                        {testimonials[currentIndex].company}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 sm:mt-0">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full hover:scale-110 hover:shadow-glow transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full hover:scale-110 hover:shadow-glow transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-2 rounded-full transition-all duration-500 group ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-tech shadow-glow' 
                    : 'w-2 bg-primary/30 hover:bg-primary/50 hover:scale-125'
                }`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-tech rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};