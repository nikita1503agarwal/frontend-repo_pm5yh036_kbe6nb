import React from 'react';

const products = [
  {
    id: 1,
    name: 'Custom Dice Set',
    price: 34.99,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1605187151662-3d6507eb93f3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Hand-Drawn Character Art',
    price: 79.0,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Fantasy Stickers',
    price: 12.5,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1652098003538-801fa38f41a2?q=80&w=1200&auto=format&fit=crop',
  },
];

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? '#f39c12' : 'none'}
    stroke="#f39c12"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11.48 3.499a.562.562 0 011.04 0l2.126 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.56a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.983 20.497a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.56a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const FeaturedProducts = () => {
  return (
    <section id="shop" className="mt-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Picks</h2>
        <a href="#" className="text-[#f39c12] hover:underline">View all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur border border-white/10">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">{p.name}</h3>
              <div className="mt-1 flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} filled={i <= p.rating} />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[#f39c12] font-bold">${p.price.toFixed(2)}</span>
                <button className="px-3 py-2 text-sm font-medium rounded-md bg-[#f39c12] text-[#1a1a2e] hover:brightness-110">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
