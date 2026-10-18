import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, DollarSign, Gift, Sparkles, Send } from 'lucide-react';

export const AmbassadorPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    instagram: '',
    tiktok: '',
    city: '',
    whyJoin: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block">
            UNFORSAKEN CREATOR PROGRAM
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#111111]">
            WEAR THE GOOD NEWS. <br />
            <span className="text-neutral-400">SHARE THE GOOD NEWS.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Join thousands of creators, athletes, and believers carrying the gospel into streets, universities, and gyms across the globe.
          </p>
        </div>

        {/* 3 Main Program Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#F6F5F2] border border-neutral-200 space-y-4">
            <span className="text-xs font-black tracking-widest uppercase text-neutral-400">01 / EARNINGS</span>
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              10% CASH COMMISSION
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Earn 10% commission on every order placed using your personalized referral link or promo code. Monthly cash payouts via PayPal or store credit once you hit $25.
            </p>
          </div>

          <div className="p-8 bg-[#F6F5F2] border border-neutral-200 space-y-4">
            <span className="text-xs font-black tracking-widest uppercase text-neutral-400">02 / COMMUNITY PERK</span>
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              15% FOLLOWER DISCOUNT
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Give your friends, church community, and social followers an exclusive 15% discount on all heavyweight hoodies, tees, and drops.
            </p>
          </div>

          <div className="p-8 bg-[#F6F5F2] border border-neutral-200 space-y-4">
            <span className="text-xs font-black tracking-widest uppercase text-neutral-400">03 / EXCLUSIVE ACCESS</span>
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              FREE DROPS & SNEAK PEEKS
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Top active ambassadors receive free packages of unreleased collection samples before public drops and features on our official @shopunforsaken feed.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 bg-[#F6F5F2] border border-neutral-300">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              APPLY FOR THE PROGRAM
            </h2>
            <p className="text-xs text-neutral-500">
              Applications are reviewed weekly. Requirements: 18+ and an active presence on Instagram or TikTok.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white p-8 border border-neutral-200 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
              <h3 className="text-xl font-black uppercase tracking-tight text-black">APPLICATION SUBMITTED!</h3>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                Thank you for applying, {formData.fullName || 'Warrior'}. Carson and the ambassador team will review your channels and email your custom affiliate code within 48-72 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Caleb Miller"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">Instagram Handle</label>
                  <input
                    type="text"
                    required
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    placeholder="@yourhandle"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">TikTok Handle (Optional)</label>
                  <input
                    type="text"
                    value={formData.tiktok}
                    onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                    placeholder="@yourtiktok"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">City & State</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Austin, TX"
                  className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-700 block mb-1">Why do you want to represent UNFORSAKEN?</label>
                <textarea
                  rows={3}
                  required
                  value={formData.whyJoin}
                  onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                  placeholder="Tell us about your faith walk and how you plan to share the message..."
                  className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT AMBASSADOR APPLICATION</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
