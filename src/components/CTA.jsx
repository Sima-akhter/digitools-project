import React from 'react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-24 px-6 text-center text-white">
      {/* Background Decorative Circles (Optional, for that premium look) */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed mb-12">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br className="hidden md:block" /> Start your free trial today.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#7C3AED] font-bold rounded-md hover:bg-gray-50 transition-all shadow-xl shadow-black/10">
            Explore Products
          </button>

          <button className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">
            View Pricing
          </button>
        </div>

        {/* Footnote */}
        <p className="text-sm text-purple-200 font-medium tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}