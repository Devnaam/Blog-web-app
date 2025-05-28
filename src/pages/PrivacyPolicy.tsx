
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1e3a5f] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="text-[#F4B400]">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us for support.
            </p>

            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">How We Use Your Information</h2>
            <ul className="text-gray-600 dark:text-gray-300 mb-6">
              <li>To provide and maintain our services</li>
              <li>To send you newsletters and educational content</li>
              <li>To respond to your comments and questions</li>
              <li>To improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@marketmaster.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
