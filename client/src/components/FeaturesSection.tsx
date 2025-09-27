import { Brain, Mic, BarChart3, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "AI Speech Analysis",
    description: "Advanced speech pattern recognition detects subtle changes in language and communication patterns that may indicate cognitive decline.",
    color: "text-primary bg-primary/10"
  },
  {
    icon: Brain,
    title: "Cognitive Testing",
    description: "Comprehensive cognitive assessments evaluate memory, attention, and executive function through scientifically validated tests.",
    color: "text-secondary bg-secondary/10"
  },
  {
    icon: BarChart3,
    title: "Risk Dashboard",
    description: "Interactive visualizations track cognitive health over time with personalized risk scores and trend analysis.",
    color: "text-chart-3 bg-chart-3/10"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "HIPAA-compliant platform ensures your sensitive health data is protected with enterprise-grade security measures.",
    color: "text-chart-4 bg-chart-4/10"
  },
  {
    icon: Clock,
    title: "Early Detection",
    description: "Detect potential cognitive changes years before traditional methods, enabling earlier intervention and better outcomes.",
    color: "text-chart-5 bg-chart-5/10"
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Share insights with healthcare providers and family members to create a comprehensive support network.",
    color: "text-primary bg-primary/10"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Cognitive Health Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI technology combines multiple assessment methods to provide the most accurate 
            and comprehensive cognitive health evaluation available.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}