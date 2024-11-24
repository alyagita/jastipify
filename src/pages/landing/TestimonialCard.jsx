import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonials }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Progress bar */}
      <div className="absolute top-4 right-4 flex gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className="w-8 h-1 rounded-full bg-black/10"
          >
            <div
              className={`h-full rounded-full bg-black transition-all duration-500 ${
                currentSlide === index ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="w-full flex-shrink-0"
          >
            <div className="bg-orange-500 p-6 rounded-xl mx-3">
              <p className="mb-4 text-lg text-gray-900">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-24 h-32 object-cover rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-lg text-gray-900">{testimonial.author}</h4>
                    <span className="text-sm text-gray-800">{testimonial.occupation}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current text-black" />
                  <span className="font-semibold text-lg text-gray-1000">{testimonial.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}