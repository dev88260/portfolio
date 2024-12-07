import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600',
    title: 'Programming',
  },
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
    title: 'Data Analysis',
  },
  {
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    title: 'Design',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}