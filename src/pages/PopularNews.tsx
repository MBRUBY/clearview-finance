import Navigation from "@/components/Navigation";
import StockMarquee from "@/components/StockMarquee";
import NewsCard from "@/components/NewsCard";
import { popularNews } from "@/data/stockData";
import { TrendingUp } from "lucide-react";

const PopularNews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StockMarquee />

      <main className="container py-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="section-title mb-0">Popular Today</h1>
            <p className="text-text-secondary text-sm">
              Most-read financial news
            </p>
          </div>
        </div>

        <div className="grid gap-4 max-w-3xl">
          {popularNews.map((article, index) => (
            <div key={article.id} className="relative">
              <div className="absolute -left-8 top-5 hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                {index + 1}
              </div>
              <NewsCard article={article} />
            </div>
          ))}
        </div>

        {popularNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary">No popular news available.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PopularNews;
