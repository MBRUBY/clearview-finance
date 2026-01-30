import Navigation from "@/components/Navigation";
import StockRow from "@/components/StockRow";
import { portfolioStocks } from "@/data/stockData";
import { Briefcase } from "lucide-react";

const Portfolio = () => {
  const totalValue = portfolioStocks.reduce((sum, stock) => sum + stock.price * 100, 0); // Assuming 100 shares each
  const totalChange = portfolioStocks.reduce((sum, stock) => sum + stock.change * 100, 0);
  const totalChangePercent = (totalChange / totalValue) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container py-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="section-title mb-0">My Portfolio</h1>
            <p className="text-text-secondary text-sm">
              {portfolioStocks.length} holdings
            </p>
          </div>
        </div>

        {/* Portfolio summary */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8 max-w-3xl">
          <p className="text-text-tertiary text-sm mb-1">Portfolio Value</p>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-foreground tabular-nums">
              ${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className={`text-sm font-medium ${totalChange >= 0 ? "text-positive" : "text-negative"}`}>
              {totalChange >= 0 ? "+" : ""}${Math.abs(totalChange).toFixed(2)} ({totalChange >= 0 ? "+" : ""}{totalChangePercent.toFixed(2)}%)
            </span>
          </div>
        </div>

        {/* Stock list */}
        <div className="bg-card border border-border rounded-lg overflow-hidden max-w-3xl">
          {portfolioStocks.map((stock) => (
            <StockRow key={stock.id} stock={stock} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
