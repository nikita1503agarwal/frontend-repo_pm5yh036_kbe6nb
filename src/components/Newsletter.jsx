import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email.' });
      return;
    }
    setStatus({ type: 'success', msg: 'Subscribed! (demo only)' });
    setEmail('');
  };

  return (
    <section className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f3460] to-[#1a1a2e] p-6 md:p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Join the Adventurers Guild</h2>
      <p className="mt-2 text-[#eaeaea]/85">Get first access to limited dice drops, art commissions, and discounts.</p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
        />
        <button type="submit" className="rounded-md px-5 py-3 font-semibold bg-[#f39c12] text-[#1a1a2e] hover:brightness-110">
          Subscribe
        </button>
      </form>
      {status && (
        <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</p>
      )}
    </section>
  );
};

export default Newsletter;
