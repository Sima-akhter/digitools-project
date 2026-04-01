
import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount }) {
  return (
    <nav className="flex items-center justify-between px-4 md:px-10 py-3 md:py-4 bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
      
      {/* Left: Logo */}
      <div className="shrink-0">
        <a
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
        >
          DigiTools
        </a>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-700 font-medium text-sm">
        <a href="#products" className="hover:text-[#7C3AED] transition-colors">
          Products
        </a>
        <a href="#features" className="hover:text-[#7C3AED] transition-colors">
          Features
        </a>
        <a href="#pricing" className="hover:text-[#7C3AED] transition-colors">
          Pricing
        </a>
        <a href="#testimonials" className="hover:text-[#7C3AED] transition-colors">
          Testimonials
        </a>
        <a href="#faq" className="hover:text-[#7C3AED] transition-colors">
          FAQ
        </a>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-3 md:space-x-6">
        
        {/* Cart Icon */}
        <button className="relative text-gray-700 hover:text-[#7C3AED] transition-colors p-2">
          <ShoppingCart size={20} className="md:w-6 md:h-6" />

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-700 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
              {cartCount}
            </span>
          )}
        </button>

        {/* Login */}
        <button className="hidden sm:block text-gray-700 font-semibold text-xs md:text-sm hover:text-[#7C3AED] transition-colors">
          Login
        </button>

        {/* Get Started */}
        <button className="hidden sm:block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
}