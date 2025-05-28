import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Chart Patterns Every Trader Must Know",
      excerpt: "Learn the most profitable chart patterns that can transform your trading strategy and help you identify market opportunities...",
      category: "Chart Patterns",
      readTime: "8 min read",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tags: ["Chart Patterns", "Technical Analysis", "Trading"]
    },
    {
      id: 2,
      title: "Building Your Emergency Fund: A Step-by-Step Guide",
      excerpt: "Discover how to build a solid financial foundation with an emergency fund that protects you from unexpected expenses...",
      category: "Personal Finance",
      readTime: "6 min read",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      tags: ["Personal Finance", "Saving", "Emergency Fund"]
    },
    {
      id: 3,
      title: "Technical Analysis: RSI Strategies That Actually Work",
      excerpt: "Master the Relative Strength Index and improve your trading accuracy with these proven RSI strategies...",
      category: "Technical Indicators",
      readTime: "10 min read",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      tags: ["RSI", "Technical Indicators", "Trading Strategies"]
    },
    {
      id: 4,
      title: "Investment Portfolio Diversification for Beginners",
      excerpt: "Learn how to spread risk and maximize returns with smart diversification strategies that professional investors use...",
      category: "Investment",
      readTime: "7 min read",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tags: ["Investment", "Portfolio", "Diversification"]
    },
    {
      id: 5,
      title: "Cryptocurrency vs Traditional Stocks: Which is Better?",
      excerpt: "Compare the pros and cons of crypto and stock investments to make informed decisions about your portfolio...",
      category: "Investment",
      readTime: "9 min read",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      tags: ["Cryptocurrency", "Stocks", "Investment"]
    },
    {
      id: 6,
      title: "Budget Planning Made Simple: The 50/30/20 Rule",
      excerpt: "Transform your financial habits with this proven budgeting method that thousands of people use successfully...",
      category: "Money Management",
      readTime: "5 min read",
      date: "2024-01-03",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      tags: ["Budgeting", "Money Management", "Personal Finance"]
    }
  ];

  const categories = ["All", "Chart Patterns", "Technical Indicators", "Personal Finance", "Money Management", "Investment"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1e3a5f] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trading & Finance <span className="text-[#F4B400]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300">
            Expert insights, strategies, and tips to help you master the markets and manage your money
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400]/90" 
                    : "border-[#0D1B2A] dark:border-gray-600 text-[#0D1B2A] dark:text-white hover:bg-[#0D1B2A] hover:text-white dark:hover:bg-gray-700"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white">
              {searchTerm ? `Search results for "${searchTerm}"` : `All Articles`}
              <span className="text-gray-500 dark:text-gray-400 ml-2">({filteredPosts.length})</span>
            </h2>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700">
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
                            post.category.includes('Finance') || post.category.includes('Money')
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}
                        >
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#0D1B2A] dark:text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
