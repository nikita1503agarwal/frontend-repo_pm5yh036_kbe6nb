import React from 'react';
import { Shield, Star, Truck, Paintbrush } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Premium Quality', desc: 'Hand-crafted accessories built to endure campaigns and conquests.' },
  { icon: Paintbrush, title: 'Bespoke Artwork', desc: 'Commission unique portraits tailored to your character’s story.' },
  { icon: Truck, title: 'Fast Shipping', desc: 'Tracked delivery with care so treasures arrive safely.' },
  { icon: Star, title: 'Loved by Adventurers', desc: '5-star reviews from players and DMs across the realms.' },
];

const WhyChoose = () => {
  return (
    <section id="about" className="mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Why Choose Fantasy Haven</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-white">
            <div className="h-10 w-10 rounded-md flex items-center justify-center bg-[#f39c12]/20 text-[#f39c12]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-[#eaeaea]/80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
