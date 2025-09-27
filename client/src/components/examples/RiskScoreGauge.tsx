import RiskScoreGauge from '../RiskScoreGauge';

export default function RiskScoreGaugeExample() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <RiskScoreGauge score={32} previousScore={28} />
    </div>
  );
}