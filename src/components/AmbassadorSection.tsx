import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Gift, DollarSign } from 'lucide-react';

export const AmbassadorSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden bg-neutral-100 aspect-4/3 sm:aspect-16/11 border border-neutral-200">
              <img
                src="/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg"
                alt="UNFORSAKEN Ambassador community in streetwear"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-black text-white text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest">
                GLOBAL COMMUNITY
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block">
                WEAR THE GOOD NEWS · SHARE THE GOOD NEWS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-tight text-[#111111]">
                BECOME AN <br />
                AMBASSADOR
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              We are assembling a generation of bold believers who refuse to hide their light under a basket. As an UNFORSAKEN Ambassador, represent the brand in your city, campus, and online while earning rewards.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-sm text-neutral-800 font-semibold">
                <span className="w-2 h-2 bg-black rounded-full" />
                <span>Earn 10% Cash Commission on every sale through your link</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-800 font-semibold">
                <span className="w-2 h-2 bg-black rounded-full" />
                <span>Give your community 15% off with your unique code</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-800 font-semibold">
                <span className="w-2 h-2 bg-black rounded-full" />
                <span>Exclusive access to unreleased drops and free apparel</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/ambassador"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors group"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
