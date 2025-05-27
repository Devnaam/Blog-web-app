
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "5 Essential Chart Patterns Every Trader Must Know",
      excerpt: "Learn the most profitable chart patterns that can transform your trading strategy...",
      category: "Chart Patterns",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Building Your Emergency Fund: A Step-by-Step Guide",
      excerpt: "Discover how to build a solid financial foundation with an emergency fund...",
      category: "Personal Finance",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Technical Analysis: RSI Strategies That Actually Work",
      excerpt: "Master the Relative Strength Index and improve your trading accuracy...",
      category: "Technical Analysis",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Investment Portfolio Diversification for Beginners",
      excerpt: "Learn how to spread risk and maximize returns with smart diversification...",
      category: "Investment",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Cryptocurrency vs Traditional Stocks: Which is Better?",
      excerpt: "Compare the pros and cons of crypto and stock investments...",
      category: "Investment",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Budget Planning Made Simple: The 50/30/20 Rule",
      excerpt: "Transform your financial habits with this proven budgeting method...",
      category: "Personal Finance",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into our most popular content and start your journey to financial mastery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        post.category.includes('Finance') 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
