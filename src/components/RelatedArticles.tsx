
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface RelatedArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  tags: string[];
}

interface RelatedArticlesProps {
  currentTags: string[];
  currentId: number;
}

const RelatedArticles = ({ currentTags, currentId }: RelatedArticlesProps) => {
  // Mock related articles data
  const allArticles: RelatedArticle[] = [
    {
      id: 2,
      title: "Understanding Support and Resistance Levels",
      description: "Learn how to identify key support and resistance levels to improve your trading decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      category: "Technical Analysis",
      readTime: "6 min read",
      tags: ["Technical Analysis", "Support Resistance", "Trading"]
    },
    {
      id: 3,
      title: "Building Your Emergency Fund: A Complete Guide",
      description: "Essential steps to build and maintain an emergency fund for financial security.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
      category: "Personal Finance",
      readTime: "5 min read",
      tags: ["Personal Finance", "Emergency Fund", "Saving"]
    },
    {
      id: 4,
      title: "Moving Averages: Your First Technical Indicator",
      description: "Master the basics of moving averages and how to use them in your trading strategy.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
      category: "Technical Analysis",
      readTime: "7 min read",
      tags: ["Technical Analysis", "Moving Averages", "Indicators"]
    },
    {
      id: 5,
      title: "Dollar-Cost Averaging: Smart Investment Strategy",
      description: "Learn how dollar-cost averaging can help reduce investment risk over time.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop",
      category: "Investment",
      readTime: "4 min read",
      tags: ["Investment", "Strategy", "Personal Finance"]
    }
  ];

  // Filter and sort related articles based on matching tags
  const relatedArticles = allArticles
    .filter(article => article.id !== currentId)
    .map(article => ({
      ...article,
      matchScore: article.tags.filter(tag => currentTags.includes(tag)).length
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-[#0D1B2A] mb-8">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link key={article.id} to={`/blog/${article.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-[#F4B400] text-[#0D1B2A]">
                    {article.category}
                  </Badge>
                  <h4 className="font-semibold text-[#0D1B2A] mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
