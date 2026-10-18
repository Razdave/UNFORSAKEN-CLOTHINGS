import React from 'react';

export const FreedomAppSection: React.FC = () => {
  return (
    <section id="freedom-app" className="w-full bg-white py-16 sm:py-24 border-t border-neutral-200">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: App Lifestyle Photography */}
          <div className="lg:col-span-6 overflow-hidden bg-neutral-100 border border-neutral-200 aspect-4/3 sm:aspect-16/11">
            <img
              src="/src/assets/images/campaign_freedom_app_1792353907450.jpg"
              alt="Freedom App by UNFORSAKEN daily habit tracking"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Right: Exact Copy from shopunforsaken.com */}
          <div className="lg:col-span-6 space-y-5 text-neutral-800">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block">
              FREEDOM APP BY UNFORSAKEN
            </span>

            <h2 className="text-2xl sm:text-4xl font-normal uppercase tracking-tight text-[#151515] leading-tight">
              Break Free. Build Discipline. Walk in Freedom.
            </h2>

            <p className="text-sm sm:text-base font-semibold text-neutral-900 leading-relaxed">
              Break free from porn, lust, and the shame cycle with a structured, Christ-centered recovery system designed for real transformation.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              This isn’t a streak counter. It’s a full system built on behavioral science and biblical discipline. Take a deep personal assessment, receive a customized Freedom Blueprint, and follow a daily structure that helps you rebuild your identity and habits.
            </p>

            <div className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
              <p className="font-bold text-black pb-1">Inside the app you’ll find:</p>
              <p>• A personalized Freedom Blueprint</p>
              <p>• Daily guided check-ins</p>
              <p>• Temptation Emergency Mode</p>
              <p>• Relapse Recovery Protocol</p>
              <p>• A full progress dashboard</p>
              <p>• Scripture-based renewal system</p>
              <p>• Your own AI-powered Freedom Coach trained on your personal assessment</p>
            </div>

            <div className="pt-2 space-y-1 text-xs sm:text-sm text-neutral-800 font-medium">
              <p>Freedom isn’t about trying harder.</p>
              <p className="font-bold text-black">It’s about building structure.</p>
              <p className="pt-2 text-neutral-600">
                Start with a 3-day free trial and take the first step toward lasting change.
              </p>
              <p className="font-bold text-black uppercase tracking-wide">
                You are not abandoned. You are being rebuilt.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://freedomappbyunforsaken.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#151515] text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                START FREE TRIAL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
