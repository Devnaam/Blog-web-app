
import { Card, CardContent } from "@/components/ui/card";

const AuthorIntro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-square lg:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face" 
                  alt="Devnaam - Blog Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                  Meet Devnaam
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Hi! I'm Devnaam, a passionate trader and financial educator with over 5 years 
                  of experience in the stock market. My mission is to demystify trading and 
                  personal finance for everyone.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  From learning chart patterns the hard way to building a sustainable trading 
                  strategy, I've been through it all. Now, I share my knowledge to help you 
                  avoid common mistakes and accelerate your financial journey.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#F4B400] text-[#0D1B2A] rounded-full font-semibold">
                    Certified Trader
                  </span>
                  <span className="px-4 py-2 bg-[#0D1B2A] text-white rounded-full font-semibold">
                    Finance Educator
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AuthorIntro;
