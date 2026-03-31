import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100 font-sans">
      {/* Left: Logo */}
      <div className="shrink-0">
        <a href="/" className="text-3xl font-extrabold tracking-tight text-[#7C3AED]">
          DigiTools
        </a>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium text-sm">
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
      <div className="flex items-center space-x-6">
        {/* Cart Icon */}
        <button className="text-gray-700 hover:text-[#7C3AED] transition-colors">
          <ShoppingCart size={20} strokeWidth={2} />
        </button>

        {/* Login */}
        <button className="text-gray-700 font-semibold text-sm hover:text-[#7C3AED] transition-colors">
          Login
        </button>

        {/* Get Started Button */}
        <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
}