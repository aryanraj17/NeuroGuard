import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Neurologist, Johns Hopkins",
    avatar: "/api/placeholder/64/64", // todo: remove mock functionality
    content: "NeuroGuard provides invaluable early detection capabilities. The speech analysis technology has helped me identify patients who need further evaluation much earlier than traditional methods.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Family Caregiver",
    avatar: "/api/placeholder/64/64", // todo: remove mock functionality
    content: "The peace of mind this platform provides is incredible. We caught early signs in my father and were able to start interventions that have made a real difference in his quality of life.",
    rating: 5
  },
  {
    name: "Dr. James Thompson",
    role: "Geriatrician",
    avatar: "/api/placeholder/64/64", // todo: remove mock functionality
    content: "The comprehensive dashboard and trend analysis help me track my patients' cognitive health over time. It's become an essential tool in my practice.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what doctors and families are saying about NeuroGuard's impact on early detection and cognitive health monitoring.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-chart-4 text-chart-4" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">10,000+</p>
              <p className="text-sm text-muted-foreground">Assessments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-chart-3">500+</p>
              <p className="text-sm text-muted-foreground">Healthcare Providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}