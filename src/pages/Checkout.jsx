import React from 'react';

const Checkout = () => {
  return (
    <div>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', padding: '10px 20px'}}>
        <div style={{ marginRight: '20px' }}>
          <img src="/src/assets/logo.png" alt="Jastipify Logo" style={{ width: '120px', height: '120px' }} />
        </div>
        <div style={{ display: 'flex',  marginLeft: '200px', justifyContent: 'center', flexGrow: 0.5, alignItems: 'center', border: '1px solid #f7931e', overflow: 'hidden' }}>
          <div style={{ flex: 1, padding: '5px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px', backgroundColor: '#f7931e', color: '#fff', borderRight: '1px solid #f7931e', fontFamily: 'Poppins, sans-serif' }}>
            1. Information
          </div>
          <div style={{ flex: 1, padding: '5px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px', color: '#f7931e', borderRight: '1px solid #f7931e', fontFamily: 'Poppins, sans-serif' }}>
            2. Payment
          </div>
          <div style={{ flex: 1, padding: '5px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px', color: '#f7931e', fontFamily: 'Poppins, sans-serif' }}>
            3. Receipt
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', fontFamily: 'Poppins, sans-serif' }}>
        {/* Checkout Form */}
        <div style={{ width: '60%', padding: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px'}}>
        <p>Checkout</p>
        </div>
          <form>
            {/* Name and Phone row */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>Name</label>
                <input type="text" placeholder="Enter your name" style={{ padding: '10px', border: '1px solid #000000' }} />
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>Phone</label>
                <input type="text" placeholder="Enter your phone number" style={{ padding: '10px', border: '1px solid #000000'}} />
              </div>
            </div>

            {/* Country, Province, City, and District row */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>Country</label>
                <select style={{ padding: '10px', border: '1px solid #000000'}}>
                  <option>Indonesia</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>Province</label>
                <select style={{ padding: '10px', border: '1px solid #000000'}}>
                  <option>East Java</option>
                  <option>West Java</option>
                </select>
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>City</label>
                <select style={{ padding: '10px', border: '1px solid #000000'}}>
                  <option>Surabaya</option>
                  <option>Jakarta</option>
                </select>
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>District</label>
                <select style={{ padding: '10px', border: '1px solid #000000'}}>
                  <option>Mulyorejo</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Address field */}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Address</label>
              <textarea placeholder="Enter your address" style={{ padding: '10px', border: '1px solid #000000', resize: 'vertical' }}></textarea>
            </div>

            {/* Shipping Method and Payment Method row */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>Shipping Method</label>
                <select style={{ padding: '10px', border: '1px solid #000000'}}>
                  <option>JNE</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '5px' }}>Payment Method</label>
                <select style={{ padding: '10px', border: '1px solid #000000'}}>
                  <option>Transfer - BCA</option>
                  <option>Transfer - Mandiri</option>
                </select>
              </div>
            </div>

            <div style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '50px' }}>
              <p>Grand Total</p>
              <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#f7931e', marginTop: '0px', marginBottom: '10px' }}>
                <p>Rp770.000,00</p>
              </div>
            </div>
          </form>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <button type="button" style={{ backgroundColor: '#f7931e', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '16px' }}>
              Continue to Payment
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div style={{ width: '37%', padding: '20px', border: '5px solid #ddd', boxSizing: 'border-box', height: '530px'}}>
        <div style={{ fontWeight: 'bold', fontSize: '20px'}}>
        <p>Your Summary</p>
        </div>
          <h4>Items</h4>
          <div style={{ display: 'flex', gap: '100px', alignItems: 'center', marginBottom: '15px' }}>
            <img src="/src/assets/crocs.png" alt="Product" style={{ width: '150px', marginBottom: '10px' }} />
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Crocs Unisex - Adult Baya Clogs</p>
              <p style={{ margin: '0px 0 20px 0', fontWeight: 'bold', color: '#f7931e' }}>Rp700.000,00</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '55px 0 0 0', fontWeight: 'bold' }}>
                <span>QTY</span>
                <span>1</span>
              </div>
            </div>
          </div>

          <div>
            {/* Delivery section */}
            <p style={{marginBottom: '10px'}}>Delivery</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '13px'}}>Weight</p>
              <p style={{ margin: 0, fontSize: '13px' }}>1 KG</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '13px'}}>Courier</p>
              <p style={{ margin: 0, fontSize: '13px' }}>JNE</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '13px' }}>Delivery Fee</p>
              <p style={{ margin: 0, color: '#f7931e', fontSize: '13px'}}>Free</p>
            </div>
          </div>

          {/* Total section */}
          <div>
            <p style={{marginBottom: '10px'}}>Total</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '13px' }}>Item(s)</p>
              <p style={{ margin: 0, fontSize: '13px' }}>Rp700.000,00</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '13px' }}>Tax</p>
              <p style={{ margin: 0, fontSize: '13px' }}>Rp70.000,00</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '13px' }}>Delivery Fee</p>
              <p style={{ margin: 0, color: '#f7931e', fontSize: '13px' }}>Free</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '20px' }}>Grand Total</p>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#f7931e', fontSize: '20px' }}>Rp770.000,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
