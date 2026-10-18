import React, { useState } from 'react';
import { Gift, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const GiftCardsPage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [added, setAdded] = useState(false);
  const { openCart } = useCart();

  const amounts = [25, 50, 75, 100, 150, 200];

  const handleAddGiftCard = (e: React.FormEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openCart();
    }, 600);
  };

  return (
    <div className="w-full bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block">
            DIGITAL GIFT CERTIFICATE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#111111]">
            UNFORSAKEN GIFT CARD
          </h1>
          <p className="text-sm text-neutral-600 max-w-lg mx-auto">
            Delivered instantly via email with no expiration dates or hidden transaction fees. Perfect for birthdays, baptisms, or blessings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Card Mockup */}
          <div className="md:col-span-6 bg-black text-white p-8 aspect-16/10 flex flex-col justify-between border border-neutral-800 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black tracking-tighter uppercase">UNFORSAKEN</span>
              <Gift className="w-6 h-6 text-neutral-400" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">VALUE</span>
              <p className="text-4xl font-black tracking-tight tabular-nums">${selectedAmount} USD</p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-widest border-t border-neutral-800 pt-3">
              <span>2 CORINTHIANS 4:9</span>
              <span>NO EXPIRATION</span>
            </div>
          </div>

          {/* Configuration Form */}
          <form onSubmit={handleAddGiftCard} className="md:col-span-6 space-y-5 bg-[#F6F5F2] p-6 sm:p-8 border border-neutral-200">
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-black block mb-2">
                SELECT AMOUNT (USD)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-2.5 text-xs font-bold border transition-all tabular-nums ${
                      selectedAmount === amt
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-300 bg-white text-neutral-800 hover:border-black'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">
                Recipient Email (Where to send card)
              </label>
              <input
                type="email"
                required
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder="friend@email.com"
                className="w-full px-4 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Carson"
                className="w-full px-4 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">
                Personal Blessing / Gift Message (Optional)
              </label>
              <textarea
                rows={2}
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Walk in bold faith brother!"
                className="w-full px-4 py-2 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDED TO BAG!</span>
                </>
              ) : (
                <>
                  <Gift className="w-4 h-4" />
                  <span>ADD ${selectedAmount} GIFT CARD TO BAG</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
