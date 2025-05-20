import React, { useEffect, useState } from 'react';
import PaymentMethod from './Pay';

function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('checkoutItems')) || [];
    setCheckoutItems(items);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        
        <div className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Items to Checkout:</h2>
          {checkoutItems.length > 0 ? (
            <ul className="list-disc ml-6">
              {checkoutItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No items found for checkout.</p>
          )}
        </div>

        <PaymentMethod />
      </div>
    </div>
  );
}

export default Checkout;
