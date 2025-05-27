
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Handle newsletter signup logic here
    setEmail("");
  };

  return (
    <section className="py-16 bg-[#0D1B2A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
              Get Your Free Trading Guide
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 10,000+ smart investors and get my exclusive guide: 
              <span className="font-semibold text-[#F4B400]"> "Top 5 Chart Patterns Every Trader Should Know"</span>
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-[#F4B400] text-[#0D1B2A] hover:bg-[#F4B400]/90 font-semibold px-8"
                >
                  Get Free Guide
                </Button>
              </div>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-[#F4B400] text-lg mr-2">✓</span>
                Weekly market insights
              </div>
              <div className="flex items-center">
                <span className="text-[#F4B400] text-lg mr-2">✓</span>
                Exclusive trading tips
              </div>
              <div className="flex items-center">
                <span className="text-[#F4B400] text-lg mr-2">✓</span>
                Free resources
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
