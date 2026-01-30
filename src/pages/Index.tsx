import Navigation from "@/components/Navigation";
import StockMarquee from "@/components/StockMarquee";
import NewsCard from "@/components/NewsCard";
import { newsArticles, portfolioStocks } from "@/data/stockData";

const Index = () => {
  // Filter news related to portfolio stocks
  const portfolioTickers = portfolioStocks.map((s) => s.ticker);
  const portfolioNews = newsArticles.filter(
    (article) =>
      !article.relatedTickers ||
      article.relatedTickers.some((ticker) => portfolioTickers.includes(ticker))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StockMarquee />

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="section-title mb-1">Your News Feed</h1>
          <p className="text-text-secondary text-sm">
            Latest updates on your portfolio stocks
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl">
          {portfolioNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {portfolioNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary">No news available for your portfolio stocks.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
