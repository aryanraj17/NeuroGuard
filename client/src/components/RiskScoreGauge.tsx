import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface RiskScoreGaugeProps {
  score: number; // 0-100
  previousScore?: number;
  className?: string;
}

export default function RiskScoreGauge({ score, previousScore, className }: RiskScoreGaugeProps) {
  const getRiskLevel = (score: number) => {
    if (score <= 25) return { level: "Low", color: "text-chart-3 bg-chart-3/10", bgColor: "stroke-chart-3" };
    if (score <= 50) return { level: "Mild", color: "text-chart-4 bg-chart-4/10", bgColor: "stroke-chart-4" };
    if (score <= 75) return { level: "Moderate", color: "text-destructive bg-destructive/10", bgColor: "stroke-destructive" };
    return { level: "High", color: "text-destructive bg-destructive/20", bgColor: "stroke-destructive" };
  };

  const getTrend = () => {
    if (!previousScore) return null;
    const difference = score - previousScore;
    if (Math.abs(difference) < 2) return { icon: Minus, text: "No Change", color: "text-muted-foreground" };
    if (difference > 0) return { icon: TrendingUp, text: `+${difference.toFixed(1)}`, color: "text-destructive" };
    return { icon: TrendingDown, text: `${difference.toFixed(1)}`, color: "text-chart-3" };
  };

  const riskLevel = getRiskLevel(score);
  const trend = getTrend();
  const circumference = 2 * Math.PI * 80;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <Card className={`${className}`} data-testid="card-risk-score">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold">Current Risk Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        {/* Circular Progress */}
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-muted/20"
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className={`${riskLevel.bgColor} transition-all duration-1000 ease-out`}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Score in center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-foreground">{score}</span>
            <span className="text-muted-foreground text-sm">/ 100</span>
          </div>
        </div>

        {/* Risk Level Badge */}
        <div className="flex items-center space-x-3">
          <Badge className={`${riskLevel.color} text-lg px-4 py-2`} data-testid="badge-risk-level">
            {riskLevel.level} Risk
          </Badge>
          {trend && (
            <div className={`flex items-center space-x-1 ${trend.color}`}>
              <trend.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{trend.text}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            {score <= 25 && "Your cognitive assessment shows normal patterns. Continue regular monitoring."}
            {score > 25 && score <= 50 && "Some mild changes detected. Consider discussing with your healthcare provider."}
            {score > 50 && score <= 75 && "Moderate changes observed. We recommend scheduling a consultation."}
            {score > 75 && "Significant changes detected. Please consult with a healthcare professional promptly."}
          </p>
          {previousScore && (
            <p className="text-xs text-muted-foreground">
              Compared to previous assessment: {previousScore}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}