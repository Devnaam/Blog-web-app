
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1B2A] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Market<span className="text-[#F4B400]">Master</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-[#F4B400] transition-colors px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] transition-colors px-3 py-2 text-sm font-medium">
                Stock Analysis
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] transition-colors px-3 py-2 text-sm font-medium">
                Personal Finance
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] transition-colors px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] transition-colors px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#F4B400]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0D1B2A]">
              <a href="#" className="text-white hover:text-[#F4B400] block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] block px-3 py-2 text-base font-medium">
                Stock Analysis
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] block px-3 py-2 text-base font-medium">
                Personal Finance
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#" className="text-white hover:text-[#F4B400] block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
