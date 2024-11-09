import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <img src="/assets/logo.png" className="w-24 h-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li><a href="/" className="text-gray-700 hover:text-orange-500">Home</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-orange-500">About Us</a></li>
        <li><a href="/on-sale" className="text-gray-700 hover:text-orange-500">On Sale</a></li>
        <li><a href="/contact" className="text-gray-700 hover:text-orange-500">Contact Us</a></li>
      </ul>

      {/* Search Bar */}
      <div className="flex items-center border border-orange-500 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for products..."
          className="px-4 py-1 text-orange-500 placeholder-orange-500 focus:outline-none"
        />
        <button className="px-4 bg-orange-500 text-white">
          {/* Search Icon */}
          <img src="/assets/search.png" alt="Search" className="w-4 h-4" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-orange-500">
        <a href="/cart">
          {/* Trolley Icon */}
          <img src="/assets/trolly.png" alt="Cart" className="w-6 h-6" />
        </a>
        <a href="/profile">
          {/* Profile Icon */}
          <img src="/assets/profile.png" alt="Profile" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;