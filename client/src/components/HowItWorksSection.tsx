import { ArrowRight, Mic, Brain, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: 1,
    icon: Mic,
    title: "Record Speech Sample",
    description: "Complete a simple 5-minute speech recording using guided prompts. Our AI analyzes speech patterns, pauses, and linguistic markers.",
    duration: "5 minutes",
    color: "text-primary bg-primary/10 border-primary/20"
  },
  {
    step: 2,
    icon: Brain,
    title: "Take Cognitive Assessment",
    description: "Complete interactive cognitive tests designed by neuropsychologists. Tests evaluate memory, attention, language, and executive function.",
    duration: "15 minutes",
    color: "text-secondary bg-secondary/10 border-secondary/20"
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "View Risk Analysis",
    description: "Receive your personalized risk assessment with detailed insights, trend analysis, and recommendations for next steps.",
    duration: "Instant results",
    color: "text-chart-3 bg-chart-3/10 border-chart-3/20"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get comprehensive cognitive health insights in just 20 minutes with our scientifically validated assessment process.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`${step.color} border-2 h-full`} data-testid={`card-step-${step.step}`}>
                <CardContent className="p-8 text-center space-y-6">
                  <div className="flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center relative`}>
                      <step.icon className="w-8 h-8" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="bg-background/50 rounded-full px-3 py-1 text-sm font-medium text-foreground inline-block">
                      {step.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 w-8 h-8 bg-background rounded-full items-center justify-center shadow-md border">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="px-8" data-testid="button-start-assessment">
            Start Your Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}