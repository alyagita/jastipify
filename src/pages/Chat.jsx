import React from "react";
import { useNavigate } from "react-router-dom";


const Chat = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between h-screen w-full border border-gray-200 bg-white">
      <header className="flex items-center p-3 bg-orange-500 text-white">
        <img src="profil_toko.png" alt="BoutiqueID Logo" className="w-10 mr-3" />
        <h1>BoutiqueID</h1>
      </header>

      <div className="p-5 overflow-y-auto flex-grow">
        {/* User Response */}
        <div className="flex flex-col items-end mb-5">
          <div className="flex items-start justify-end">
            <div className="flex flex-col bg-[#F0F0F0] text-black p-3 rounded-lg max-w-[60%] border border-[#000000]">
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
      <p>Bisa kak, Silahkan isi form berikut ya! :)</p>
    </div>
  </div>
  <span className="text-sm text-gray-500 mt-1">02:22 pm</span>
</div>

        {/* Form Template */}
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

        {/* User Response */}
        <div className="flex flex-col items-end mb-5">
          <div className="flex items-start justify-end">
            <div className="flex flex-col bg-[#F0F0F0] text-black p-3 rounded-lg max-w-[60%] border border-[#000000]">
              <p>~ FORMAT JASTIP BARANG REQUEST ~<br />
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
  <div className="p-3 bg-white border border-black rounded-lg shadow-md max-w-[30%] max-h-[40%] flex flex-col items-center">
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
  {/* Timestamp */}
  <span className="text-sm text-gray-500 mt-1">02:40 pm</span>
</div>


        {/* User Final Response */}
        <div className="flex flex-col items-end mb-5">
          <div className="flex items-start justify-end">
            <div className="flex flex-col bg-[#F0F0F0] text-black p-3 rounded-lg max-w-[100%] border border-[#000000]">
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

export default Chat;
