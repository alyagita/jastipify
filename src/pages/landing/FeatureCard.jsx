import React from 'react';

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Icon className="w-8 h-8 text-black" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 max-w-sm mx-auto">{description}</p>
  </div>
);