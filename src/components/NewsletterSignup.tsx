import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#151515] text-white py-14 sm:py-20 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
        {/* Exact Headline from shopunforsaken.com */}
        <h2 className="text-2xl sm:text-4xl font-normal uppercase tracking-wide">
          STAY AHEAD OF THE DROP
        </h2>

        {/* Exact Subtitle from shopunforsaken.com */}
        <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-neutral-300">
          JOIN OUR EMAIL LIST TO FIND OUT ABOUT NEW DROPS AND NEVER MISS THEM AGAIN
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-6 py-3 text-xs font-bold text-white mt-4">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>THANK YOU FOR SUBSCRIBING. YOU ARE ON THE DROP LIST.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4 flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="flex-1 px-4 py-3 bg-[#151515] text-white placeholder-neutral-400 border border-neutral-700 text-xs font-medium focus:outline-hidden focus:border-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors flex items-center justify-center shrink-0"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
