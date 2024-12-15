import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StoreHeader = ({ onOpenChat }) => {
  return (
    <div className="max-w-7xl mx-auto px-[15px]">
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
          <button
            className="bg-[#FB8500] border-none px-8 py-1 text-white rounded font-bold text-sm hover:bg-[#e07300] transition-colors"
            onClick={onOpenChat}
          >
            Request
          </button>
        </div>

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

const ChatPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Default posisi awal
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    // Hitung posisi awal di kanan bawah
    const initialX = window.innerWidth - 600 - 20; // 600 adalah lebar popup, 20 adalah margin
    const initialY = window.innerHeight - 485 - 20; // 500 adalah tinggi popup, 20 adalah margin
    setPosition({ x: initialX, y: initialY });
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="fixed w-full md:w-[600px] h-[500px] border border-gray-200 bg-white shadow-lg flex flex-col"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 1000,
        transform: "translate(0, 0)",
      }}
    >
      <header
        className="flex items-center p-3 bg-orange-500 text-white cursor-move"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img src="profil_toko.png" alt="BoutiqueID Logo" className="w-10 mr-3" />
        <h1>BoutiqueID</h1>
        <button
          className="ml-auto text-white font-bold text-lg"
          onClick={onClose}
        >
          ✕
        </button>
      </header>

      <div className="p-5 overflow-y-auto flex-grow">
        <div className="flex flex-col items-end mb-5">
          <div className="flex items-start justify-end">
            <div className="bg-[#F0F0F0] text-black p-3 rounded-lg max-w-[60%] border border-[#000000]">
              <p>Halo kak, saya ingin request barang Crocs Unisex-Adult Baya Clogs warna cream, apakah bisa?</p>
            </div>
            <img
              src="profil_user.png"
              alt="User Profile"
              className="w-8 h-8 rounded-full ml-3"
            />
          </div>
          <span className="text-sm text-gray-500 mt-1">02:20 pm</span>
        </div>

        <div className="flex flex-col items-start mb-5">
  <div className="flex items-start">
    <img
      src="profil_toko.png"
      alt="Store Profile"
      className="w-8 h-8 rounded-full mr-3"
    />
    <div
      className="flex flex-col bg-[#FFFFFF] p-3 rounded-lg max-w-[90%] border border-[#000000]"
      style={{ color: '#555758' }}
    >
      <p>Bisa kak, Silahkan isi form berikut ya! :)</p>
    </div>
  </div>
  <span className="text-sm text-gray-500 mt-1">02:22 pm</span>
        </div>

        <div className="flex flex-col items-start mb-5">
          <div className="flex items-start">
            <img
              src="profil_toko.png"
              alt="Store Profile"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div
              className="flex flex-col bg-[#FFFFFF] p-3 rounded-lg max-w-[60%] border border-[#000000]"
              style={{ color: "#555758" }}
            >
              <p>
                ~ FORMAT JASTIP BARANG REQUEST ~<br />
                Nama Pemesan: <br />
                Kontak Pemesan: <br />
                Nama Produk yang Diinginkan: <br />
                Jumlah Barang yang Dipesan: <br />
                Alternatif Produk (Jika Produk Utama Tidak Tersedia): <br />
                Alamat Pengiriman di Indonesia: <br />
                Catatan Tambahan (Jika Ada):
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500 mt-1">02:25 pm</span>
        </div>

        <div className="flex flex-col items-end mb-5">
          <div className="flex items-start justify-end">
            <div className="flex flex-col bg-[#F0F0F0] text-black p-3 rounded-lg max-w-[60%] border border-[#000000]">
              <p>
                ~ FORMAT JASTIP BARANG REQUEST ~<br />
                Nama Pemesan: Sisilia Leonita<br />
                Kontak Pemesan: 085712345670<br />
                Nama Produk yang Diinginkan: Crocs Unisex-Adult Baya Clogs warna cream<br />
                Alternatif Produk: Crocs Unisex-Adult Baya Clogs warna hitam<br />
                Alamat Pengiriman di Indonesia: Jl. Bhaskara Sari No.09, Surabaya<br />
                Catatan Tambahan: -
              </p>
            </div>
            <img
              src="profil_user.png"
              alt="User Profile"
              className="w-8 h-8 rounded-full ml-3"
            />
          </div>
          <span className="text-sm text-gray-500 mt-1">02:35 pm</span>
        </div>

 {/* Store Message */}
 <div className="flex flex-col items-start mb-5">
  <div className="flex items-start">
    <img
      src="profil_toko.png"
      alt="Store Profile"
      className="w-8 h-8 rounded-full mr-3"
    />
    <div
      className="flex flex-col bg-[#FFFFFF] p-3 rounded-lg max-w-[60%] border border-[#000000]"
      style={{ color: '#555758' }}
    >
      <p>
        Baik kak, tunggu saya buatkan keranjang produknya agar bisa melanjutkan
        proses checkout dan payment
      </p>
    </div>
  </div>
  <span className="text-sm text-gray-500 mt-1">02:40 pm</span>
