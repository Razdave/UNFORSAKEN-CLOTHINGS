import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, Send } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block">
            ABOUT UNFORSAKEN
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#111111]">
            NEVER ABANDONED.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            The story behind the brand, our founder Carson Young, and why we believe clothing is a canvas to proclaim Christ.
          </p>
        </div>

        {/* Hero Image & Founder intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-5 aspect-4/5 bg-neutral-100 border border-neutral-300 overflow-hidden">
            <img
              src="/src/assets/images/founder_carson_young_1792353908124.jpg"
              alt="Carson Young, Founder of UNFORSAKEN"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="md:col-span-7 space-y-5">
            <span className="text-xs font-black tracking-widest uppercase text-neutral-400">
              MEET CARSON YOUNG
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
              A Vision Born in the Valley
            </h2>
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                In early 2023, Carson Young faced a season of profound uncertainty. Navigating personal grief and spiritual testing, he turned to the scriptures for refuge and found <strong>2 Corinthians 4:8-9</strong>:
              </p>
              <blockquote className="p-4 bg-[#F6F5F2] border-l-2 border-black italic text-neutral-900 font-medium">
                "We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed."
              </blockquote>
              <p>
                That word became his lifeline: <em>We are UNFORSAKEN</em>. God had not left him, and He hasn’t left you. Carson wanted to create clothing that carried that uncompromising assurance into everyday culture.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars of UNFORSAKEN */}
        <div className="border-t border-b border-neutral-200 py-12">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.25em] text-neutral-400 mb-8">
            OUR CORE CONVICTIONS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 bg-[#F6F5F2] border border-neutral-200">
              <span className="text-2xl font-black text-black">01</span>
              <h4 className="text-base font-black uppercase tracking-tight text-black">
                NO CORNY GRAPHICS
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Faith apparel doesn't need to look cheap or outdated. We engineer legitimate heavyweight box cuts, custom pigment washes, and high-density typography comparable to luxury streetwear labels.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-[#F6F5F2] border border-neutral-200">
              <span className="text-2xl font-black text-black">02</span>
              <h4 className="text-base font-black uppercase tracking-tight text-black">
                GOSPEL CONVERSATION STARTERS
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every drop is an intentional talking point. From "FEAR GOD" to "NEVER ALONE", our garments prompt questions from strangers on college campuses, gyms, and airports, opening doors for Jesus.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-[#F6F5F2] border border-neutral-200">
              <span className="text-2xl font-black text-black">03</span>
              <h4 className="text-base font-black uppercase tracking-tight text-black">
                KINGDOM GENEROSITY
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A percentage of all profits goes directly toward Christian youth outreach, men's freedom ministries, and supporting church plants in unreached areas.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="max-w-2xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-black tracking-widest uppercase text-neutral-400">
              GET IN TOUCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              CONTACT OUR TEAM
            </h3>
            <p className="text-xs text-neutral-500">
              Questions about an order, size guidance, or wholesale partnerships? Send us a message.
            </p>
          </div>

          {contactSubmitted ? (
            <div className="p-6 bg-[#F6F5F2] border border-neutral-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-black mx-auto" />
              <p className="text-sm font-bold text-black">Message Received</p>
              <p className="text-xs text-neutral-600">
                Our team responds within 24 hours Monday through Friday. God bless you!
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#F6F5F2] border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-[#F6F5F2] border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Order inquiry, sizing, or prayer request"
                  className="w-full px-4 py-3 bg-[#F6F5F2] border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we serve you?"
                  className="w-full px-4 py-3 bg-[#F6F5F2] border border-neutral-300 text-xs focus:outline-hidden focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
