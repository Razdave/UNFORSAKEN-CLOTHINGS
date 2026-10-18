import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';

interface RecentlyViewedProps {
  onQuickView?: (product: Product) => void;
}

export const RecentlyViewedSection: React.FC<RecentlyViewedProps> = ({ onQuickView }) => {
  const recentProducts = PRODUCTS.slice(4, 8);

  return (
    <section className="w-full bg-white py-14 border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#151515] mb-8">
          RECENTLY VIEWED
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {recentProducts.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
          ))}
        </div>
      </div>
    </section>
  );
};
