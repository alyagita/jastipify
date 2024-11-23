import React from 'react'

const Search = () => {
  const stores = [
    {
      image: '/WishList.png',
      title: 'WishList',
      date: '15 Sept - 03 Oct 2024',
      sold: '25',
      country: 'South Korea',
      rating: '4.9'
    },
    {
      image: '/BoutiqueID.png',
      title: 'BoutiqueID',
      date: '1 Oct - 15 Oct 2024',
      sold: '15',
      country: 'South Korea',
      rating: '4.9'
    },
    {
      image: '/PickShop.png',
      title: 'PickShop',
      date: '02 Sept - 30 Sept 2024',
      sold: '115',
      country: 'South Korea',
      rating: '4.9'
    },
    {
      image: '/LuxuryList.png',
      title: 'LuxuryList',
      date: '20 Sept - 10 Oct 2024',
      sold: '2985',
      country: 'South Korea',
      rating: '5.0'
    },
    {
      image: '/TreasureHunt.png',
      title: 'TreasureHunt',
      date: '25 Sept - 01 Oct 2024',
      sold: '1467',
      country: 'South Korea',
      rating: '4.6'
    },
    {
      image: '/FindsOfficial.png',
      title: 'FindsOfficial',
      date: '19 Sept - 30 Sept 2024',
      sold: '95',
      country: 'South Korea',
      rating: '4.9'
    }
  ]

  const SearchItem = ({ image, title, date, sold, country, rating }) => (
    <div className="flex items-center gap-6 p-6 border-b border-gray-200">
      <img 
        src={image} 
        alt={title} 
        className="w-48 h-32 rounded-lg object-cover"
      />
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fb8500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600"><span className="font-bold">Date:</span> {date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fb8500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-gray-600"><span className="font-bold">Sold:</span> {sold} Items</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fb8500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                <span className="text-gray-600"><span className="font-bold">Country:</span> {country}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold">{rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <button className="w-32 px-4 py-2 text-[#fb8500] border border-[#fb8500] rounded-full hover:bg-[#fb8500] hover:text-white transition-colors">
              View Store
            </button>
            <button className="w-32 px-4 py-2 bg-[#fb8500] text-white rounded-full hover:bg-[#e67a00] transition-colors">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <header className="mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src="/logo.png" alt="Company Logo" className="h-12 w-auto" />
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#fb8500]">Home</a>
              <a href="/about" className="text-gray-700 hover:text-[#fb8500]">About Us</a>
              <a href="/sale" className="text-gray-700 hover:text-[#fb8500]">On Sale</a>
              <a href="/contact" className="text-gray-700 hover:text-[#fb8500]">Contact Us</a>
            </nav>

            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-64 px-4 py-2 border border-[#fb8500] rounded-lg focus:outline-none focus:border-[#fb8500] placeholder-gray-400"
                />
                <button className="absolute right-0 top-0 h-full w-12 bg-[#fb8500] text-white rounded-r-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              <div className="ml-4 text-[#fb8500]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <div className="ml-4 text-[#fb8500]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium mb-8">
          SEARCH RESULT FOR <span className="text-[#fb8500]">"South Korea"</span> and <span className="text-[#fb8500]">"02 Sept - 03 Oct 2024"</span>
        </h2>

        <div className="space-y-6">
          {stores.map((store, index) => (
            <SearchItem key={index} {...store} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 bg-[#fb8500] text-white rounded-full hover:bg-[#e67a00] transition-colors">
            Show More
          </button>
        </div>
      </div>

      <footer className="bg-gray-100 mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">HELP</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Customer Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Delivery Details</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">FAQ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Account</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Manage Deliveries</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Orders</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#fb8500]">Payments</a></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-300">
            <p className="text-gray-600">Jastipify © 2024, All Rights Reserved</p>
            <img src="/payments.png" alt="Payment Methods" className="h-8" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Search