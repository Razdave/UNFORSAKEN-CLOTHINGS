import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  subtitle?: string;
  title: string;
  buttons: { label: string; href: string; primary?: boolean }[];
  imagePosition?: string;
}

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg',
      subtitle: 'REPRESENT YOUR FAITH. LIVE',
      title: 'UNFORSAKEN',
      buttons: [
        { label: 'COMMUNITY FAVORITES', href: '/collection/community-favorites', primary: true },
        { label: 'NEW ARRIVALS', href: '/collection/new-arrivals', primary: false }
      ],
      imagePosition: 'center 35%'
    },
    {
      id: 2,
      image: '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg',
      subtitle: 'BEST SELLING',
      title: 'FEAR GOD HOODIE',
      buttons: [
        { label: 'Shop Now', href: '/product/fear-god-oversized-fleece-hoodie', primary: true }
      ],
      imagePosition: 'center 40%'
    },
    {
      id: 3,
      image: '/src/assets/images/campaign_freedom_app_1792353907450.jpg',
      subtitle: 'BREAK FREE FROM LUST',
      title: 'WITH OUR NEW FREEDOM APP',
      buttons: [
        { label: 'LEARN MORE', href: '#freedom-app', primary: true }
      ],
      imagePosition: 'center center'
    },
    {
      id: 4,
      image: '/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg',
      subtitle: 'GLOBAL CREATORS',
      title: 'BECOME AN AMBASSADOR',
      buttons: [
        { label: 'JOIN NOW', href: '/ambassador', primary: true }
      ],
      imagePosition: 'center 30%'
    },
    {
      id: 5,
      image: '/src/assets/images/founder_carson_young_1792353908124.jpg',
      subtitle: 'MEET THE FOUNDER OF UNFORSAKEN APPAREL',
      title: 'CARSON YOUNG',
      buttons: [
        { label: 'ABOUT ME', href: '/about', primary: true }
      ],
      imagePosition: 'center 20%'
    }
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[75vh] sm:h-[82vh] lg:h-[90vh] bg-black overflow-hidden select-none">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.imagePosition || 'center' }}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* Measured Scrim for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

          {/* Slide Text Content */}
          <div className="absolute inset-0 flex items-end justify-center pb-16 sm:pb-20 lg:pb-24 px-4 text-center">
            <div className="max-w-4xl space-y-3 sm:space-y-4">
              {slide.subtitle && (
                <p className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
                  {slide.subtitle}
                </p>
              )}

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
                {slide.title}
              </h1>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {slide.buttons.map((btn, bIdx) => (
                  <Link
                    key={bIdx}
                    to={btn.href}
                    onClick={(e) => {
                      if (btn.href.startsWith('#')) {
                        e.preventDefault();
                        const el = document.getElementById(btn.href.substring(1));
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 ${
                      btn.primary
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black'
                    }`}
                  >
                    <span>{btn.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous / Next Arrow Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/80 hover:text-white bg-black/30 hover:bg-black/60 backdrop-blur-xs transition-colors rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/80 hover:text-white bg-black/30 hover:bg-black/60 backdrop-blur-xs transition-colors rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
