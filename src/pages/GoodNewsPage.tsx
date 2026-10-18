import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, BookOpen } from 'lucide-react';

export const GoodNewsPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block">
            THE HEART OF UNFORSAKEN
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#111111]">
            THE GOOD NEWS
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            More than an apparel brand, our heartbeat is sharing the greatest message ever given to humanity: the Gospel of Jesus Christ.
          </p>
        </div>

        {/* 4 Gospel Truths */}
        <div className="space-y-6">
          <div className="p-8 bg-[#F6F5F2] border border-neutral-200 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">01 / GOD'S LOVE</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">
              YOU WERE CREATED ON PURPOSE
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              God is not distant, uncaring, or angry with you. He is your Creator who formed you with intentionality and loves you with an everlasting love.
            </p>
            <p className="text-xs font-bold text-neutral-800 italic pt-1">
              "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life." — John 3:16
            </p>
          </div>

          <div className="p-8 bg-[#F6F5F2] border border-neutral-200 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">02 / THE BROKENNESS</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">
              WE ARE ALL IN NEED OF RESCUE
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Every single one of us has fallen short. We have tried to build life on our own terms, chase temporary pleasures, and hide in shame. The Bible calls this sin — and it separates us from a holy God.
            </p>
            <p className="text-xs font-bold text-neutral-800 italic pt-1">
              "For all have sinned and fall short of the glory of God." — Romans 3:23
            </p>
          </div>

          <div className="p-8 bg-[#F6F5F2] border border-neutral-200 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">03 / THE SACRIFICE</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">
              JESUS PAID IT ALL
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              God didn't leave us in our brokenness. Jesus Christ, God in human flesh, lived the sinless life we could not live and died on a roman cross in our place. Three days later, He rose physically from the grave, conquering sin, death, and shame forever.
            </p>
            <p className="text-xs font-bold text-neutral-800 italic pt-1">
              "But God demonstrates His own love for us in this: While we were still sinners, Christ died for us." — Romans 5:8
            </p>
          </div>

          <div className="p-8 bg-[#F6F5F2] border border-neutral-200 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">04 / THE INVITATION</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">
              RECEIVE SALVATION TODAY
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Salvation cannot be earned through religion, good deeds, or moral performance. It is a free gift received by grace through faith in Jesus Christ alone. When you repent and surrender your life to Him, you are forgiven, given the Holy Spirit, and made completely new.
            </p>
            <p className="text-xs font-bold text-neutral-800 italic pt-1">
              "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved." — Romans 10:9
            </p>
          </div>
        </div>

        {/* Prayer of surrender */}
        <div className="p-8 bg-black text-white text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            A SIMPLE PRAYER TO SURRENDER YOUR LIFE
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto italic leading-relaxed">
            "Lord Jesus, I confess that I am a sinner in need of Your grace. I believe You died on the cross for my sins and rose from the dead. I turn from my sin and put all my trust in You as my Lord and Savior. Fill me with Your Holy Spirit and help me live for You every day. In Jesus' name, Amen."
          </p>
          <div className="pt-2">
            <Link
              to="/about#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              <span>NEED PRAYER? CONTACT US</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
