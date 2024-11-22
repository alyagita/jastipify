import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate(); 
  const initialCartItems = [
    {
      id: 1,
      name: "Crocs Unisex-Adult Baya Clogs",
      price: 700000,
      quantity: 1,
      image: "/src/assets/crocs.png",
      seller: "BoutiqueID",
    },
    {
      id: 2,
      name: "Fjallraven Mini Kanken Backpack",
      price: 2300000,
      quantity: 1,
      image: "/src/assets/kanken.png",
      seller: "jastipkanken.trusted",
    },
    {
      id: 3,
      name: "Labubu Blind Box",
      price: 420000,
      quantity: 1,
      image: "/src/assets/labubu.png",
      seller: "labubuhunter.id",
    },
    {
      id: 4,
      name: "Ralph Lauren Polo Blue Hat",
      price: 750000,
      quantity: 1,
      image: "/src/assets/hat.png",
      seller: "RalphsVault",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState(
    initialCartItems.map(() => false)
  );
  const [selectAll, setSelectAll] = useState(false);

  const handleQuantityChange = (id, quantity) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (quantity < 1) {
      handleRemoveWithConfirmation(id);
      return;
    }

    const updatedCart = cartItems.map((item, index) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);

    if (!selectedItems[itemIndex]) {
      handleSelectItem(itemIndex, true);
    }
  };

  const handleRemoveWithConfirmation = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      handleRemove(id);
    }
  };

  const handleRemove = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    setCartItems(cartItems.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    setSelectedItems(selectedItems.map(() => checked));
  };

  const handleSelectItem = (index, checked) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = checked;
    setSelectedItems(newSelectedItems);
    setSelectAll(newSelectedItems.every(Boolean));
  };

  const totalPrice = cartItems.reduce((sum, item, index) => {
    return selectedItems[index] ? sum + item.price * item.quantity : sum;
  }, 0);

  return (
    <div className="max-w-full mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Cart</h1>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-8">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="peer w-6 h-6 border-2 border-[#FA8B02] rounded-sm bg-white checked:bg-white checked:border-[#FA8B02] accent-[#FA8B02] focus:outline-none"
            checked={selectAll}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <p className="font-semibold text-lg text-black ml-4">
            Choose All ({cartItems.length})
          </p>
        </div>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 font-semibold py-4 px-8 border-b border-[#EFEFEF] text-gray-700 text-base">
        <div className="text-left font-semibold text-lg text-black col-span-2 lg:col-span-3 xl:col-span-2">
          Product
        </div>
        <div className="text-center font-semibold text-lg text-black mx-4 xl:col-span-3">
          Price
        </div>
        <div className="text-right font-semibold text-lg text-black">
          Quantity
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 items-center px-8 border-b border-[#EFEFEF] py-6 space-x-4"
        >
          <div className="flex items-center col-span-2 lg:col-span-3 xl:col-span-2">
            <input
              type="checkbox"
              className="peer w-6 h-6 border-2 border-[#FA8B02] rounded-sm bg-white checked:bg-white checked:border-white accent-[#FA8B02] focus:outline-none"
              checked={selectedItems[index]}
              onChange={(e) => handleSelectItem(index, e.target.checked)}
            />
            <div className="flex flex-col items-center ml-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mb-2"
              />
              <button
                onClick={() => handleRemoveWithConfirmation(item.id)}
                className="text-[#FA8B02] flex items-center space-x-1 font-semibold text-sm"
              >
                <FaTrashAlt />
                <span>Delete</span>
              </button>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-base text-black">
                {item.seller}
              </h3>
              <p className="text-gray-600 text-sm">{item.name}</p>
            </div>
          </div>

          <div className="text-center text-black text-base xl:col-span-3">
            Rp{item.price.toLocaleString()},00
          </div>

          <div className="flex items-center justify-end">
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              className="px-2 py-0.5 border border-gray-400 hover:bg-[#EFEFEF] font-semibold text-sm"
            >
              -
            </button>
            <div className="px-2 py-0.5 bg-[#EFEFEF] border-t border-b border-gray-400 font-semibold text-sm">
              {item.quantity}
            </div>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="px-2 py-0.5 border border-gray-400 hover:bg-[#EFEFEF] font-semibold text-sm"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Total Price and Checkout Button */}
      <div className="flex justify-end gap-20 px-8 items-center mt-10">
        <div className="mr-20">
          <h2 className="text-lg font-semibold text-gray-700">Total Price</h2>
          <p className="text-[#FA8B02] font-bold text-2xl">
            Rp{totalPrice.toLocaleString()},00
          </p>
        </div>
        <button
          className="bg-[#FA8B02] text-white py-2 px-8 rounded-full hover:bg-[#FA8B02] font-semibold text-lg"
          onClick={() => navigate('/checkout')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;