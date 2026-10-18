import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Truck, ShieldCheck, RefreshCw, ShoppingBag, Check, ChevronDown, Ruler, Share2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

export const ProductPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.handle === handle) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0] || 'L');
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]?.name || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<'details' | 'scripture' | 'shipping' | null>('details');

  // Reset active image when product changes
  useEffect(() => {
    setActiveImage(product.primaryImage);
    setSelectedSize(product.availableSizes[0] || 'L');
    setSelectedColor(product.availableColors[0]?.name || 'Default');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.handle]);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-8">
          <Link to="/" className="hover:text-black">HOME</Link>
          <span>/</span>
          <Link to="/collection/all" className="hover:text-black">SHOP</Link>
          <span>/</span>
          <Link to={`/collection/${product.category}`} className="hover:text-black">{product.category}</Link>
          <span>/</span>
          <span className="text-black">{product.title}</span>
        </nav>

        {/* 2-Column Product Layout: Sticky Gallery on Left, Purchase Module on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main Image */}
            <div className="relative aspect-4/5 sm:aspect-1/1 bg-[#F6F5F2] border border-neutral-200 overflow-hidden">
              <img
                src={activeImage}
                alt={product.title}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              {product.isBestSeller && (
                <div className="absolute top-4 left-4 bg-black text-white text-[11px] font-black uppercase tracking-widest px-3 py-1">
                  BEST SELLER
                </div>
              )}
            </div>

            {/* Thumbnails Row */}
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square border bg-[#F6F5F2] overflow-hidden transition-all ${
                      activeImage === img ? 'border-black ring-2 ring-black' : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Purchase Module Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Title & Brand */}
            <div className="space-y-2">
              <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block">
                UNFORSAKEN · {product.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
                {product.title}
              </h1>
              {product.subtitle && (
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  {product.subtitle}
                </p>
              )}
            </div>

            {/* Price & Rating */}
            <div className="flex items-center justify-between py-2 border-b border-neutral-100">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-[#111111] tabular-nums">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-base text-neutral-400 line-through tabular-nums">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xs font-bold text-red-600 uppercase">
                    SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-bold">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-black" />
                  ))}
                </div>
                <span>({product.reviewCount})</span>
              </div>
            </div>

            {/* In-Stock Indicator */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>IN STOCK · READY TO SHIP WITHIN 24-48 HOURS</span>
            </div>

            {/* Color Selector */}
            {product.availableColors.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-neutral-900 block">
                  COLOR: <strong className="text-black">{selectedColor}</strong>
                </span>
                <div className="flex items-center gap-2">
                  {product.availableColors.map((col) => (
                    <button
                      key={col.name}
                      type="button"
                      onClick={() => setSelectedColor(col.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-bold transition-all ${
                        selectedColor === col.name
                          ? 'border-black bg-neutral-100'
                          : 'border-neutral-200 hover:border-black'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-neutral-400"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span>{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
                <span>SIZE: <strong className="text-black">{selectedSize}</strong></span>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(true)}
                  className="flex items-center gap-1 text-neutral-500 hover:text-black underline underline-offset-2"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs font-black border transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white shadow-xs'
                        : 'border-neutral-300 text-neutral-800 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-neutral-500 font-medium pt-1">
                Fit: Relaxed oversized streetwear drape. Stay true to size for boxy fit.
              </p>
            </div>

            {/* Quantity Selector & Add to Bag */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border-2 border-black bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-black text-black tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Primary Buy CTA */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 bg-black text-white text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-xs group"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG · ${(product.price * quantity).toFixed(2)} USD</span>
                    </>
                  )}
                </button>
              </div>

              {/* Free domestic shipping perk callout */}
              <div className="p-3 bg-[#F6F5F2] border border-neutral-200 text-center text-xs font-semibold text-neutral-700">
                <Truck className="w-3.5 h-3.5 inline mr-1.5" />
                <span>Orders over $75 unlock Free Domestic U.S. Priority Shipping</span>
              </div>
            </div>

            {/* Scripture & Garment Info Accordions */}
            <div className="border-t border-neutral-200 pt-4 space-y-2">
              {/* Garment Details Accordion */}
              <div className="border-b border-neutral-200">
                <button
                  type="button"
                  onClick={() => setActiveAccordion(activeAccordion === 'details' ? null : 'details')}
                  className="w-full py-3.5 flex items-center justify-between text-xs font-black uppercase tracking-wider text-black"
                >
                  <span>GARMENT SPECIFICATIONS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'details' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'details' && (
                  <div className="pb-4 text-xs text-neutral-600 space-y-2">
                    <p className="leading-relaxed">{product.description}</p>
                    <ul className="list-disc pl-4 space-y-1 pt-1 font-medium text-neutral-700">
                      {product.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Scripture & Meaning Accordion */}
              {product.scriptureReference && (
                <div className="border-b border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setActiveAccordion(activeAccordion === 'scripture' ? null : 'scripture')}
                    className="w-full py-3.5 flex items-center justify-between text-xs font-black uppercase tracking-wider text-black"
                  >
                    <span>FAITH & SCRIPTURE INSPIRATION</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'scripture' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === 'scripture' && (
                    <div className="pb-4 text-xs text-neutral-700 space-y-2">
                      <p className="font-bold text-black uppercase tracking-wider">
                        {product.scriptureReference}
                      </p>
                      <p className="italic bg-[#F6F5F2] p-3 border-l-2 border-black">
                        "{product.scriptureVerse}"
                      </p>
                      <p className="text-neutral-500">
                        Every UNFORSAKEN piece is created to serve as a wearable gospel conversation starter.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Shipping & Returns Accordion */}
              <div className="border-b border-neutral-200">
                <button
                  type="button"
                  onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full py-3.5 flex items-center justify-between text-xs font-black uppercase tracking-wider text-black"
                >
                  <span>SHIPPING & 30-DAY EXCHANGES</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'shipping' && (
                  <div className="pb-4 text-xs text-neutral-600 space-y-2 leading-relaxed">
                    <p>• <strong>Free Domestic Shipping:</strong> On all orders $75+</p>
                    <p>• <strong>Processing Time:</strong> Ships within 24-48 business hours from our U.S. warehouse.</p>
                    <p>• <strong>Exchanges:</strong> 30-day hassle-free size exchanges. We want your fit to be perfect.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <div className="flex items-center justify-between pb-8">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block mb-1">
                COMPLETE THE FIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
                RELATED PIECES
              </h2>
            </div>
            <Link
              to="/collection/all"
              className="text-xs font-bold uppercase tracking-wider text-black hover:underline"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>

      {/* Sizing Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setShowSizeGuide(false)} />
          <div className="min-h-screen px-4 flex items-center justify-center p-4">
            <div className="bg-white p-6 sm:p-8 max-w-lg w-full z-10 relative border border-neutral-200 shadow-2xl">
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-lg font-black uppercase tracking-wider mb-2">SIZE & FIT GUIDE</h3>
              <p className="text-xs text-neutral-500 mb-4">
                Measurements in inches. UNFORSAKEN garments are crafted with a modern, oversized streetwear silhouette.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse tabular-nums">
                  <thead>
                    <tr className="border-b border-black font-bold uppercase text-neutral-900">
                      <th className="py-2">Size</th>
                      <th className="py-2">Chest Width</th>
                      <th className="py-2">Length</th>
                      <th className="py-2">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-neutral-600">
                    <tr><td className="py-2 font-bold text-black">S</td><td className="py-2">22.5"</td><td className="py-2">28.0"</td><td className="py-2">24.5"</td></tr>
                    <tr><td className="py-2 font-bold text-black">M</td><td className="py-2">24.0"</td><td className="py-2">29.0"</td><td className="py-2">25.0"</td></tr>
                    <tr><td className="py-2 font-bold text-black">L</td><td className="py-2">25.5"</td><td className="py-2">30.0"</td><td className="py-2">25.5"</td></tr>
                    <tr><td className="py-2 font-bold text-black">XL</td><td className="py-2">27.0"</td><td className="py-2">31.0"</td><td className="py-2">26.0"</td></tr>
                    <tr><td className="py-2 font-bold text-black">2XL</td><td className="py-2">28.5"</td><td className="py-2">32.0"</td><td className="py-2">26.5"</td></tr>
                    <tr><td className="py-2 font-bold text-black">3XL</td><td className="py-2">30.0"</td><td className="py-2">33.0"</td><td className="py-2">27.0"</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-center">
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(false)}
                  className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
