import { NewsArticle } from "@/data/stockData";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  article: NewsArticle;
  onClick?: () => void;
}

const NewsCard = ({ article, onClick }: NewsCardProps) => {
  return (
    <article
      onClick={onClick}
      className="news-card cursor-pointer group"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-meta">{article.source}</span>
        <span className="text-text-tertiary">•</span>
        <span className="text-meta">{article.timestamp}</span>
        {article.relatedTickers && article.relatedTickers.length > 0 && (
          <>
            <span className="text-text-tertiary">•</span>
            <div className="flex gap-1">
              {article.relatedTickers.map((ticker) => (
                <span
                  key={ticker}
                  className="text-xs px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground font-medium"
                >
                  {ticker}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      
      <h3 className="text-headline text-base mb-2 group-hover:text-text-secondary transition-colors">
        {article.headline}
      </h3>
      
      <p className="text-body line-clamp-2">
        {article.summary}
      </p>
    </article>
  );
};

export default NewsCard;
