import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus, Mic, Brain, Clock, MessageSquare } from "lucide-react";

interface ScoreData {
  category: string;
  current: number;
  previous: number;
  normal: number;
  icon: React.ComponentType<any>;
  description: string;
  subScores?: {
    name: string;
    score: number;
  }[];
}

interface ScoresBreakdownProps {
  className?: string;
}

// todo: remove mock functionality
const mockScores: ScoreData[] = [
  {
    category: "Speech Analysis",
    current: 72,
    previous: 75,
    normal: 85,
    icon: Mic,
    description: "Analysis of speech patterns, fluency, and articulation",
    subScores: [
      { name: "Fluency", score: 68 },
      { name: "Articulation", score: 78 },
      { name: "Semantic Density", score: 70 }
    ]
  },
  {
    category: "Cognitive Performance",
    current: 78,
    previous: 82,
    normal: 88,
    icon: Brain,
    description: "Memory, attention, and executive function assessment",
    subScores: [
      { name: "Working Memory", score: 75 },
      { name: "Attention", score: 82 },
      { name: "Executive Function", score: 76 }
    ]
  },
  {
    category: "Processing Speed",
    current: 65,
    previous: 68,
    normal: 80,
    icon: Clock,
    description: "Speed of cognitive processing and reaction time",
    subScores: [
      { name: "Simple Reaction", score: 70 },
      { name: "Choice Reaction", score: 62 },
      { name: "Processing Efficiency", score: 63 }
    ]
  },
  {
    category: "Language Skills",
    current: 80,
    previous: 78,
    normal: 86,
    icon: MessageSquare,
    description: "Vocabulary, naming, and language comprehension",
    subScores: [
      { name: "Vocabulary", score: 85 },
      { name: "Naming", score: 76 },
      { name: "Comprehension", score: 79 }
    ]
  }
];

export default function ScoresBreakdown({ className }: ScoresBreakdownProps) {
  const getTrend = (current: number, previous: number) => {
    const difference = current - previous;
    if (Math.abs(difference) < 2) return { icon: Minus, text: "No Change", color: "text-muted-foreground" };
    if (difference > 0) return { icon: TrendingUp, text: `+${difference}`, color: "text-chart-3" };
    return { icon: TrendingDown, text: `${difference}`, color: "text-destructive" };
  };

  const getScoreColor = (score: number, normal: number) => {
    const percentage = (score / normal) * 100;
    if (percentage >= 90) return "text-chart-3";
    if (percentage >= 75) return "text-chart-4";
    if (percentage >= 60) return "text-primary";
    return "text-destructive";
  };

  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      {mockScores.map((scoreData, index) => {
        const trend = getTrend(scoreData.current, scoreData.previous);
        const scoreColor = getScoreColor(scoreData.current, scoreData.normal);
        
        return (
          <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-score-${index}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <scoreData.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{scoreData.category}</CardTitle>
                    <p className="text-sm text-muted-foreground">{scoreData.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className={`text-2xl font-bold ${scoreColor}`}>{scoreData.current}</span>
                    <span className="text-sm text-muted-foreground">/{scoreData.normal}</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${trend.color} text-xs`}>
                    <trend.icon className="w-3 h-3" />
                    <span>{trend.text}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Overall Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress to Normal</span>
                  <span className="font-medium">{Math.round((scoreData.current / scoreData.normal) * 100)}%</span>
                </div>
                <Progress value={(scoreData.current / scoreData.normal) * 100} className="h-2" />
              </div>

              {/* Sub-scores */}
              {scoreData.subScores && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Detailed Breakdown</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {scoreData.subScores.map((subScore, subIndex) => (
                      <div key={subIndex} className="text-center p-2 bg-secondary/20 rounded-md">
                        <p className="text-xs text-muted-foreground">{subScore.name}</p>
                        <p className="font-semibold text-foreground">{subScore.score}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="flex justify-between items-center">
                <Badge 
                  variant={scoreData.current >= scoreData.normal * 0.9 ? "default" : scoreData.current >= scoreData.normal * 0.75 ? "secondary" : "destructive"}
                  data-testid={`badge-status-${index}`}
                >
                  {scoreData.current >= scoreData.normal * 0.9 ? "Normal" : scoreData.current >= scoreData.normal * 0.75 ? "Mild Concern" : "Needs Attention"}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  Previous: {scoreData.previous}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}