import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onQuickView }) => {
  const [activeTab, setActiveTab] = useState<'new-arrivals' | 'community-favorites'>('new-arrivals');

  const displayedProducts = products.filter((p) => p.collections.includes(activeTab));

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Tabs matching shopunforsaken.com exactly */}
        <div className="text-center space-y-4 pb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#151515]">
            SHOP
          </h2>

          <div className="flex items-center justify-center gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-800">
            <button
              type="button"
              onClick={() => setActiveTab('new-arrivals')}
              className={`transition-colors py-1 ${
                activeTab === 'new-arrivals'
                  ? 'text-black border-b-2 border-black font-extrabold'
                  : 'text-neutral-400 hover:text-black'
              }`}
            >
              NEW ARRIVALS
            </button>
            <span className="text-neutral-300">/</span>
            <button
              type="button"
              onClick={() => setActiveTab('community-favorites')}
              className={`transition-colors py-1 ${
                activeTab === 'community-favorites'
                  ? 'text-black border-b-2 border-black font-extrabold'
                  : 'text-neutral-400 hover:text-black'
              }`}
            >
              COMMUNITY FAVORITES
            </button>
          </div>

          <div className="pt-1">
            <Link
              to={activeTab === 'new-arrivals' ? '/collection/new-arrivals' : '/collection/community-favorites'}
              className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black underline underline-offset-4"
            >
              Shop {activeTab === 'new-arrivals' ? 'NEW ARRIVALS' : 'COMMUNITY FAVORITES'}
            </Link>
          </div>
        </div>

        {/* 4-column desktop / 2-column mobile grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-4">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* SHOP ALL PRODUCTS CTA */}
        <div className="pt-12 text-center">
          <Link
            to="/collection/all"
            className="inline-block px-10 py-4 bg-[#151515] text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            SHOP ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};
