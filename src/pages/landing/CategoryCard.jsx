import React from 'react';

export function CategoryCard({ image, name }) {
  return (
    <div className="relative max-w-sm mx-auto">
      <img 
        src={image} 
        alt={name} 
        className="w-full aspect-square object-cover rounded-xl"
      />
      <div className="absolute -bottom-4 left-0 w-full text-center">
        <h3 className="text-black text-lg font-medium">
          {name}
        </h3>
      </div>
    </div>
  );
}