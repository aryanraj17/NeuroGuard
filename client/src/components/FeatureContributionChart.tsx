import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContributionData {
  name: string;
  value: number;
  color: string;
  description: string;
}

interface FeatureContributionChartProps {
  className?: string;
}

// todo: remove mock functionality
const mockPieData: ContributionData[] = [
  { 
    name: "Speech Patterns", 
    value: 45, 
    color: "hsl(var(--primary))",
    description: "Pauses, hesitations, and word-finding difficulties"
  },
  { 
    name: "Memory Tasks", 
    value: 30, 
    color: "hsl(var(--chart-2))",
    description: "Short-term and working memory performance"
  },
  { 
    name: "Attention Tests", 
    value: 15, 
    color: "hsl(var(--chart-3))",
    description: "Sustained attention and focus capabilities"
  },
  { 
    name: "Language Skills", 
    value: 10, 
    color: "hsl(var(--chart-4))",
    description: "Vocabulary, naming, and language comprehension"
  }
];

const mockBarData = [
  { name: "Semantic Fluency", current: 65, normal: 85, risk: 35 },
  { name: "Working Memory", current: 72, normal: 88, risk: 28 },
  { name: "Processing Speed", current: 58, normal: 82, risk: 42 },
  { name: "Executive Function", current: 70, normal: 86, risk: 30 },
  { name: "Verbal Learning", current: 68, normal: 84, risk: 32 }
];

export default function FeatureContributionChart({ className }: FeatureContributionChartProps) {
  const [viewType, setViewType] = useState<'pie' | 'bar'>('pie');

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-card-border rounded-lg shadow-lg p-3 max-w-xs">
          <p className="font-medium text-foreground">{data.name}</p>
          {viewType === 'pie' ? (
            <>
              <p className="text-sm text-primary">{data.value}% contribution</p>
              <p className="text-xs text-muted-foreground mt-1">{data.description}</p>
            </>
          ) : (
            <div className="space-y-1 text-sm">
              <p>Current: <span className="text-primary">{data.current}</span></p>
              <p>Normal Range: <span className="text-chart-3">{data.normal}</span></p>
              <p>Risk Contribution: <span className="text-destructive">{data.risk}%</span></p>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={className} data-testid="card-feature-contribution">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Feature Contribution Analysis</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant={viewType === 'pie' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewType('pie')}
              data-testid="button-pie-view"
            >
              Overview
            </Button>
            <Button
              variant={viewType === 'bar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewType('bar')}
              data-testid="button-bar-view"
            >
              Details
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {viewType === 'pie' ? (
              <PieChart>
                <Pie
                  data={mockPieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {mockPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            ) : (
              <BarChart data={mockBarData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  className="text-muted-foreground"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  className="text-muted-foreground"
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="current" fill="hsl(var(--primary))" name="Current Score" />
                <Bar dataKey="normal" fill="hsl(var(--chart-3))" name="Normal Range" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        {viewType === 'pie' && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {mockPieData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.value}%</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {viewType === 'bar' && (
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Comparing your current performance to normal ranges. Higher risk contributions indicate areas requiring attention.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}