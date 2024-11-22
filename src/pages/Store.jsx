import React from "react";
import { useNavigate } from "react-router-dom";


const StoreHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Store Header */}
      <div
        className="bg-[url('sampul.png')] bg-cover bg-center bg-black bg-opacity-50 text-white p-5 rounded-lg flex items-center gap-5 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('sampul.png')",
        }}
      >
        <div className="relative flex items-center">
          <img
            src="profil_toko.png"
            alt="Store Logo"
            className="w-20 h-20 rounded-full"
          />
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FB8500] text-white px-7 py-0.5 rounded-xl text-sm font-bold">
            Star+
          </div>
        </div>

        <div className="flex-1 text-left">
          <h2 className="text-2xl m-0">BoutiqueID</h2>
          <div className="mt-1 text-gray-300">
            <p className="flex items-center gap-1 mb-1">
              <img
                className="w-5"
                src="icon_followers.png"
                alt="Followers Icon"
              />
              Followers: 2.6k
            </p>
            <p className="flex items-center gap-1">
              <span>⭐</span> Ratings: 4.9/5.0
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center mt-16">
          <button className="bg-[#FB8500] border-none px-9 py-1 text-white rounded font-bold text-sm hover:bg-[#e07300] transition-colors">
            Follow
          </button>
          <button className="bg-[#FB8500] border-none px-8 py-1 text-white rounded font-bold text-sm hover:bg-[#e07300] transition-colors"
          onClick={() => navigate('/chat')}>
            Request
          </button>
        </div>

        {/* Chat Container */}
        <div className="absolute top-2.5 right-8 flex flex-col items-center">
          <div className="text-white text-base mb-2.5">
            <p className="flex items-center">
              Chat
              <img className="w-6 ml-1" src="icon_chat.png" alt="Chat Icon" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 p-5 rounded-lg text-left shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />
      <h3 className="text-3l font-semibold my-2.5">{product.name}</h3>
      <p className="text-[#FB8500] text-3l font-bold my-2.5">{product.price}</p>
      <p className="text-2l text-gray-500 flex my-2.5 items-center gap-1">
        <img className="w-5" src="icon_sold.png" alt="Sold Icon" />
        Sold: {product.sold}
      </p>
      <p className="text-2l text-gray-500">Rating: {product.rating} ⭐</p>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-4 gap-5 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <button className="px-5 py-2.5 border-none bg-[#FB8500] text-white rounded hover:bg-[#e07300] transition-colors">
          Show More
        </button>
      </div>
    </>
  );
};

function Store() {
  const products = [
    {
      image: "baju_hitam.png",
      name: "T-shirt with Tape Details",
      price: "Rp. 350.000,00",
      sold: 2,
      rating: 4.9,
    },
    {
      image: "baju_oren.png",
      name: "Courage Graphic T-shirt",
      price: "Rp. 299.000,00",
      sold: 1,
      rating: 4.8,
    },
    {
      image: "jeans_panjang.png",
      name: "Skinny Fit Jeans",
      price: "Rp. 500.000,00",
      sold: 2,
      rating: 4.9,
    },
    {
      image: "baju_garis.png",
      name: "Black Striped T-shirt",
      price: "Rp. 350.000,00",
      sold: 4,
      rating: 4.7,
    },
    {
      image: "topi_macan.png",
      name: "Leopard Bucket Hat",
      price: "Rp. 350.000,00",
      sold: 8,
      rating: 4.9,
    },
    {
      image: "flatshoes.png",
      name: "Black Flat Shoes",
      price: "Rp. 450.000,00",
      sold: 8,
      rating: 4.9,
    },
    {
      image: "kacamata.png",
      name: "Vintage Sunglasses",
      price: "Rp. 220.000,00",
      sold: 2,
      rating: 4.7,
    },
    {
      image: "jeans_pendek.png",
      name: "Loose Fit Bermuda Shorts",
      price: "Rp. 380.000,00",
      sold: 17,
      rating: 4.9,
    },
  ];

  return (
    <div className="max-w-full mx-auto p-5">
      <StoreHeader />
      <ProductList products={products} />
    </div>
  );
}

export default Store;
