import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0] || 'L');
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]?.name || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-4">
        <div className="inline-block w-full max-w-3xl my-8 text-left align-middle transition-all transform bg-white shadow-2xl relative z-10 border border-neutral-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* Gallery Column */}
            <div className="space-y-3">
              <div className="aspect-4/5 bg-[#F6F5F2] overflow-hidden border border-neutral-100">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {product.gallery.length > 1 && (
                <div className="flex gap-2">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-20 border overflow-hidden transition-all ${
                        activeImage === img ? 'border-black ring-1 ring-black' : 'border-neutral-200 opacity-70'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Column */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase tracking-widest text-neutral-400 block">
                  UNFORSAKEN · {product.category}
                </span>

                <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
                  {product.title}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-xl font-black text-black tabular-nums">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through tabular-nums">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase tracking-wider">
                      Best Seller
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Sizing */}
                <div className="pt-2 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>SIZE: <strong className="text-black">{selectedSize}</strong></span>
                    <span className="text-neutral-400 font-normal">Boxy Streetwear Fit</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1.5">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 text-xs font-bold border transition-colors ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-neutral-200 text-neutral-800 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                {product.availableColors.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold block">
                      COLOR: <strong className="text-black">{selectedColor}</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      {product.availableColors.map((col) => (
                        <button
                          key={col.name}
                          type="button"
                          onClick={() => setSelectedColor(col.name)}
                          className={`w-7 h-7 rounded-full border-2 transition-all ${
                            selectedColor === col.name ? 'border-black ring-2 ring-neutral-300' : 'border-neutral-200'
                          }`}
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG · ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>

                <Link
                  to={`/product/${product.handle}`}
                  onClick={onClose}
                  className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black flex items-center justify-center gap-1"
                >
                  <span>View Full Details & Sizing Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
