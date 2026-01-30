export interface Stock {
  id: string;
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap?: string;
  volume?: string;
  peRatio?: number;
  weekHigh52?: number;
  weekLow52?: number;
  sector?: string;
  description?: string;
}

export interface NewsArticle {
  id: string;
  headline: string;
  source: string;
  timestamp: string;
  summary: string;
  relatedTickers?: string[];
  isPopular?: boolean;
}

// Placeholder portfolio stocks
export const portfolioStocks: Stock[] = [
  {
    id: "1",
    name: "Apple Inc.",
    ticker: "AAPL",
    price: 178.72,
    change: 2.34,
    changePercent: 1.33,
    marketCap: "2.79T",
    volume: "52.3M",
    peRatio: 28.5,
    weekHigh52: 199.62,
    weekLow52: 124.17,
    sector: "Technology",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
  },
  {
    id: "2",
    name: "Microsoft Corporation",
    ticker: "MSFT",
    price: 378.91,
    change: -1.23,
    changePercent: -0.32,
    marketCap: "2.81T",
    volume: "18.7M",
    peRatio: 35.2,
    weekHigh52: 420.82,
    weekLow52: 275.37,
    sector: "Technology",
    description: "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.",
  },
  {
    id: "3",
    name: "Tesla, Inc.",
    ticker: "TSLA",
    price: 248.50,
    change: 5.67,
    changePercent: 2.34,
    marketCap: "789.2B",
    volume: "98.4M",
    peRatio: 62.1,
    weekHigh52: 299.29,
    weekLow52: 138.80,
    sector: "Automotive",
    description: "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems.",
  },
  {
    id: "4",
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    price: 495.22,
    change: 12.45,
    changePercent: 2.58,
    marketCap: "1.22T",
    volume: "45.2M",
    peRatio: 68.3,
    weekHigh52: 505.48,
    weekLow52: 138.84,
    sector: "Technology",
    description: "NVIDIA Corporation provides graphics, and compute and networking solutions in the United States, Taiwan, China, and internationally.",
  },
  {
    id: "5",
    name: "Amazon.com, Inc.",
    ticker: "AMZN",
    price: 151.94,
    change: -0.87,
    changePercent: -0.57,
    marketCap: "1.57T",
    volume: "38.9M",
    peRatio: 78.4,
    weekHigh52: 189.77,
    weekLow52: 88.12,
    sector: "Consumer Cyclical",
    description: "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores.",
  },
  {
    id: "6",
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    price: 141.80,
    change: 0.92,
    changePercent: 0.65,
    marketCap: "1.78T",
    volume: "22.1M",
    peRatio: 25.8,
    weekHigh52: 153.78,
    weekLow52: 88.58,
    sector: "Technology",
    description: "Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.",
  },
];

// All searchable stocks
export const allStocks: Stock[] = [
  ...portfolioStocks,
  {
    id: "7",
    name: "Meta Platforms, Inc.",
    ticker: "META",
    price: 326.49,
    change: 4.21,
    changePercent: 1.31,
    marketCap: "838.7B",
    volume: "15.3M",
    sector: "Technology",
    description: "Meta Platforms, Inc. engages in the development of products that enable people to connect and share with friends and family.",
  },
  {
    id: "8",
    name: "JPMorgan Chase & Co.",
    ticker: "JPM",
    price: 152.87,
    change: -0.45,
    changePercent: -0.29,
    marketCap: "439.8B",
    volume: "8.2M",
    sector: "Financial Services",
    description: "JPMorgan Chase & Co. operates as a financial services company worldwide.",
  },
  {
    id: "9",
    name: "Visa Inc.",
    ticker: "V",
    price: 258.34,
    change: 1.12,
    changePercent: 0.44,
    marketCap: "518.2B",
    volume: "5.8M",
    sector: "Financial Services",
    description: "Visa Inc. operates as a payments technology company worldwide.",
  },
  {
    id: "10",
    name: "Johnson & Johnson",
    ticker: "JNJ",
    price: 156.78,
    change: -0.23,
    changePercent: -0.15,
    marketCap: "378.4B",
    volume: "6.1M",
    sector: "Healthcare",
    description: "Johnson & Johnson researches and develops, manufactures, and sells various products in the healthcare field worldwide.",
  },
];

// Placeholder news articles
export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    headline: "Apple Reports Record Q4 Revenue Driven by iPhone 15 Sales",
    source: "Bloomberg",
    timestamp: "2 hours ago",
    summary: "Apple Inc. posted record-breaking fourth-quarter revenue, surpassing analyst expectations as iPhone 15 sales exceeded projections across all major markets.",
    relatedTickers: ["AAPL"],
    isPopular: true,
  },
  {
    id: "2",
    headline: "NVIDIA's AI Chip Demand Continues to Surge Amid Data Center Boom",
    source: "Reuters",
    timestamp: "3 hours ago",
    summary: "NVIDIA Corporation sees unprecedented demand for its AI-focused graphics processing units as major tech companies race to build out their AI infrastructure.",
    relatedTickers: ["NVDA"],
    isPopular: true,
  },
  {
    id: "3",
    headline: "Tesla Announces New Gigafactory Location in Southeast Asia",
    source: "Financial Times",
    timestamp: "4 hours ago",
    summary: "Tesla, Inc. revealed plans for a new manufacturing facility in Southeast Asia, marking its largest expansion outside of North America and Europe.",
    relatedTickers: ["TSLA"],
    isPopular: true,
  },
  {
    id: "4",
    headline: "Microsoft Cloud Revenue Beats Estimates as AI Services Gain Traction",
    source: "CNBC",
    timestamp: "5 hours ago",
    summary: "Microsoft's Azure cloud platform posted stronger-than-expected growth, driven by enterprise adoption of AI-powered services and OpenAI integration.",
    relatedTickers: ["MSFT"],
  },
  {
    id: "5",
    headline: "Amazon Web Services Introduces New Cost-Cutting Measures for Enterprises",
    source: "TechCrunch",
    timestamp: "6 hours ago",
    summary: "AWS announced a new suite of tools designed to help enterprise customers optimize their cloud spending without sacrificing performance or scalability.",
    relatedTickers: ["AMZN"],
  },
  {
    id: "6",
    headline: "Alphabet's Waymo Reaches 1 Million Autonomous Ride Milestone",
    source: "The Verge",
    timestamp: "7 hours ago",
    summary: "Waymo, Alphabet's self-driving car unit, has completed over one million fully autonomous rides across its operating cities, marking a significant industry milestone.",
    relatedTickers: ["GOOGL"],
  },
  {
    id: "7",
    headline: "Federal Reserve Signals Potential Rate Cuts in 2024",
    source: "Wall Street Journal",
    timestamp: "8 hours ago",
    summary: "The Federal Reserve indicated a more dovish stance on monetary policy, suggesting multiple rate cuts may be on the horizon as inflation shows signs of cooling.",
    isPopular: true,
  },
  {
    id: "8",
    headline: "Global Semiconductor Shortage Shows Signs of Easing",
    source: "Nikkei Asia",
    timestamp: "9 hours ago",
    summary: "Industry analysts report improving supply chain conditions as major chip manufacturers increase production capacity and lead times begin to normalize.",
    relatedTickers: ["NVDA", "AAPL"],
  },
];

export const popularNews = newsArticles.filter((article) => article.isPopular);
