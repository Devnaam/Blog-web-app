
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import RelatedArticles from "@/components/RelatedArticles";
import SocialSharing from "@/components/SocialSharing";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, TrendingUp, Target, Shield, BarChart3, CheckCircle } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // Enhanced blog post data with structured content
  const blogPost = {
    id: 1,
    title: "Top 5 Chart Patterns Every Trader Should Know",
    content: `
      <div class="blog-intro">
        <p class="intro-text">Chart patterns are one of the most powerful tools in a trader's arsenal. They help identify potential market movements and provide entry and exit points for trades. In this comprehensive guide, we'll explore the five most essential chart patterns that every trader should master to enhance their trading accuracy and profitability.</p>
      </div>
      
      <h2><span class="pattern-icon">📈</span> 1. Head and Shoulders Pattern</h2>
      <p>The head and shoulders pattern is one of the most reliable reversal patterns in technical analysis. It consists of three peaks, with the middle peak (head) being higher than the other two (shoulders). This pattern typically signals a trend reversal from bullish to bearish.</p>
      
      <h3>How to Identify:</h3>
      <ul class="pattern-steps">
        <li><strong>Left shoulder:</strong> First peak with moderate volume</li>
        <li><strong>Head:</strong> Higher peak with lower volume (divergence signal)</li>
        <li><strong>Right shoulder:</strong> Third peak similar in height to the left shoulder</li>
        <li><strong>Neckline:</strong> Support line connecting the lows between peaks</li>
      </ul>
      
      <div class="trading-tip">
        <h4>💡 Trading Tip:</h4>
        <p>Enter short positions when price breaks below the neckline with increased volume. Set stop-loss above the right shoulder.</p>
      </div>
      
      <h2><span class="pattern-icon">🔄</span> 2. Double Top and Double Bottom</h2>
      <p>These are powerful reversal patterns that occur at the end of uptrends (double top) or downtrends (double bottom). They indicate that the current trend is losing momentum and a reversal is likely to occur.</p>
      
      <h3>Key Characteristics:</h3>
      <ul class="pattern-steps">
        <li><strong>Double Top:</strong> Two peaks at approximately the same level</li>
        <li><strong>Double Bottom:</strong> Two troughs at approximately the same level</li>
        <li><strong>Volume:</strong> Should decrease on the second peak/trough</li>
        <li><strong>Confirmation:</strong> Break of support/resistance between the peaks/troughs</li>
      </ul>
      
      <h2><span class="pattern-icon">🔺</span> 3. Triangle Patterns</h2>
      <p>Triangles are continuation patterns that represent a period of consolidation before the price breaks out in the direction of the previous trend. There are three main types: ascending, descending, and symmetrical triangles.</p>
      
      <h3>Triangle Types:</h3>
      <ul class="pattern-steps">
        <li><strong>Ascending Triangle:</strong> Horizontal resistance, rising support (bullish)</li>
        <li><strong>Descending Triangle:</strong> Horizontal support, falling resistance (bearish)</li>
        <li><strong>Symmetrical Triangle:</strong> Converging trendlines (neutral until breakout)</li>
      </ul>
      
      <div class="trading-tip">
        <h4>⚠️ Important Note:</h4>
        <p>Wait for volume confirmation on breakout. False breakouts are common in triangle patterns.</p>
      </div>
      
      <h2><span class="pattern-icon">🏁</span> 4. Flag and Pennant Patterns</h2>
      <p>These short-term continuation patterns occur after a strong price movement (flagpole). Flags are rectangular-shaped consolidations, while pennants are triangular. Both typically lead to a continuation of the previous trend.</p>
      
      <h3>Pattern Elements:</h3>
      <ul class="pattern-steps">
        <li><strong>Flagpole:</strong> Sharp price movement with high volume</li>
        <li><strong>Flag/Pennant:</strong> Brief consolidation period</li>
        <li><strong>Volume:</strong> Should decrease during consolidation</li>
        <li><strong>Breakout:</strong> Continuation in flagpole direction with volume spike</li>
      </ul>
      
      <h2><span class="pattern-icon">☕</span> 5. Cup and Handle Pattern</h2>
      <p>This bullish continuation pattern resembles a cup with a handle when viewed on a chart. It indicates a period of consolidation followed by a breakout to new highs. The pattern is particularly effective for identifying long-term buying opportunities.</p>
      
      <h3>Formation Requirements:</h3>
      <ul class="pattern-steps">
        <li><strong>Cup:</strong> U-shaped base lasting several weeks to months</li>
        <li><strong>Handle:</strong> Short pullback near the rim of the cup</li>
        <li><strong>Volume:</strong> Higher on left side of cup, lower in middle and handle</li>
        <li><strong>Breakout:</strong> Price breaks above handle resistance with volume</li>
      </ul>
      
      <h2>📊 Advanced Pattern Trading Tips</h2>
      <p>Successful pattern trading requires more than just pattern recognition. Here are essential tips to improve your trading accuracy:</p>
      
      <ul class="pattern-steps">
        <li><strong>Multiple Timeframe Analysis:</strong> Confirm patterns on different timeframes</li>
        <li><strong>Volume Analysis:</strong> Always look for volume confirmation on breakouts</li>
        <li><strong>Risk Management:</strong> Never risk more than 2% of your account per trade</li>
        <li><strong>Market Context:</strong> Consider overall market trend and sentiment</li>
        <li><strong>Patience:</strong> Wait for clear pattern completion before entering trades</li>
      </ul>
      
      <div class="conclusion-section">
        <h2>🎯 Conclusion</h2>
        <p>Mastering these five chart patterns will significantly improve your trading accuracy and market analysis skills. Remember that patterns are probabilistic, not deterministic - they indicate likely outcomes, not guaranteed results. Always combine pattern analysis with proper risk management and other technical indicators for the best trading results.</p>
        
        <p>Start by practicing pattern recognition on historical charts before applying these concepts to live trading. The more you practice, the better you'll become at spotting these patterns in real-time market conditions.</p>
      </div>
    `,
    category: "Chart Patterns",
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Devnaam",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["Chart Patterns", "Technical Analysis", "Trading", "Market Analysis", "Investment Strategy"],
    description: "Master the five most essential chart patterns that every trader should know to improve their trading accuracy and market analysis skills."
  };

  // Key takeaways data
  const keyTakeaways = [
    {
      icon: TrendingUp,
      text: "Chart patterns help identify potential market reversals and continuations"
    },
    {
      icon: BarChart3,
      text: "Volume confirmation is crucial for pattern validity"
    },
    {
      icon: Shield,
      text: "Always use stop-losses to manage risk"
    },
    {
      icon: Target,
      text: "Combine patterns with other technical analysis tools"
    },
    {
      icon: CheckCircle,
      text: "Practice on historical data before live trading"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollProgress />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="aspect-[16/9] md:aspect-[16/6] overflow-hidden">
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <Badge className="mb-4 bg-[#F4B400] text-[#0D1B2A] font-semibold">
              {blogPost.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            {/* Reading time badge */}
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-[#F4B400]/20 text-[#F4B400] px-3 py-1 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                🕒 Estimated read time: {blogPost.readTime}
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blogPost.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <BlogBreadcrumb category={blogPost.category} title={blogPost.title} />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Table of Contents - Mobile */}
            <div className="lg:hidden">
              <TableOfContents content={blogPost.content} />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none dark:prose-invert finance-blog-content">
                <style>{`
                  .finance-blog-content .intro-text {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: #374151;
                    margin-bottom: 2rem;
                    font-weight: 400;
                  }
                  
                  .finance-blog-content .pattern-icon {
                    margin-right: 0.5rem;
                  }
                  
                  .finance-blog-content .pattern-steps {
                    list-style: none;
                    padding-left: 0;
                  }
                  
                  .finance-blog-content .pattern-steps li {
                    background: #F8FAFC;
                    border-left: 4px solid #F4B400;
                    padding: 0.75rem 1rem;
                    margin-bottom: 0.5rem;
                    border-radius: 0 4px 4px 0;
                  }
                  
                  .finance-blog-content .trading-tip {
                    background: linear-gradient(135deg, #0D1B2A 0%, #1E3A5F 100%);
                    color: white;
                    padding: 1.5rem;
                    border-radius: 8px;
                    margin: 1.5rem 0;
                  }
                  
                  .finance-blog-content .trading-tip h4 {
                    color: #F4B400;
                    margin-bottom: 0.5rem;
                  }
                  
                  .finance-blog-content .conclusion-section {
                    background: #F8FAFC;
                    padding: 2rem;
                    border-radius: 12px;
                    border: 1px solid #E5E7EB;
                    margin-top: 2rem;
                  }
                  
                  .finance-blog-content h2 {
                    color: #0D1B2A;
                    font-weight: 700;
                    font-size: 1.875rem;
                    margin-top: 3rem;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                  }
                  
                  .finance-blog-content h3 {
                    color: #1E3A5F;
                    font-weight: 600;
                    font-size: 1.375rem;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                  }
                `}</style>
                <div 
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>
              
              {/* Key Takeaways Section */}
              <Card className="mt-8 bg-gradient-to-br from-[#0D1B2A] to-[#1E3A5F] text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-[#F4B400]">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Key Takeaways
                  </h3>
                  <div className="space-y-4">
                    {keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <takeaway.icon className="w-5 h-5 text-[#F4B400] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-100 leading-relaxed">{takeaway.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-[#0D1B2A] dark:text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm border-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400] hover:text-[#0D1B2A]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Sharing */}
              <div className="mt-8">
                <SocialSharing 
                  title={blogPost.title} 
                  description={blogPost.description}
                />
              </div>

              {/* Related Articles */}
              <RelatedArticles 
                currentTags={blogPost.tags} 
                currentId={blogPost.id} 
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Table of Contents - Desktop */}
                <div className="hidden lg:block">
                  <TableOfContents content={blogPost.content} />
                </div>

                {/* Newsletter CTA */}
                <Card className="bg-gradient-to-br from-[#0D1B2A] to-[#1E3A5F] text-white">
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 text-[#F4B400] mb-3" />
                    <h3 className="text-lg font-semibold mb-2">
                      Master Chart Patterns
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Get weekly trading insights and advanced chart pattern analysis delivered to your inbox.
                    </p>
                    <button className="w-full bg-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400]/90 px-4 py-2 rounded font-medium transition-colors">
                      Get Free Trading Guide
                    </button>
                  </CardContent>
                </Card>

                {/* Author Bio */}
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                        alt="Devnaam"
                        className="w-12 h-12 rounded-full mr-3 border-2 border-[#F4B400]"
                      />
                      <div>
                        <h3 className="font-semibold text-[#0D1B2A] dark:text-white">Devnaam</h3>
                        <p className="text-sm text-[#F4B400] font-medium">Trading Expert & Analyst</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Professional trader with 8+ years of experience in technical analysis and chart pattern recognition. Helping traders master the markets through education and proven strategies.
                    </p>
                    <button className="w-full border border-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400] hover:text-[#0D1B2A] px-4 py-2 rounded text-sm transition-colors font-medium">
                      Follow for More Insights
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default BlogPost;
