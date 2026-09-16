import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductMachine } from '../types';

interface ProductMatrixProps {
  onSelectProduct: (product: ProductMachine) => void;
}

export const ProductMatrix: React.FC<ProductMatrixProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'auto' | 'linear' | 'mold' | 'turnkey'>('all');

  const categories = [
    { id: 'all', label: '全部設備 (ALL)' },
    { id: 'auto', label: '全自動高速吹瓶機' },
    { id: 'linear', label: '半自動 / 直線精緻型' },
    { id: 'mold', label: 'PET 吹瓶模具與客製瓶型' },
    { id: 'turnkey', label: '整廠智慧自動化方案' },
  ] as const;

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="machinery-catalogue" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#00f0ff]"></span>
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#00dbe9] tracking-widest font-semibold">
            PRODUCT ARCHITECTURE
          </span>
          <span className="w-6 h-0.5 bg-[#00f0ff]"></span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-[28px] sm:text-[36px] lg:text-[40px] text-[#e0e2eb] font-bold tracking-tight">
          核心機械產品線 · 頂級製造矩陣
        </h2>
        <p className="text-[#b9cacb] text-[15px] max-w-2xl mt-4 leading-relaxed">
          依據容量需求、產速規模與潔淨室等級客製化配置，具備即插即用的模組化擴展性。
        </p>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full bg-[#191c22] border border-[#3b494b]/30 shadow-lg">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#00f0ff] text-[#00363a] font-semibold shadow-md'
                    : 'text-[#b9cacb] hover:text-[#e0e2eb]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden bg-[#1d2026] border border-[#3b494b]/40 shadow-xl flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative w-full h-56 overflow-hidden bg-[#0b0e14]">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0b0e14]/80 backdrop-blur-md font-['JetBrains_Mono'] text-[11px] font-medium ${
                    product.badgeType === 'cyan'
                      ? 'text-[#00f0ff] border border-[#00f0ff]/30'
                      : 'text-[#fe6b00] border border-[#fe6b00]/30'
                  }`}
                >
                  {product.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#849495] uppercase tracking-wider">
                    {product.series}
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-[22px] text-[#e0e2eb] font-semibold mt-1">
                    {product.name}
                  </h3>
                  <p className="text-[#b9cacb] text-[13px] mt-2 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Machine Specs Box */}
                  <div className="mt-4 pt-4 space-y-2 bg-[#272a31]/40 border border-[#3b494b]/30 p-3.5 rounded-xl">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between font-['JetBrains_Mono'] text-[11px]">
                        <span className="text-[#849495]">{spec.label}</span>
                        <span className={`font-semibold ${spec.color || 'text-[#e0e2eb]'}`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProduct(product)}
                  className="mt-6 flex items-center justify-between text-[14px] text-[#00dbe9] group-hover:text-[#00f0ff] font-semibold transition-colors cursor-pointer pt-2"
                >
                  <span>{product.actionLabel}</span>
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
