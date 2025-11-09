import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden rounded-2xl"
      style={{
        background:
          'radial-gradient(1200px 600px at 10% 10%, rgba(243,156,18,0.25), transparent 60%), radial-gradient(800px 400px at 90% 20%, rgba(15,52,96,0.35), transparent 60%), linear-gradient(180deg, #1a1a2e 0%, #0f3460 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30" style={{ background: '#f39c12' }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: '#0f3460' }} />
      </div>

      <div className="relative z-10 px-6 py-20 md:px-12 md:py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-2 text-[#f39c12] mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="uppercase tracking-widest text-xs font-semibold">Welcome to</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Fantasy Haven
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#eaeaea]/90">
            Hand-crafted RPG accessories and bespoke fantasy art. Discover magical dice, custom character portraits, and whimsical stickers for your next adventure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-[#1a1a2e] bg-[#f39c12] hover:brightness-110 transition"
            >
              Shop Featured
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white border border-white/20 hover:border-white/40 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
