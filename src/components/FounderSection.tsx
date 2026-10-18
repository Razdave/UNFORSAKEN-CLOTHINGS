import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F6F5F2] py-16 sm:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Founder Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group overflow-hidden bg-neutral-200 aspect-3/4 sm:aspect-4/5 border border-neutral-300">
              <img
                src="/src/assets/images/founder_carson_young_1792353908124.jpg"
                alt="Carson Young, Founder of UNFORSAKEN Apparel"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 border border-neutral-200">
                <p className="text-xs font-black uppercase tracking-widest text-black">CARSON YOUNG</p>
                <p className="text-[11px] text-neutral-500 font-medium">Founder & Creative Director</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block">
                ORIGIN & PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-[#111111]">
                MEET THE FOUNDER OF <br />
                UNFORSAKEN APPAREL
              </h2>
            </div>

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                "I started UNFORSAKEN during one of the most difficult seasons of my life. I felt broken, struck down, and overwhelmed by circumstances. But in the quiet moments of prayer, God anchored me to <strong>2 Corinthians 4:9</strong>: <em>'Persecuted, but not abandoned; struck down, but not destroyed.'</em>"
              </p>
              <p>
                "I realized that millions of young believers are searching for a way to carry their faith into culture without feeling corny or compromised. We set out to design genuine heavyweight luxury streetwear that looks, fits, and feels world-class — clothing that sparks conversations about Christ in every gym, lecture hall, and city street."
              </p>
            </div>

            {/* Verse callout */}
            <div className="p-5 bg-white border border-neutral-200 space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">FOUNDATIONAL SCRIPTURE</p>
              <p className="text-sm font-semibold text-neutral-900 italic">
                "We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed."
              </p>
              <p className="text-xs font-black text-black pt-1">— 2 CORINTHIANS 4:8-9</p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#111111] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors group"
              >
                <span>READ ABOUT ME</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