</div>

        {/* Product Card with Image on Top */}
<div className="flex items-start mb-5">
  {/* Profile Image (outside the card) */}
  <img
    src="profil_toko.png"
    alt="Store Profile"
    className="w-8 h-8 rounded-full mr-3 self-start"
  />

  {/* Card Content */}
  <div className="p-3 bg-white border border-black rounded-lg shadow-md max-w-[40%] max-h-[40%] flex flex-col items-center">
    {/* Product Image */}
    <img
      src="crocs.png"
      alt="Crocs Unisex-Adult Baya Clogs"
      className="w-50 h-50 object-contain mb-3"
    />

    {/* Product Details */}
    <div className="text-center">
    <p className="text-lg mb-1" style={{ color: '#555758' }}>
  Crocs Unisex-Adult Baya Clogs
</p>
      <p className="text-orange-500 font-bold mb-2">Rp700.000,00</p>
      <button className="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600 transition-colors"
      onClick={() => navigate('/cart')}
      >
        Add to Cart
      </button>
    </div> 
  </div>
</div>
<span className="text-sm text-gray-500 mt-0 block">02:40 pm</span>

        <div className="flex flex-col items-end mb-5">
          <div className="flex items-start justify-end">
            <div className="flex flex-col bg-[#F0F0F0] text-black p-3 rounded-lg max-w-[90%] border border-[#000000]">
              <p>Okay kak, terima kasih!</p>
            </div>
            <img
              src="profil_user.png"
              alt="User Profile"
              className="w-8 h-8 rounded-full ml-3"
            />
          </div>
          <span className="text-sm text-gray-500 mt-1">02:50 pm</span>
        </div>
      </div>

      <div className="flex items-center p-3 border-t border-gray-200">
        <img src="icon_image.png" alt="Image Icon" className="w-6 h-6 mr-3" />

        <div className="flex items-center w-full border border-gray-200 rounded-full p-2 relative hover:border-orange-500 transition-colors duration-200">
          <input
            type="text"
            placeholder="Enter Message"
            className="flex-grow p-2 pl-4 pr-10 focus:outline-none rounded-full"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <img src="icon_send.png" alt="Send Icon" className="w-6 h-6" />
          </button>
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
    <div className="mt-8 px-[15px]">
      <div className="grid grid-cols-4 gap-5 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-5">
        <button className="px-5 py-2.5 border-none bg-[#FB8500] text-white rounded hover:bg-[#e07300] transition-colors">
          Show More
        </button>
      </div>
    </div>
  );
};

function Store() {
  const [isChatOpen, setIsChatOpen] = useState(false);
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
      <StoreHeader onOpenChat={() => setIsChatOpen(true)} />
      <ProductList products={products} />
      {isChatOpen && <ChatPopup onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default Store;