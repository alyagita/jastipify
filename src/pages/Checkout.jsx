import React from 'react';

const Checkout = () => {
  return (
    <div className="font-poppins">
      {/* Header */}
      <header className="flex items-center p-2">
        <div className="mr-5">
          <img src="/src/assets/logo.png" alt="Jastipify Logo" className="w-[120px] h-auto ml-4" />
        </div>
        <div className="flex justify-center items-center w-full max-w-2xl ml-40 border border-[#FA8B02] overflow-hidden">
  <div className="flex-1 py-2 text-center font-bold text-lg bg-[#FA8B02] text-white border-r border-[#FA8B02] p-[5px]">
    1. Information
  </div>
  <div className="flex-1 py-2 text-center font-bold text-lg text-[#FA8B02] border-r border-[#FA8B02] p-[5px]">
    2. Payment
  </div>
  <div className="flex-1 py-2 text-center font-bold text-lg text-[#FA8B02] ">
    3. Receipt
  </div>
</div>
      </header>

      {/* Main Content */}
      <div className="flex justify-between p-5">
        {/* Checkout Form */}
        <div className="w-3/5 p-5">
          <div className="font-bold text-xl mb-2">Checkout</div>
          <form>
            {/* Name and Phone row */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">Name</label>
                <input type="text" placeholder="Enter your name" className="p-2 border border-black" />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">Phone</label>
                <input type="text" placeholder="Enter your phone number" className="p-2 border border-black" />
              </div>
            </div>

            {/* Country, Province, City, and District row */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">Country</label>
                <select className="p-2 border border-black">
                  <option>Indonesia</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">Province</label>
                <select className="p-2 border border-black">
                  <option>East Java</option>
                  <option>West Java</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">City</label>
                <select className="p-2 border border-black">
                  <option>Surabaya</option>
                  <option>Jakarta</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">District</label>
                <select className="p-2 border border-black">
                  <option>Mulyorejo</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Address field */}
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold">Address</label>
              <textarea placeholder="Enter your address" className="p-2 border border-black resize-y"></textarea>
            </div>

            {/* Shipping Method and Payment Method row */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">Shipping Method</label>
                <select className="p-2 border border-black">
                  <option>JNE</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-2 font-bold">Payment Method</label>
                <select className="p-2 border border-black">
                  <option>Transfer - BCA</option>
                  <option>Transfer - Mandiri</option>
                </select>
              </div>
            </div>

            <div className="font-bold text-xl mt-12 mb-0">Grand Total</div>
            <div className="font-bold text-xl text-[#FA8B02] mb-8">Rp770.000,00</div>

            <div className="flex justify-center mt-12">
              <button
                type="button"
                className="bg-[#FA8B02] text-white py-2 px-4 rounded-full text-lg hover:bg-[#FA8B02] font-bold">
                Continue to Payment
              </button>
            </div>
          </form>
        </div>

        {/* Summary Section */}
        <div className="w-[37%] p-5 border-l border-black h-[530px] box-border">
          <div className="font-bold text-xl mb-2">Your Summary</div>
          <h4 className="mb-0">Items</h4>
          <div className="flex gap-10 items-center mb-4">
            <img src="/src/assets/crocs.png" alt="Product" className="w-40 mb-4" />
            <div>
              <p className="font-bold mb-1 ml-12">Crocs Unisex - Adult Baya Clogs</p>
              <p className="font-bold text-[#FA8B02] mb-4 ml-12">Rp700.000,00</p>
              <div className="flex justify-between font-bold mt-8 ml-12">
                <span>QTY</span>
                <span>1</span>
              </div>
            </div>
          </div>

          <div>
            {/* Delivery section */}
            <p className="mb-2">Delivery</p>
            <div className="flex justify-between mb-1">
              <p className="font-bold text-sm">Weight</p>
              <p className="text-sm">1 KG</p>
            </div>
            <div className="flex justify-between mb-1">
              <p className="font-bold text-sm">Courrier</p>
              <p className="text-sm">JNE</p>
            </div>
            <div className="flex justify-between mb-1">
              <p className="font-bold text-sm mb-4">Delivery Fee</p>
              <p className="text-sm text-[#FA8B02] mb-4">Free</p>
            </div>
          </div>

          {/* Total section */}
          <div>
            <p className="mb-2">Total</p>
            <div className="flex justify-between mb-1">
              <p className="font-bold text-sm">Item(s)</p>
              <p className="text-sm">Rp700.000,00</p>
            </div>
            <div className="flex justify-between mb-1">
              <p className="font-bold text-sm">Tax</p>
              <p className="text-sm">Rp70.000,00</p>
            </div>
            <div className="flex justify-between mb-1">
              <p className="font-bold text-sm mb-4">Delivery Fee</p>
              <p className="text-sm text-[#FA8B02] mb-4">Free</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="font-bold text-lg">Grand Total</p>
              <p className="font-bold text-[#FA8B02] text-lg">Rp770.000,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
