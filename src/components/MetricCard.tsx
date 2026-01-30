import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  className?: string;
}

const MetricCard = ({ label, value, className }: MetricCardProps) => {
  return (
    <div className={cn("metric-card", className)}>
      <p className="text-text-tertiary text-xs mb-1">{label}</p>
      <p className="text-foreground font-medium tabular-nums">{value}</p>
    </div>
  );
};

export default MetricCard;
