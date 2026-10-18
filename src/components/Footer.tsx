import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown } from 'lucide-react';

export const Footer: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('United States (USD $)');

  const countries = [
    'United States (USD $)',
    'Canada (CAD $)',
    'United Kingdom (GBP £)',
    'Australia (AUD $)',
    'Germany (EUR €)',
    'France (EUR €)',
    'Japan (JPY ¥)',
    'Mexico (USD $)'
  ];

  const paymentMethods = [
    'Amazon', 'American Express', 'Apple Pay', 'Bancontact',
    'Diners Club', 'Discover', 'Google Pay', 'iDEAL',
    'Mastercard', 'PayPal', 'Shop Pay', 'USDC', 'Visa'
  ];

  return (
    <footer className="w-full bg-white border-t border-neutral-200 text-[#151515] py-12 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Policies and Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black">
              Policies and Info
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600">
              <li>
                <Link to="/policies/returns" className="hover:text-black transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/shipping" className="hover:text-black transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/terms" className="hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Shortcuts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black">
              Collections
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600">
              <li>
                <Link to="/collection/tees" className="hover:text-black transition-colors">
                  Tees
                </Link>
              </li>
              <li>
                <Link to="/collection/hoodies" className="hover:text-black transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/collection/the-lifting-club" className="hover:text-black transition-colors">
                  The “Lifting Club”
                </Link>
              </li>
              <li>
                <Link to="/collection/all" className="hover:text-black transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="hover:text-black transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministry & Mission */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black">
              UNFORSAKEN
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every piece is a declaration of God's promise to never abandon us, inspired by 2 Corinthians 4:9.
            </p>
            <div className="pt-1">
              <Link to="/the-good-news" className="text-xs font-bold uppercase tracking-wider underline hover:text-neutral-600">
                Read The Good News →
              </Link>
            </div>
          </div>

          {/* Currency / Region Selector matching shopunforsaken.com */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black">
              Country/region
            </h4>
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#F6F5F2] border border-neutral-300 text-xs font-semibold text-neutral-900 appearance-none focus:outline-hidden focus:border-black cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-3 pointer-events-none" />
            </div>
            <p className="text-[11px] text-neutral-400">
              Prices and shipping are displayed in your local currency.
            </p>
          </div>
        </div>

        {/* Payment Methods and Copyright */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-neutral-500 font-medium">
            © {new Date().getFullYear()} UNFORSAKEN™, All rights reserved.
          </p>

          {/* Authentic Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-[10px] font-bold text-neutral-600">
            {paymentMethods.map((pm) => (
              <span
                key={pm}
                className="px-2 py-1 bg-[#F6F5F2] border border-neutral-200 rounded-xs"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
