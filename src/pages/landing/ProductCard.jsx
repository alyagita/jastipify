import React from 'react';
import { Star } from 'lucide-react';

export const ProductCard = ({ image, name, price, rating, sold }) => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="bg-gray-100 p-4 rounded-t-lg">
      <div className="aspect-square">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
    
    <div className="p-4">
      <h3 className="font-medium text-gray-900 mb-2">{name}</h3>
      
      <p className="text-orange-500 font-bold mb-3">
        {typeof price === 'number' 
          ? `Rp. ${price.toLocaleString()},00`
          : price
        }
      </p>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="inline-block">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>Sold : {sold}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Ratings</span>
          <span className="text-sm font-medium">{rating}</span>
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
        </div>
      </div>
    </div>
  </div>
);