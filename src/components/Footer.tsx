import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Market<span className="text-[#F4B400]">Master</span>
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              Your trusted source for stock market education and personal finance guidance. 
              Master the market, master your money.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/raj-priyadershi-56a256282/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#F4B400] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3-1.84-3s-2.13 1.44-2.13 2.9v5.6h-3v-10h2.88v1.38h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.6z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Devnaam" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#F4B400] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.648.5.5 5.647.5 12c0 5.087 3.292 9.392 7.86 10.918.574.107.783-.25.783-.556 0-.274-.01-1.002-.015-1.967-3.197.695-3.872-1.54-3.872-1.54-.522-1.325-1.275-1.678-1.275-1.678-1.043-.714.08-.699.08-.699 1.152.08 1.758 1.182 1.758 1.182 1.025 1.754 2.69 1.247 3.344.954.104-.743.4-1.247.728-1.534-2.553-.291-5.238-1.277-5.238-5.681 0-1.255.448-2.28 1.182-3.085-.118-.29-.512-1.464.112-3.053 0 0 .964-.308 3.158 1.178.917-.255 1.9-.383 2.878-.388.976.005 1.96.133 2.878.388 2.193-1.486 3.156-1.178 3.156-1.178.626 1.589.232 2.763.114 3.053.736.805 1.18 1.83 1.18 3.085 0 4.414-2.689 5.386-5.254 5.671.412.356.78 1.062.78 2.14 0 1.545-.014 2.79-.014 3.168 0 .308.206.67.787.556C20.712 21.388 24 17.087 24 12c0-6.353-5.148-11.5-11.5-11.5z"/>
                </svg>
              </a>

              {/* Portfolio */}
              <a href="https://devnaam4s.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#F4B400] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h3V2a1 1 0 112 0v1h3a2 2 0 012 2v2H2V5zm0 4h16v7a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" />
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:workwithdevnaam@gmail.com" className="text-gray-300 hover:text-[#F4B400] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065l-11.385-7.61a1 1 0 0 1 1.154-1.65l10.231 6.836 10.231-6.836a1 1 0 1 1 1.154 1.65l-11.385 7.61zM2 6.998v10.004a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.998l-10 6.67-10-6.67z"/>
                </svg>
              </a>

              {/* Phone */}
              <a href="tel:+916205791382" className="text-gray-300 hover:text-[#F4B400] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.05l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#F4B400]">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#F4B400]">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-[#F4B400]">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-[#F4B400]">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-gray-200">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-[#F4B400]">Chart Patterns</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#F4B400]">Technical Analysis</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#F4B400]">Personal Finance</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#F4B400]">Investment Tips</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-6 text-center text-gray-300 dark:text-gray-400">
          <p>© 2024 MarketMaster Blog. All rights reserved.</p>
          <p className="mt-2">
            Designed by <a href="https://devnaam4s.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#F4B400] hover:underline">Devnaam</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
