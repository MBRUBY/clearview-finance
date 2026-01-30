import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MetricCard from "@/components/MetricCard";
import PriceChart from "@/components/PriceChart";
import NewsCard from "@/components/NewsCard";
import { allStocks, newsArticles } from "@/data/stockData";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const StockDetail = () => {
  const { ticker } = useParams<{ ticker: string }>();
  const stock = allStocks.find((s) => s.ticker === ticker);

  if (!stock) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container py-16 text-center">
          <h1 className="text-xl font-medium text-foreground mb-2">Stock not found</h1>
          <p className="text-text-secondary mb-6">The ticker "{ticker}" doesn't exist in our database.</p>
          <Link to="/portfolio" className="text-text-secondary hover:text-foreground transition-colors">
            ← Back to Portfolio
          </Link>
        </main>
      </div>
    );
  }

  const isPositive = stock.change >= 0;
  const relatedNews = newsArticles.filter(
    (article) => article.relatedTickers?.includes(stock.ticker)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container py-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Portfolio</span>
        </Link>

        {/* Stock header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-base font-semibold text-secondary-foreground">
                {stock.ticker.slice(0, 2)}
              </span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">{stock.name}</h1>
              <p className="text-text-secondary text-sm">{stock.ticker} • {stock.sector}</p>
            </div>
          </div>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-4xl font-semibold text-foreground tabular-nums">
              ${stock.price.toFixed(2)}
            </span>
            <span
              className={cn(
                "text-lg font-medium tabular-nums",
                isPositive ? "text-positive" : "text-negative"
              )}
            >
              {isPositive ? "+" : ""}{stock.change.toFixed(2)} ({isPositive ? "+" : ""}{stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Chart */}
            <div>
              <h2 className="section-title mb-4">Price Chart</h2>
              <PriceChart isPositive={isPositive} />
            </div>

            {/* About */}
            {stock.description && (
              <div>
                <h2 className="section-title mb-4">About</h2>
                <p className="text-body leading-relaxed">{stock.description}</p>
              </div>
            )}

            {/* Related news */}
            {relatedNews.length > 0 && (
              <div>
                <h2 className="section-title mb-4">Related News</h2>
                <div className="space-y-4">
                  {relatedNews.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Key metrics */}
          <div className="space-y-4">
            <h2 className="section-title">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard label="Market Cap" value={stock.marketCap || "—"} />
              <MetricCard label="Volume" value={stock.volume || "—"} />
              <MetricCard label="P/E Ratio" value={stock.peRatio?.toFixed(2) || "—"} />
              <MetricCard label="Sector" value={stock.sector || "—"} />
              <MetricCard label="52W High" value={stock.weekHigh52 ? `$${stock.weekHigh52}` : "—"} />
              <MetricCard label="52W Low" value={stock.weekLow52 ? `$${stock.weekLow52}` : "—"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StockDetail;
