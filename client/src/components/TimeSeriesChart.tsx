import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TimeSeriesData {
  date: string;
  riskScore: number;
  speechScore: number;
  cognitiveScore: number;
}

interface TimeSeriesChartProps {
  data: TimeSeriesData[];
  className?: string;
}

// todo: remove mock functionality
const mockData: TimeSeriesData[] = [
  { date: "Jan 15", riskScore: 15, speechScore: 85, cognitiveScore: 90 },
  { date: "Feb 12", riskScore: 18, speechScore: 82, cognitiveScore: 88 },
  { date: "Mar 10", riskScore: 22, speechScore: 78, cognitiveScore: 85 },
  { date: "Apr 14", riskScore: 28, speechScore: 75, cognitiveScore: 82 },
  { date: "May 16", riskScore: 32, speechScore: 72, cognitiveScore: 80 },
  { date: "Jun 18", riskScore: 35, speechScore: 70, cognitiveScore: 78 },
];

export default function TimeSeriesChart({ data = mockData, className }: TimeSeriesChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-card-border rounded-lg shadow-lg p-3">
          <p className="font-medium text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.dataKey === 'riskScore' ? '' : '/100'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={className} data-testid="card-time-series">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Risk Progression Over Time
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-muted-foreground">Risk Score</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span className="text-muted-foreground">Speech Score</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-chart-3 rounded-full" />
              <span className="text-muted-foreground">Cognitive Score</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="riskScore"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
                name="Risk Score"
              />
              <Line
                type="monotone"
                dataKey="speechScore"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 3 }}
                name="Speech Score"
              />
              <Line
                type="monotone"
                dataKey="cognitiveScore"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 3 }}
                name="Cognitive Score"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <p className="text-muted-foreground">Latest Risk</p>
            <p className="font-semibold text-primary">{data[data.length - 1]?.riskScore}</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Speech Score</p>
            <p className="font-semibold text-secondary">{data[data.length - 1]?.speechScore}/100</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Cognitive Score</p>
            <p className="font-semibold text-chart-3">{data[data.length - 1]?.cognitiveScore}/100</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}