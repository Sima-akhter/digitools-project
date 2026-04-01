import React from 'react';
import { User, Package, Rocket } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: <User className="text-[#7C3AED] w-10 h-10" />,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: <Package className="text-[#7C3AED] w-10 h-10" />,
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: <Rocket className="text-[#7C3AED] w-10 h-10" />,
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0F172A] mb-4">Get Started In 3 Steps</h2>
          <p className="text-[#64748B] text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white border border-gray-100 p-12 text-center rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 bg-[#7C3AED] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">{step.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}