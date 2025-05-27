
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Finance Student",
      content: "Devnaam's explanations of chart patterns transformed my understanding of technical analysis. I finally feel confident reading market signals!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "New Trader",
      content: "The personal finance tips helped me build my first emergency fund. Now I'm ready to start investing with confidence.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Working Professional",
      content: "Clear, actionable advice without the jargon. This blog made complex financial concepts accessible to someone like me.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
            What Readers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful learners who transformed their financial future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#F4B400] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-[#0D1B2A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
