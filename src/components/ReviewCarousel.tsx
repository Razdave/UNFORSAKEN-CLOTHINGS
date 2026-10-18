import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CUSTOMER_REVIEWS, REVIEWS_SUMMARY } from '../data/reviews';

export const ReviewCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev === 0 ? CUSTOMER_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev === CUSTOMER_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Heading from shopunforsaken.com */}
        <div className="text-center space-y-2 pb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#151515] uppercase tracking-normal">
            Let customers speak for us
          </h2>
          <div className="flex items-center justify-center gap-2">
            {/* 5 Teal stars (#108474) matching Judge.me widget on shopunforsaken.com */}
            <div className="flex text-[#108474] text-base">
              {'★★★★★'}
            </div>
            <span className="text-xs text-neutral-500 font-medium">
              from {REVIEWS_SUMMARY.totalReviews} reviews
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const review = CUSTOMER_REVIEWS[(startIndex + offset) % CUSTOMER_REVIEWS.length];
              return (
                <div
                  key={`${review.id}-${offset}`}
                  className="bg-white p-6 sm:p-7 border border-neutral-200 rounded-lg flex flex-col justify-between space-y-5 shadow-xs"
                >
                  <div className="space-y-3">
                    {/* Stars */}
                    <div className="text-[#108474] text-sm">
                      {'★'.repeat(review.rating)}
                    </div>

                    <h3 className="text-base font-semibold text-[#151515] leading-snug">
                      {review.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {review.content}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <div>
                      <p className="font-semibold text-neutral-800">{review.author}</p>
                      <p className="text-[11px] text-neutral-400">Review of {review.productTitle}</p>
                    </div>
                    <span className="text-neutral-400">{review.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center justify-center gap-3 pt-8">
            <button
              type="button"
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
