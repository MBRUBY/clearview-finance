import { allStocks } from "@/data/stockData";
import { cn } from "@/lib/utils";

const StockMarquee = () => {
  const marqueeStocks = [...allStocks, ...allStocks]; // Duplicate for seamless loop

  return (
    <div className="w-full overflow-hidden border-b border-border bg-surface py-2">
      <div className="animate-marquee flex whitespace-nowrap">
        {marqueeStocks.map((stock, index) => (
          <div
            key={`${stock.id}-${index}`}
            className="inline-flex items-center gap-2 mx-6"
          >
            <span className="font-medium text-foreground text-sm">{stock.ticker}</span>
            <span className="text-text-secondary text-sm tabular-nums">${stock.price.toFixed(2)}</span>
            <span
              className={cn(
                "text-sm font-medium tabular-nums",
                stock.change >= 0 ? "text-positive" : "text-negative"
              )}
            >
              {stock.change >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockMarquee;
