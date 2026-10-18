import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ArrowRight, Truck, Check, Lock, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    freeShippingProgress,
    totalItems
  } = useCart();

  const [orderNote, setOrderNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold uppercase tracking-wider text-[#151515]">
                Cart
              </h2>
              {totalItems > 0 && (
                <span className="text-xs font-bold text-neutral-500 tabular-nums">
                  ({totalItems})
                </span>
              )}
            </div>

            <button
              onClick={closeCart}
              className="p-1.5 text-neutral-500 hover:text-black transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#F6F5F2] px-6 py-4 border-b border-neutral-200">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
              <span className="flex items-center gap-1.5 text-neutral-800">
                <Truck className="w-3.5 h-3.5" />
                {amountNeededForFreeShipping === 0 ? (
                  <span className="text-emerald-700">YOU UNLOCKED FREE U.S. SHIPPING!</span>
                ) : (
                  <span>
                    ADD <strong className="text-black tabular-nums">${amountNeededForFreeShipping.toFixed(2)}</strong> FOR FREE SHIPPING
                  </span>
                )}
              </span>
              <span className="text-neutral-500 tabular-nums">{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full bg-neutral-200 h-1.5 overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {orderPlaced ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                  ORDER PLACED!
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  DEMO CHECKOUT COMPLETE
                </p>
                <p className="text-sm text-neutral-600 max-w-xs leading-relaxed">
                  Thank you for walking with UNFORSAKEN. In production, this completes directly through the verified Shopify Storefront checkout.
                </p>
                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    closeCart();
                  }}
                  className="mt-4 px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <h3 className="text-xl font-normal uppercase tracking-tight text-[#151515]">
                  Your cart is currently empty.
                </h3>
                <div className="pt-2 w-full max-w-xs">
                  <Link
                    to="/collection/all"
                    onClick={closeCart}
                    className="w-full inline-block py-3.5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              </div>
            ) : (
              /* Items List */
              <div className="divide-y divide-neutral-100">
                {cart.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-[#F6F5F2] border border-neutral-200 overflow-hidden shrink-0">
                      <img
                        src={item.product.primaryImage}
                        alt={item.product.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/product/${item.product.handle}`}
                            onClick={closeCart}
                            className="text-xs sm:text-sm font-bold text-[#111111] hover:underline leading-snug line-clamp-1"
                          >
                            {item.product.title}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-neutral-400 hover:text-red-600 p-1 transition-colors"
                            aria-label={`Remove ${item.product.title}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Variants */}
                        <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                          <span>Size: <strong className="text-neutral-800">{item.size}</strong></span>
                          <span>·</span>
                          <span>{item.color}</span>
                        </div>
                      </div>

                      {/* Quantity & Unit Price */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-neutral-300 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 text-neutral-600 hover:text-black transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-bold text-black tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 text-neutral-600 hover:text-black transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-black text-black tabular-nums">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && !orderPlaced && (
            <div className="p-6 border-t border-neutral-200 bg-[#F6F5F2] space-y-4">
              {/* Optional order notes toggle */}
              <div>
                {!showNoteInput ? (
                  <button
                    onClick={() => setShowNoteInput(true)}
                    className="text-xs font-bold text-neutral-600 hover:text-black underline underline-offset-2"
                  >
                    + Add order notes / special instructions
                  </button>
                ) : (
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase text-neutral-600 block">
                      Order Instructions:
                    </label>
                    <textarea
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="Special delivery notes, prayer requests, or sizing instructions..."
                      rows={2}
                      className="w-full p-2 bg-white border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-black"
                    />
                  </div>
                )}
              </div>

              {/* Subtotal */}
              <div className="space-y-1.5 pt-2 border-t border-neutral-200">
                <div className="flex items-center justify-between text-sm font-black text-[#111111]">
                  <span>ESTIMATED SUBTOTAL</span>
                  <span className="text-base tabular-nums">${subtotal.toFixed(2)} USD</span>
                </div>
                <p className="text-[11px] text-neutral-500">
                  Taxes and shipping calculated at checkout.
                </p>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                disabled={isCheckingOut}
                onClick={handleCheckout}
                className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 group"
              >
                {isCheckingOut ? (
                  <span>PROCESSING DEMO CHECKOUT...</span>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>CHECKOUT · ${subtotal.toFixed(2)} USD</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                  256-BIT ENCRYPTED · FREE U.S. EXCHANGES
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
