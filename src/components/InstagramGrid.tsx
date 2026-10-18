import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      image: '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg',
      caption: 'Representing on campus. Winter collection live.',
      tag: '@shopunforsaken'
    },
    {
      image: '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg',
      caption: 'Fear God in a world obsessed with fear of man.',
      tag: '480GSM Drop'
    },
    {
      image: '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
      caption: 'Never Alone pure combed cotton 260GSM.',
      tag: 'Archive Tee'
    },
    {
      image: '/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg',
      caption: 'The community growing worldwide. 2 Cor 4:9.',
      tag: 'Ambassador Meet'
    }
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 gap-4">
          <div>
            <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block mb-1">
              COMMUNITY & CULTURE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111111]">
              JOIN THE MOVEMENT
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black hover:text-neutral-600 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW @SHOPUNFORSAKEN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Column Instagram Lifestyle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden bg-neutral-100 border border-neutral-200"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-white">
                <p className="text-xs font-medium line-clamp-2">{post.caption}</p>
                <div className="flex items-center justify-between pt-2 text-[10px] uppercase font-bold text-neutral-300">
                  <span>{post.tag}</span>
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
