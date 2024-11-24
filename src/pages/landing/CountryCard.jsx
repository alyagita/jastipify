import React from 'react';

export const CountryCard = ({ image, name }) => (
  <div className="flex flex-col">
    <div className="relative rounded-xl overflow-hidden group cursor-pointer">
      <div className="aspect-[4/5]">
        <img 
          src={image} 
          alt={`${name} landmark`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent" />
    </div>
    <h3 className="mt-3 text-lg font-semibold">
      {name}
    </h3>
  </div>
);