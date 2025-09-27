import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, LogOut, Settings, User, Bell, Download, Calendar } from "lucide-react";
import { Link, useLocation } from "wouter";
import RiskScoreGauge from "@/components/RiskScoreGauge";
import TimeSeriesChart from "@/components/TimeSeriesChart";
import FeatureContributionChart from "@/components/FeatureContributionChart";
import ScoresBreakdown from "@/components/ScoresBreakdown";
import TestHistoryTable from "@/components/TestHistoryTable";
import ThemeToggle from "@/components/ThemeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// todo: remove mock functionality
const mockUser = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  memberSince: "January 2024",
  totalAssessments: 8,
  lastAssessment: "June 18, 2024"
};

const mockTimeSeriesData = [
  { date: "Jan 15", riskScore: 15, speechScore: 85, cognitiveScore: 90 },
  { date: "Feb 12", riskScore: 18, speechScore: 82, cognitiveScore: 88 },
  { date: "Mar 10", riskScore: 22, speechScore: 78, cognitiveScore: 85 },
  { date: "Apr 14", riskScore: 28, speechScore: 75, cognitiveScore: 82 },
  { date: "May 16", riskScore: 32, speechScore: 72, cognitiveScore: 80 },
  { date: "Jun 18", riskScore: 35, speechScore: 70, cognitiveScore: 78 },
];

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    console.log('Logging out...'); // todo: remove mock functionality
    setLocation("/");
  };

  const handleNewAssessment = () => {
    console.log('Starting new assessment...'); // todo: remove mock functionality
    alert('Assessment feature will be available soon!');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover-elevate rounded-lg px-2 py-1">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">NeuroGuard</span>
            </Link>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleNewAssessment}
                className="px-6"
                data-testid="button-new-assessment"
              >
                New Assessment
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" data-testid="button-notifications">
                  <Bell className="h-5 w-5" />
                </Button>
                <ThemeToggle />
                <Button variant="ghost" size="icon" data-testid="button-settings">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleLogout}
                  data-testid="button-logout"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, {mockUser.name.split(' ')[0]}
              </h1>
              <p className="text-muted-foreground">
                Here's your cognitive health summary for today
              </p>
            </div>
            <Card className="px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{mockUser.totalAssessments}</p>
                  <p className="text-sm text-muted-foreground">Assessments</p>
                </div>
                <div className="border-l border-border h-12"></div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">Last Assessment</p>
                  <p className="text-sm text-muted-foreground">{mockUser.lastAssessment}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-primary">35</p>
                <p className="text-sm text-muted-foreground">Current Risk</p>
                <Badge className="mt-2 bg-chart-4/10 text-chart-4">Mild</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-secondary">70</p>
                <p className="text-sm text-muted-foreground">Speech Score</p>
                <Badge className="mt-2 bg-secondary/10 text-secondary">Good</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-chart-3">78</p>
                <p className="text-sm text-muted-foreground">Cognitive Score</p>
                <Badge className="mt-2 bg-chart-3/10 text-chart-3">Normal</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-chart-4">+3</p>
                <p className="text-sm text-muted-foreground">Risk Change</p>
                <Badge className="mt-2 bg-destructive/10 text-destructive">Increased</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Risk Score - Prominent */}
          <div className="xl:col-span-1">
            <RiskScoreGauge score={35} previousScore={32} />
          </div>
          
          {/* Time Series Chart */}
          <div className="xl:col-span-2">
            <TimeSeriesChart data={mockTimeSeriesData} />
          </div>
        </div>

        {/* Secondary Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Feature Contribution Chart */}
          <FeatureContributionChart />
          
          {/* Recent Insights Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Recent Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h4 className="font-medium text-foreground mb-2">Speech Pattern Changes</h4>
                <p className="text-sm text-muted-foreground">
                  We detected increased pauses and hesitations in your recent assessment. 
                  This could indicate early changes in language processing.
                </p>
              </div>
              <div className="p-4 bg-chart-3/5 rounded-lg border-l-4 border-chart-3">
                <h4 className="font-medium text-foreground mb-2">Memory Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Your memory scores remain stable. Continue with regular cognitive exercises 
                  to maintain current performance levels.
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <Button variant="outline" size="sm" data-testid="button-view-insights">
                  View All Insights
                </Button>
                <Button variant="ghost" size="sm" data-testid="button-download-report">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scores Breakdown */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Detailed Analysis</h2>
          <ScoresBreakdown />
        </div>

        {/* Test History */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Assessment History</h2>
          <TestHistoryTable />
        </div>
      </main>
    </div>
  );
}