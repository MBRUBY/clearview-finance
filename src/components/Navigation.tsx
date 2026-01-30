import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { allStocks } from "@/data/stockData";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/popular", label: "Popular News" },
    { path: "/portfolio", label: "My Portfolio" },
  ];

  const filteredStocks = searchQuery.length > 0
    ? allStocks.filter(
        (stock) =>
          stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          stock.ticker.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleStockSelect = (ticker: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);
    navigate(`/stock/${ticker}`);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
            FinNews
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link",
                  location.pathname === item.path && "nav-link-active"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary" />
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="h-9 w-64 rounded-md border border-border bg-surface pl-9 pr-4 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-1 focus:ring-ring transition-all"
            />
          </div>

          {isSearchFocused && filteredStocks.length > 0 && (
            <div className="absolute top-full mt-2 w-full rounded-md border border-border bg-card shadow-lg overflow-hidden">
              {filteredStocks.slice(0, 5).map((stock) => (
                <button
                  key={stock.id}
                  onClick={() => handleStockSelect(stock.ticker)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-hover transition-colors text-left"
                >
                  <div>
                    <span className="font-medium text-foreground text-sm">{stock.ticker}</span>
                    <span className="text-text-secondary text-sm ml-2">{stock.name}</span>
                  </div>
                  <span className={cn(
                    "text-sm font-medium",
                    stock.change >= 0 ? "text-positive" : "text-negative"
                  )}>
                    {stock.change >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-link text-xs",
                location.pathname === item.path && "nav-link-active"
              )}
            >
              {item.label.split(" ")[0]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
