import TimeSeriesChart from '../TimeSeriesChart';

export default function TimeSeriesChartExample() {
  const mockData = [
    { date: "Jan 15", riskScore: 15, speechScore: 85, cognitiveScore: 90 },
    { date: "Feb 12", riskScore: 18, speechScore: 82, cognitiveScore: 88 },
    { date: "Mar 10", riskScore: 22, speechScore: 78, cognitiveScore: 85 },
  ];
  
  return (
    <div className="p-8">
      <TimeSeriesChart data={mockData} />
    </div>
  );
}