import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TestHistory {
  id: string;
  date: string;
  riskScore: number;
  speechScore: number;
  cognitiveScore: number;
  type: string;
  duration: string;
  status: "completed" | "in-progress" | "failed";
  change?: number;
}

interface TestHistoryTableProps {
  className?: string;
}

// todo: remove mock functionality
const mockHistory: TestHistory[] = [
  {
    id: "1",
    date: "2024-06-18",
    riskScore: 32,
    speechScore: 72,
    cognitiveScore: 80,
    type: "Full Assessment",
    duration: "18 mins",
    status: "completed",
    change: 3
  },
  {
    id: "2", 
    date: "2024-05-16",
    riskScore: 28,
    speechScore: 75,
    cognitiveScore: 82,
    type: "Full Assessment", 
    duration: "20 mins",
    status: "completed",
    change: -2
  },
  {
    id: "3",
    date: "2024-04-14",
    riskScore: 22,
    speechScore: 78,
    cognitiveScore: 85,
    type: "Speech Only",
    duration: "8 mins", 
    status: "completed",
    change: 4
  },
  {
    id: "4",
    date: "2024-03-10", 
    riskScore: 18,
    speechScore: 82,
    cognitiveScore: 88,
    type: "Full Assessment",
    duration: "22 mins",
    status: "completed",
    change: 3
  },
  {
    id: "5",
    date: "2024-02-12",
    riskScore: 15,
    speechScore: 85,
    cognitiveScore: 90,
    type: "Full Assessment", 
    duration: "19 mins",
    status: "completed",
    change: 0
  }
];

export default function TestHistoryTable({ className }: TestHistoryTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getRiskLevel = (score: number) => {
    if (score <= 25) return { level: "Low", color: "bg-chart-3/10 text-chart-3" };
    if (score <= 50) return { level: "Mild", color: "bg-chart-4/10 text-chart-4" };
    if (score <= 75) return { level: "Moderate", color: "bg-destructive/10 text-destructive" };
    return { level: "High", color: "bg-destructive/20 text-destructive" };
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-chart-3/10 text-chart-3">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-chart-4/10 text-chart-4">In Progress</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card className={className} data-testid="card-test-history">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Assessment History</span>
          </CardTitle>
          <Button variant="outline" size="sm" data-testid="button-export-history">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead>Speech</TableHead>
              <TableHead>Cognitive</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockHistory.map((test) => {
              const riskLevel = getRiskLevel(test.riskScore);
              
              return (
                <TableRow key={test.id} className="hover-elevate" data-testid={`row-test-${test.id}`}>
                  <TableCell className="font-medium">
                    {formatDate(test.date)}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{test.type}</span>
                      <span className="text-xs text-muted-foreground">{test.duration}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Badge className={riskLevel.color}>{test.riskScore}</Badge>
                      {test.change && (
                        <div className={`flex items-center ${test.change > 0 ? 'text-destructive' : 'text-chart-3'}`}>
                          {test.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          <span className="text-xs ml-1">{Math.abs(test.change)}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{test.speechScore}</span>
                    <span className="text-muted-foreground text-sm">/100</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{test.cognitiveScore}</span>
                    <span className="text-muted-foreground text-sm">/100</span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {test.duration}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(test.status)}
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      data-testid={`button-view-${test.id}`}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <p>Showing {mockHistory.length} assessments</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-chart-3 rounded-full" />
              <span>Improvement</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-destructive rounded-full" />
              <span>Decline</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}