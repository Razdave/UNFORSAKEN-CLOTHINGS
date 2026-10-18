import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#151515] text-white">
      {/* Top Notice: Shipping Delay */}
      <div className="text-center py-2 px-4 text-xs font-medium tracking-wide border-b border-neutral-800">
        <span>SHIPPING DELAY: Orders are taking longer than usual to ship. Thank you for your patience.</span>
      </div>

      {/* Marquee: Free Shipping */}
      <div
        role="region"
        aria-label="Promotions"
        className="overflow-hidden py-2 bg-[#151515] text-[13px] font-medium tracking-wider uppercase border-b border-neutral-800"
      >
        <div className="flex animate-marquee select-none whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-4">
              <span>FREE SHIPPING OVER $75 (US ONLY)</span>
              <span className="text-neutral-500">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
