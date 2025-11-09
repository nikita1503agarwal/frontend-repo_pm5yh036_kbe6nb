import React from 'react';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChoose from './components/WhyChoose';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-[#0f3460] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 backdrop-blur bg-[#1a1a2e]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-wide text-xl">
            <span className="text-[#f39c12]">Fantasy</span> Haven
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-[#eaeaea]">
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#newsletter" className="hover:text-white">Newsletter</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Hero />
        <FeaturedProducts />
        <WhyChoose />
        <div id="newsletter"><Newsletter /></div>
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t border-white/10 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#eaeaea]/80">© {new Date().getFullYear()} Fantasy Haven. All rights reserved.</p>
          <div className="text-xs text-[#eaeaea]/70">Crafted for adventurers and dreamers.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
