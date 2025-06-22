
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1e3a5f] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-[#F4B400]">Devnaam</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your guide to mastering the financial markets and personal wealth
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden mb-12 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-square lg:aspect-auto">
                  <img 
                    src="/src/images/devnaam.png" 
                    alt="Devnaam - Trading Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-[#0D1B2A] dark:text-white mb-6">
                    My Trading Journey
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Started my trading journey 5 years ago as a complete beginner. Like many, 
                    I made costly mistakes early on, but these experiences taught me invaluable 
                    lessons about risk management and market psychology.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Today, I'm passionate about sharing what I've learned to help others 
                    avoid the same pitfalls and accelerate their path to financial success.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-4">My Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To democratize financial education and make trading accessible to everyone. 
                  I believe that with the right knowledge and discipline, anyone can build 
                  lasting wealth through smart investing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-4">My Approach</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I focus on practical, actionable strategies backed by solid fundamentals. 
                  No get-rich-quick schemes - just proven methods for long-term success 
                  in both trading and personal finance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <Card className="mb-12 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6 text-center">Achievements & Credentials</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F4B400] mb-2">10,000+</div>
                  <div className="text-gray-600 dark:text-gray-300">Newsletter Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F4B400] mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">Blog Articles Published</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F4B400] mb-2">5 Years</div>
                  <div className="text-gray-600 dark:text-gray-300">Trading Experience</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Badge className="bg-[#F4B400] text-[#0D1B2A] text-sm px-4 py-2">
                  Certified Technical Analyst
                </Badge>
                <Badge className="bg-[#0D1B2A] dark:bg-gray-700 text-white text-sm px-4 py-2">
                  Finance Educator
                </Badge>
                <Badge className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm px-4 py-2">
                  Risk Management Expert
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of readers who are already building their wealth through 
              smart trading and personal finance strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400]/90">
                Subscribe to Newsletter
              </Button>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="border-[#0D1B2A] dark:border-gray-600 text-[#0D1B2A] dark:text-white">
                  Read Latest Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
