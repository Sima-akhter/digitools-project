import React from 'react';

export default function Stats() {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ];

  return (
    <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-around md:justify-between text-center">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Individual Stat */}
              <div className="flex flex-col items-center space-y-2 py-8 md:py-0 w-full md:w-auto">
                <span className="text-white text-5xl md:text-6xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/90 text-lg font-medium">{stat.label}</span>
              </div>

              {/* Vertical Divider (Hidden on mobile, visible on medium screens +) */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block h-20 w-px bg-white/30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}