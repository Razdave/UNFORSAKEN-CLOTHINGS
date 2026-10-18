import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [added, setAdded] = useState(false);

  // Calculate discount percentage
  const discountPercent = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleQuickAdd = (size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, size, product.availableColors[0]?.name || 'Default', 1);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setShowSizes(false);
    }, 600);
  };

  return (
    <div
      className="group flex flex-col h-full bg-white select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSizes(false);
      }}
    >
      {/* Product Image Container */}
      <div className="relative w-full aspect-3/4 bg-[#F6F5F2] overflow-hidden">
        <Link to={`/product/${product.handle}`} className="block w-full h-full">
          <img
            src={product.primaryImage}
            alt={product.title}
            className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
              product.secondaryImage && isHovered ? 'opacity-0 scale-103' : 'opacity-100 scale-100'
            }`}
            loading="lazy"
          />

          {product.secondaryImage && (
            <img
              src={product.secondaryImage}
              alt={`${product.title} alternate`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
                isHovered ? 'opacity-100 scale-103' : 'opacity-0 scale-100'
              }`}
              loading="lazy"
            />
          )}
        </Link>

        {/* Discount Badge on top left (Exact shopunforsaken styling) */}
        {discountPercent && (
          <div className="absolute top-2.5 left-2.5 bg-black text-white text-[11px] font-bold px-2 py-0.5 tracking-wider uppercase">
            Save {discountPercent}%
          </div>
        )}

        {/* Quick View Button on top right */}
        {onQuickView && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute top-2.5 right-2.5 p-2 bg-white/90 hover:bg-white text-black shadow-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            title="Quick view"
            aria-label={`Quick view ${product.title}`}
          >
            <Eye className="w-4 h-4" />
          </button>
        )}

        {/* Quick Add Bar / Drawer at bottom */}
        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          {!showSizes ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowSizes(true);
              }}
              className="w-full py-2 px-3 bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              + Quick Add
            </button>
          ) : (
            <div
              className="bg-white p-2 border border-neutral-300 shadow-xl space-y-1.5 animate-in fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between text-[10px] font-bold text-neutral-500 uppercase">
                <span>Select Size:</span>
                <button type="button" onClick={() => setShowSizes(false)} className="text-neutral-400 hover:text-black">✕</button>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {product.availableSizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={(e) => handleQuickAdd(s, e)}
                    className="py-1 text-xs font-bold border border-neutral-300 hover:bg-black hover:text-white hover:border-black transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Title & Price under image */}
      <div className="pt-3 pb-1 flex flex-col justify-between flex-1 space-y-1">
        <Link
          to={`/product/${product.handle}`}
          className="text-sm font-semibold text-[#151515] hover:underline uppercase leading-snug line-clamp-2"
        >
          {product.title}
        </Link>

        <div className="flex items-baseline gap-2 pt-0.5">
          {product.originalPrice && (
            <span className="text-xs text-neutral-400 line-through tabular-nums">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-sm font-bold text-[#151515] tabular-nums">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
