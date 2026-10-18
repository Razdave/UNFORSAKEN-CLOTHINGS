import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProductGrid } from '../components/ProductGrid';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { CampaignBanner } from '../components/CampaignBanner';
import { FreedomAppSection } from '../components/FreedomAppSection';
import { RecentlyViewedSection } from '../components/RecentlyViewedSection';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onQuickView }) => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Interactive 5-slide Hero Slideshow matching shopunforsaken.com */}
      <HeroSection />

      {/* 2. Exact Centered Text Banner from shopunforsaken.com */}
      <div className="w-full bg-[#151515] text-white py-3.5 text-center px-4 border-b border-neutral-800">
        <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">
          TRUSTED BY THOUSANDS REPRESENTING CHRIST BOLDLY
        </p>
      </div>

      {/* 3. Section: SHOP (Tabs: NEW ARRIVALS / COMMUNITY FAVORITES) + SHOP ALL PRODUCTS */}
      <ProductGrid products={PRODUCTS} onQuickView={onQuickView} />

      {/* 4. Section: Let customers speak for us (Judge.me reviews widget) */}
      <ReviewCarousel />

      {/* 5. Section: @THEJONMOODY Featured Product Card ("FEAR GOD" Pure Cotton Tee) */}
      <CampaignBanner onQuickView={onQuickView} />

      {/* 6. Section: FREEDOM APP BY UNFORSAKEN (Exact copy and breakdown) */}
      <FreedomAppSection />

      {/* 7. Section: RECENTLY VIEWED */}
      <RecentlyViewedSection onQuickView={onQuickView} />

      {/* 8. Section: STAY AHEAD OF THE DROP */}
      <NewsletterSignup />
    </div>
  );
};
