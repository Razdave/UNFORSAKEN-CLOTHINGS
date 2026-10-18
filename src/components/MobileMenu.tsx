import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Instagram } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenSearch }) => {
  if (!isOpen) return null;

  const links = [
    { label: 'TEES', href: '/collection/tees' },
    { label: 'HOODIES', href: '/collection/hoodies' },
    { label: 'CREW NECKS', href: '/collection/crew-necks' },
    { label: 'SHORTS', href: '/collection/shorts' },
    { label: 'PANTS', href: '/collection/pants' },
    { label: 'THE “LIFTING CLUB”', href: '/collection/the-lifting-club' },
    { label: 'GIFT CARDS', href: '/gift-cards' },
    { label: 'ALL PRODUCTS', href: '/collection/all' },
    { label: 'AMBASSADOR PORTAL', href: '/ambassador' },
    { label: 'ABOUT', href: '/about' },
    { label: 'THE GOOD NEWS', href: '/the-good-news' }
  ];

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
          <Link
            to="/"
            onClick={onClose}
            className="text-2xl font-black tracking-tight text-[#151515]"
          >
            UNFORSAKEN
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Action */}
        <div className="p-6 pb-2">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#F6F5F2] text-neutral-500 text-sm font-medium hover:text-black transition-colors"
          >
            <span>Search collections, tees, hoodies...</span>
            <span className="text-xs uppercase tracking-wider font-bold text-black">Search</span>
          </button>
        </div>

        {/* Navigation Links in exact order */}
        <div className="flex-1 px-6 py-2 divide-y divide-neutral-100">
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className="flex items-center justify-between py-3.5 text-base font-bold tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </Link>
          ))}
        </div>

        {/* Footer info in drawer */}
        <div className="p-6 bg-[#F6F5F2] border-t border-neutral-200 space-y-3">
          <div className="text-xs text-neutral-600 leading-relaxed">
            <p className="font-bold text-neutral-900 mb-0.5">UNFORSAKEN APPAREL</p>
            <p>"Persecuted, but not abandoned; struck down, but not destroyed." — 2 Corinthians 4:9</p>
          </div>
          <div className="pt-2 flex items-center justify-between text-xs font-bold tracking-wider text-neutral-800">
            <span>FOLLOW @SHOPUNFORSAKEN</span>
            <Instagram className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
