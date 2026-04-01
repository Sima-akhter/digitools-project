import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: '0',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
      buttonText: 'Get Started Free',
      isHighlighted: false,
    },
    {
      name: 'Pro',
      description: 'Best for professionals',
      price: '29',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
      ],
      buttonText: 'Start Pro Trial',
      isHighlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'For teams and businesses',
      price: '99',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
      ],
      buttonText: 'Contact Sales',
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#0F172A] mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#64748B] text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 flex flex-col h-full rounded-md border transition-all ${
                plan.isHighlighted
                  ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-[#7C3AED] text-white shadow-2xl scale-105 z-10'
                  : 'bg-white border-gray-100 text-[#1E293B] shadow-sm'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-6 py-1.5 rounded-md shadow-sm">
                  {plan.badge}
                </div>
              )}

              {/* Card Title & Desc */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm ${plan.isHighlighted ? 'text-purple-100' : 'text-[#64748B]'}`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-10">
                <span className="text-5xl font-black">${plan.price}</span>
                <span
                  className={`text-lg font-medium ${plan.isHighlighted ? 'text-purple-100' : 'text-[#94A3B8]'}`}
                >
                  /Month
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <Check
                      size={18}
                      className={plan.isHighlighted ? 'text-white' : 'text-green-500'}
                      strokeWidth={3}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                className={`w-full py-4 font-bold rounded-md transition-all ${
                  plan.isHighlighted
                    ? 'bg-white text-[#7C3AED] hover:bg-gray-50 shadow-lg'
                    : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-[#6D28D9] shadow-md shadow-purple-100'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}