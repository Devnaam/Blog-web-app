
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1e3a5f] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of <span className="text-[#F4B400]">Service</span>
          </h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By accessing and using MarketMaster, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Use License</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Permission is granted to temporarily access the materials on MarketMaster for 
              personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The materials on MarketMaster are provided on an 'as is' basis. MarketMaster 
              makes no warranties, expressed or implied, and hereby disclaims and negates all 
              other warranties including without limitation, implied warranties or conditions 
              of merchantability, fitness for a particular purpose, or non-infringement of 
              intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Investment Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              All content on this website is for educational purposes only. Trading and investing 
              involve substantial risk of loss and are not suitable for all investors. Past 
              performance does not guarantee future results.
            </p>

            <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-6">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms of Service, please contact us at 
              legal@marketmaster.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
