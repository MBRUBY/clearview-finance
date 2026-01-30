import { Stock } from "@/data/stockData";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface StockRowProps {
  stock: Stock;
}

const StockRow = ({ stock }: StockRowProps) => {
  const navigate = useNavigate();
  const isPositive = stock.change >= 0;

  return (
    <div 
      className="stock-row"
      onClick={() => navigate(`/stock/${stock.ticker}`)}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
          <span className="text-sm font-semibold text-secondary-foreground">
            {stock.ticker.slice(0, 2)}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground">{stock.name}</p>
          <p className="text-text-tertiary text-sm">{stock.ticker}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-medium text-foreground tabular-nums">
          ${stock.price.toFixed(2)}
        </p>
        <p className={cn(
          "text-sm font-medium tabular-nums",
          isPositive ? "text-positive" : "text-negative"
        )}>
          {isPositive ? "+" : ""}{stock.change.toFixed(2)} ({isPositive ? "+" : ""}{stock.changePercent.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
};

export default StockRow;
