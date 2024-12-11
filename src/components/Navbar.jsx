import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import trolly from "../assets/trolly.png";
import profile from "../assets/profile.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <img src={logo} className="w-20 h-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-12">
        <li>
          <Link to="/" className="text-gray-700 hover:text-[#FA8B02]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-700 hover:text-[#FA8B02]">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/on-sale" className="text-gray-700 hover:text-[#FA8B02]">
            On Sale
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-700 hover:text-[#FA8B02]">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="flex items-center border h-8 border-[#FA8B02] rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for products..."
          className="pl-2 w-[30rem] py-1 text-xs text-[#FA8B02] placeholder-[#FA8B02] focus:outline-none"
        />
        <button className="px-4 bg-[#FA8B02] text-white h-8">
          {/* Search Icon */}
          <img src={search} alt="Search" className="w-6 h-6" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-8 text-[#FA8B02]">
        <a href="/cart">
          {/* Trolly Icon */}
          <img src={trolly} alt="Cart" className="w-6 h-6" />
        </a>
        <a href="/profile">
          {/* Profile Icon */}
          <img src={profile} alt="Profile" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;