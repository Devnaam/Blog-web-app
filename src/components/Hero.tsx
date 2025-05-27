
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1e3a5f] text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master the Market.<br />
            <span className="text-[#F4B400]">Master Your Money.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Learn stock trading strategies, technical analysis, and personal finance 
            from a trusted expert. Build your wealth with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400]/90 font-semibold px-8 py-3">
              Read the Latest Blog
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0D1B2A] px-8 py-3">
              Start Learning
            </Button>
          </div>
        </div>
      </div>
      
      {/* Chart Animation Background */}
      <div className="mt-16 relative max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mx-4">
          <div className="h-64 flex items-end justify-between space-x-2">
            {[40, 60, 45, 80, 65, 90, 75, 95, 70, 85, 60, 100].map((height, index) => (
              <div
                key={index}
                className="bg-[#F4B400] rounded-t animate-pulse"
                style={{
                  height: `${height}%`,
                  width: '6%',
                  animationDelay: `${index * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
