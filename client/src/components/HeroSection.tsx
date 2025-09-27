import { Button } from "@/components/ui/button";
import { Brain, Shield, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Early Detection for 
                <span className="text-primary block">Better Tomorrow</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Advanced AI-powered speech analysis and cognitive testing to detect early signs of dementia. 
                Get insights that matter, when they matter most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8" data-testid="button-get-started">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="px-8" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Clinical Grade
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">AI Analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Cognitive Test</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-chart-3" />
                  </div>
                  <p className="text-xs text-muted-foreground">Risk Score</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-primary/5 rounded-lg p-3 border-l-4 border-primary">
                  <p className="text-sm font-medium">Speech Pattern Analysis</p>
                  <p className="text-xs text-muted-foreground">Normal patterns detected</p>
                </div>
                <div className="bg-secondary/5 rounded-lg p-3 border-l-4 border-secondary">
                  <p className="text-sm font-medium">Memory Assessment</p>
                  <p className="text-xs text-muted-foreground">Score: 92/100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}