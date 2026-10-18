import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  // Exact popular searches from shopunforsaken.com
  const popularSearches = ['Tees', 'Hoodies', 'Shorts', 'Pants', 'THE “LIFTING CLUB”'];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-x-0 top-0 bg-white shadow-2xl z-50 animate-in slide-in-from-top duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 border-b-2 border-black pb-3">
            <Search className="w-5 h-5 text-neutral-500 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full text-base sm:text-lg font-medium text-neutral-900 placeholder-neutral-400 focus:outline-hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs font-bold uppercase text-neutral-400 hover:text-black px-2"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-black ml-2"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-6 max-h-[70vh] overflow-y-auto">
            {query.trim() === '' ? (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2.5">
                    POPULAR SEARCHES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setQuery(term)}
                        className="px-3.5 py-1.5 bg-[#F6F5F2] hover:bg-black hover:text-white text-xs font-bold uppercase tracking-wider text-neutral-800 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                    Trending Now
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PRODUCTS.slice(0, 4).map((p) => (
                      <Link
                        key={p.id}
                        to={`/product/${p.handle}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-2 bg-[#F6F5F2] hover:bg-neutral-200 transition-colors"
                      >
                        <img
                          src={p.primaryImage}
                          alt={p.title}
                          className="w-12 h-14 object-cover shrink-0"
                        />
                        <div>
                          <p className="text-xs font-semibold text-black line-clamp-1">{p.title}</p>
                          <div className="flex items-center gap-2 text-xs pt-0.5">
                            {p.originalPrice && (
                              <span className="text-neutral-400 line-through tabular-nums">${p.originalPrice.toFixed(2)}</span>
                            )}
                            <span className="text-neutral-900 font-bold tabular-nums">${p.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12 space-y-2">
                <p className="text-base font-bold text-black">No products found for "{query}"</p>
                <p className="text-xs text-neutral-500">
                  Try searching for "Tees", "Hoodies", or "Fear God".
                </p>
              </div>
            ) : (
              <div>
                <div className="pb-3 border-b border-neutral-100 mb-4 text-xs font-bold uppercase text-neutral-500">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'RESULT' : 'RESULTS'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.handle}`}
                      onClick={onClose}
                      className="group flex gap-3 p-2 border border-neutral-200 hover:border-black transition-colors"
                    >
                      <img
                        src={p.primaryImage}
                        alt={p.title}
                        className="w-16 h-20 object-cover shrink-0"
                      />
                      <div className="flex flex-col justify-between py-0.5">
                        <h4 className="text-xs font-semibold text-black group-hover:underline line-clamp-2">
                          {p.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs">
                          {p.originalPrice && (
                            <span className="text-neutral-400 line-through tabular-nums">${p.originalPrice.toFixed(2)}</span>
                          )}
                          <span className="font-bold text-black tabular-nums">${p.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
