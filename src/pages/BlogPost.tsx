
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
import { Calendar, Clock, User } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data
  const blogPost = {
    id: 1,
    title: "5 Essential Chart Patterns Every Trader Must Know",
    content: `
      <h2>Introduction</h2>
      <p>Chart patterns are one of the most powerful tools in a trader's arsenal. They help identify potential market movements and provide entry and exit points for trades. In this comprehensive guide, we'll explore the five most essential chart patterns that every trader should master.</p>
      
      <h2>1. Head and Shoulders Pattern</h2>
      <p>The head and shoulders pattern is one of the most reliable reversal patterns. It consists of three peaks, with the middle peak (head) being higher than the other two (shoulders). This pattern typically signals a trend reversal from bullish to bearish.</p>
      
      <h3>How to Identify:</h3>
      <ul>
        <li>Left shoulder: First peak with moderate volume</li>
        <li>Head: Higher peak with lower volume</li>
        <li>Right shoulder: Third peak similar to the left shoulder</li>
        <li>Neckline: Support line connecting the lows</li>
      </ul>
      
      <h2>2. Double Top and Double Bottom</h2>
      <p>These are reversal patterns that occur at the end of uptrends (double top) or downtrends (double bottom). They indicate that the current trend is losing momentum and a reversal is likely.</p>
      
      <h2>3. Triangle Patterns</h2>
      <p>Triangles are continuation patterns that can be ascending, descending, or symmetrical. They represent a period of consolidation before the price breaks out in the direction of the previous trend.</p>
      
      <h2>4. Flag and Pennant Patterns</h2>
      <p>These short-term continuation patterns occur after a strong price movement. Flags are rectangular-shaped consolidations, while pennants are triangular. Both typically lead to a continuation of the previous trend.</p>
      
      <h2>5. Cup and Handle Pattern</h2>
      <p>This bullish continuation pattern resembles a cup with a handle. It indicates a period of consolidation followed by a breakout to new highs. The pattern is particularly effective in identifying long-term buying opportunities.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering these five chart patterns will significantly improve your trading accuracy. Remember to always combine pattern analysis with other technical indicators and proper risk management. Practice identifying these patterns on historical charts before applying them to live trading.</p>
      
      <h3>Key Takeaways:</h3>
      <ul>
        <li>Chart patterns help identify potential market reversals and continuations</li>
        <li>Volume confirmation is crucial for pattern validity</li>
        <li>Always use stop-losses to manage risk</li>
        <li>Combine patterns with other technical analysis tools</li>
        <li>Practice on historical data before live trading</li>
      </ul>
    `,
    category: "Chart Patterns",
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Devnaam",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["Chart Patterns", "Technical Analysis", "Trading", "Market Analysis"],
    description: "Learn the five most essential chart patterns that every trader should master to improve their trading accuracy and market analysis skills."
  };

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
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <Badge className="mb-4 bg-[#F4B400] text-[#0D1B2A]">
              {blogPost.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {blogPost.title}
            </h1>
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
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
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
              <div 
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75',
                  color: 'inherit'
                }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-[#0D1B2A] dark:text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
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
                <Card className="bg-[#0D1B2A] dark:bg-gray-800 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Want More Insights?
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Get weekly trading tips and market analysis delivered to your inbox.
                    </p>
                    <button className="w-full bg-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400]/90 px-4 py-2 rounded font-medium transition-colors">
                      Subscribe Now
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
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-[#0D1B2A] dark:text-white">Devnaam</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Trading Expert</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Passionate trader with 5+ years of experience helping others master the markets.
                    </p>
                    <button className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded text-sm transition-colors">
                      View Profile
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
