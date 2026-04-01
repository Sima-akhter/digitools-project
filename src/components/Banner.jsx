import { Play } from 'lucide-react';
import banner from "../assets/banner.png"

export default function Banner() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0D7FF] bg-opacity-50 border border-[#C7B9FF]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
            </span>
            <span className="text-sm font-semibold eta text = bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-[72px] font-extrabold text-[#1E293B] leading-[1.1] tracking-tight">
            Supercharge Your <br />
            <span className='eta text = bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Digital Workflow</span>
          </h1>

          {/* Subtext */}
          <div className="space-y-1">
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software—all in
              one place. Start creating faster today.
            </p>
            <p className="text-slate-400 text-sm italic font-medium">Explore Products</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-8 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full hover:bg-[#6D28D9] transition-all shadow-lg shadow-indigo-100">
              Explore Products
            </button>

            <button className="flex items-center gap-2 px-8 py-4 border-2 border-[#7C3AED] eta text = bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold rounded-full hover:bg-purple-50 transition-all">
              <div className="bg-white rounded-full p-0.5">
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Use your exported Figma image here */}
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src={banner}
              alt="Digital Workflow Illustration"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Optional: Subtle background glow to match the modern UI feel */}
          <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}