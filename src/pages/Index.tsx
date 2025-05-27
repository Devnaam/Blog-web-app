
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Categories from "@/components/Categories";
import AuthorIntro from "@/components/AuthorIntro";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedPosts />
      <Categories />
      <AuthorIntro />
      <Newsletter />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
