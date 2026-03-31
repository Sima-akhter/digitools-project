import { Check } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  // Logic for dynamic tag colors
  const tagStyles = {
    'best-seller': 'bg-[#FEF3C7] text-[#D97706]',
    popular: 'bg-[#E0E7FF] text-[#4F46E5]',
    new: 'bg-[#DCFCE7] text-[#16A34A]',
  };

  return (
    <div className="bg-white border border-gray-100 rounded-4xl p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
      {/* Tag */}
      <div
        className={`absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-bold ${tagStyles[product.tagType]}`}
      >
        {product.tag}
      </div>

      {/* Icon Placeholder - In your real app, use <img> */}
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
        {product.icon}
      </div>

      {/* Content */}
      <h3 className="text-[22px] font-bold text-[#1E293B] mb-3">{product.name}</h3>
      <p className="text-[#64748B] text-sm leading-relaxed mb-6 grow">{product.description}</p>

      {/* Pricing */}
      <div className="mb-8">
        <span className="text-3xl font-extrabold text-[#1E293B]">${product.price}</span>
        <span className="text-[#94A3B8] font-medium text-sm">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-[#475569] text-sm font-medium">
            <div className="bg-green-100 rounded-full p-0.5">
              <Check size={14} className="text-green-600 stroke-3" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => onAddToCart(product)}
        className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-2xl transition-all shadow-lg shadow-purple-100"
      >
        Buy Now
      </button>
    </div>
  );
}