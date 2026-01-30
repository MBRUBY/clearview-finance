import { cn } from "@/lib/utils";

interface PriceChartProps {
  isPositive: boolean;
  className?: string;
}

const PriceChart = ({ isPositive, className }: PriceChartProps) => {
  // Generate a simple placeholder chart path
  const points = [];
  const height = 120;
  const width = 400;
  const segments = 20;
  
  let y = height / 2;
  for (let i = 0; i <= segments; i++) {
    const x = (width / segments) * i;
    y = y + (Math.random() - 0.5) * 20;
    y = Math.max(20, Math.min(height - 20, y));
    points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
  }

  // Adjust final point for positive/negative trend
  const finalY = isPositive ? height * 0.3 : height * 0.7;
  points[points.length - 1] = `L ${width} ${finalY}`;

  const pathData = points.join(" ");

  return (
    <div className={cn("w-full bg-surface rounded-lg border border-border p-4", className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-32"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`gradient-${isPositive ? 'positive' : 'negative'}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={isPositive ? "hsl(142, 76%, 36%)" : "hsl(0, 72%, 51%)"}
              stopOpacity="0.2"
            />
            <stop
              offset="100%"
              stopColor={isPositive ? "hsl(142, 76%, 36%)" : "hsl(0, 72%, 51%)"}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        
        {/* Area fill */}
        <path
          d={`${pathData} L ${width} ${height} L 0 ${height} Z`}
          fill={`url(#gradient-${isPositive ? 'positive' : 'negative'})`}
        />
        
        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={isPositive ? "hsl(142, 76%, 36%)" : "hsl(0, 72%, 51%)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      <div className="flex justify-between mt-3 text-text-tertiary text-xs">
        <span>9:30 AM</span>
        <span>12:00 PM</span>
        <span>4:00 PM</span>
      </div>
    </div>
  );
};

export default PriceChart;
