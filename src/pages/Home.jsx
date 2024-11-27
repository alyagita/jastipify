import { Headphones, Tag, Truck } from 'lucide-react';
import React from 'react';
import { mockData } from './data/mockData';
import { CountryCard } from './landing/CountryCard';
import { FeatureCard } from './landing/FeatureCard';
import { Hero } from './landing/hero';
import { ProductCard } from './landing/ProductCard';
import TestimonialCard from './landing/TestimonialCard';

function Home() {
  const iconComponents = {
    Tag,
    Truck,
    Headphones
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <main>
        <div className="container mx-auto px-4 py-12">
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">
                  Top Countries for Jastip at Jastipify
                </h2>
                <p className="text-gray-500 mb-4">
                  Easily Buy Items From Your Favorite Countries!
                </p>
                <button className="flex items-center gap-2 bg-blue-100 text-black px-4 py-2 rounded-lg w-fit hover:bg-blue-200 transition-colors">
                  See more <span>→</span>
                </button>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockData.countries.map((country) => (
                  <CountryCard key={country.name} {...country} />
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">About Us</h2>
              <p className="text-gray-500">
                Join us now and experience a seamless way to shop globally, where convenience meets affordability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.features.map((feature) => (
                <FeatureCard 
                  key={feature.title} 
                  {...feature} 
                  icon={iconComponents[feature.icon]}
                />
              ))}
            </div>
          </section>
        </div>

        <section className="mb-12 bg-blue-100">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Favorite Categories at Jastipify</h2>
              <p className="text-gray-600">Discover the Best Products from Popular Categories!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {mockData.categories.map((category, index) => (
                <div 
                  key={category.name}
                  className={`relative ${
                    index === 1 ? 'md:transform md:translate-y-12' : ''
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-full mb-2">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full aspect-square object-cover rounded-xl shadow-sm"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-black text-lg font-medium">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-16">
              <button className="bg-white hover:bg-gray-50 transition-colors px-8 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-sm">
                Explore <span className="text-black">→</span>
              </button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockData.products.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
              
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">Best Sellers</h2>
                <p className="text-gray-500 mb-4">
                  Best-Selling<br />
                  Products That<br />
                  Everyone Wants!
                </p>
                <button className="flex items-center gap-2 bg-blue-200 text-gray-800 px-6 py-2 rounded-lg w-fit hover:bg-blue-300 transition-colors">
                  See more <span>→</span>
                </button>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What customers say about Jastipify?</h2>
            <TestimonialCard testimonials={mockData.testimonials} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home