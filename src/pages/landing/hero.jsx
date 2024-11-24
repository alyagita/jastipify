import React, { useState } from 'react';
import { Search, Globe, Box, Calendar } from 'lucide-react';

const SearchTabs = ({ activeTab, onTabChange }) => (
  <div className="flex">
    <div 
      className={`flex items-center px-6 py-3 rounded-t-lg cursor-pointer ${
        activeTab === 'country' 
          ? 'bg-white text-orange-500' 
          : 'bg-orange-300/30 text-white'
      }`}
      onClick={() => onTabChange('country')}
    >
      <Globe className="w-5 h-5 mr-2" />
      <span className="font-medium">Country</span>
    </div>
    <div 
      className={`flex items-center px-6 py-3 rounded-t-lg cursor-pointer ml-1 ${
        activeTab === 'product' 
          ? 'bg-white text-orange-500' 
          : 'bg-orange-300/30 text-white'
      }`}
      onClick={() => onTabChange('product')}
    >
      <Box className="w-5 h-5 mr-2" />
      <span className="font-medium">Product Name</span>
    </div>
  </div>
);

const SearchArea = ({ activeTab }) => {
  const [country, setCountry] = useState('');
  const [product, setProduct] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="bg-white rounded-lg rounded-tl-none shadow-lg">
      <div className="flex items-center p-4 gap-4">
        {activeTab === 'country' ? (
          <div className="flex-1 flex items-center">
            <Globe className="w-5 h-5 text-gray-400 mr-2" />
            <select 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-600"
            >
              <option value="">Select a Country...</option>
              <option value="thailand">Thailand</option>
              <option value="japan">Japan</option>
              <option value="france">France</option>
            </select>
          </div>
        ) : (
          <div className="flex-1 flex items-center">
            <Box className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter The Product Name"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-600"
            />
          </div>
        )}

        <div className="w-px h-8 bg-gray-200" />

        <div className="flex-1 flex items-center">
          <Calendar className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Choose Date..."
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-600"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>

        <button className="bg-orange-500 text-white p-3 rounded-lg
        hover:bg-orange-600 transition-colors">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('country');

  return (
    <div className="px-4 py-8">
      <section className="bg-[#FF6B00] relative rounded-lg overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Get Your Dream Items<br />
              from Around the World!
            </h1>
            <div>
              <SearchTabs activeTab={activeTab} onTabChange={setActiveTab} />
              <SearchArea activeTab={activeTab} />
            </div>
          </div>

          {/* Decorative Boxes */}
          <div className="absolute bottom-0 right-0 w-2/5 max-h-full z-0">
            <img 
              src="/boxes.png"
              alt="Decorative boxes"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};