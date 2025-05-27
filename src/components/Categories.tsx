
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign } from "lucide-react";

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your learning path and master the skills that matter most
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 hover:border-[#F4B400]">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#0D1B2A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">
                📈 Stock Market & Chart Analysis
              </h3>
              <p className="text-gray-600 mb-6">
                Master technical analysis, chart patterns, trading strategies, and market psychology. 
                Learn to read market signals like a pro.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Chart Patterns</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Technical Analysis</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Trading Strategies</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 hover:border-[#F4B400]">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign size={32} className="text-[#0D1B2A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">
                💰 Personal Finance
              </h3>
              <p className="text-gray-600 mb-6">
                Build wealth through smart budgeting, saving strategies, investment planning, 
                and financial goal setting. Secure your financial future.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Budgeting</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Saving Tips</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Investment</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Categories;
