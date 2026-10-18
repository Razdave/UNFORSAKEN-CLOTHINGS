import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface CampaignBannerProps {
  onQuickView?: (product: Product) => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onQuickView }) => {
  const fearGodTee = PRODUCTS.find((p) => p.handle === 'fear-god-pure-cotton-tee') || PRODUCTS[0];

  return (
    <section className="w-full bg-[#F6F5F2] py-14 sm:py-20 border-y border-neutral-200">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Lifestyle @THEJONMOODY Image */}
          <div className="lg:col-span-8 relative aspect-16/10 sm:aspect-16/9 bg-neutral-200 overflow-hidden">
            <img
              src="/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg"
              alt="Fear God creator lifestyle campaign"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 text-white space-y-2">
              <span className="text-sm sm:text-base font-black tracking-widest uppercase bg-black/60 px-3 py-1 backdrop-blur-xs">
                @THEJONMOODY
              </span>
              <div>
                <Link
                  to="/product/fear-god-pure-cotton-tee"
                  className="inline-block px-6 py-3 bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-md mt-2"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Featured Product Card for FEAR GOD Pure Cotton Tee */}
          <div className="lg:col-span-4 bg-white p-6 border border-neutral-200 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-3">
              FEATURED PRODUCT
            </span>
            <ProductCard product={fearGodTee} onQuickView={onQuickView} />
          </div>
        </div>
      </div>
    </section>
  );
};
