

import { useEffect, useState } from 'react';
import ProductCard from './CartSection';
import { toast } from 'react-toastify';
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';



// Destructure cart and setCart from props here!
export default function ToolSection({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      // This now updates the cart in App.jsx!
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart! 🛒`);
    } else {
      toast.error('This product is already in your cart!');
    }
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart); // This now updates the cart in App.jsx!
    toast.warn('Product removed from cart.');
  };

  const handleCheckout = () => {
    setCart([]); // This now clears the cart in App.jsx!
    setActiveTab('cart');
    toast.info('Checkout complete!');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="bg-[#F8FAFC] py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header (Always Visible) */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-[#0F172A] mb-6">Premium Digital Tools</h2>
          <p className="max-w-2xl mx-auto text-[#64748B] leading-relaxed">
            Choose from our curated collection of premium digital products designed to boost your
            productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-100 flex gap-1">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all ${
                activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-[#64748B]'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all ${
                activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-[#64748B]'
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* --- CONDITIONAL RENDERING --- */}

        {activeTab === 'products' ? (
          /* 1. PRODUCT GRID SECTION */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        ) : (
          /* 2. CART SECTION (Same as Figma design) */
          <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-4xl p-8 md:p-10 shadow-sm animate-fadeIn">
            <h3 className="text-xl font-bold text-[#1E293B] mb-8">Your Selected Tools</h3>

            {cart.length === 0 ? (
              <div className="flex justify-center items-center text-9xl py-12 text-gray-400">
                <PiShoppingCartSimpleDuotone />
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h4 className="font-bold text-[#1E293B]">{item.name}</h4>
                          <p className="text-[#94A3B8] text-sm">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-[#FF4D8D] font-bold text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[#94A3B8] font-medium">Total Price:</span>
                    <span className="text-3xl font-black text-[#1E293B]">${totalPrice}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-2xl transition-all shadow-xl shadow-purple-100"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}