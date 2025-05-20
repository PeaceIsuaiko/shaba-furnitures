import React, { useState, useEffect } from 'react';
import Toggle from '../components/Toggle';
import Button from '../components/Button';

function Set() {
  const [taxRate, setTaxRate] = useState('');
  const [shippingFee, setShippingFee] = useState('');
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    const savedTax = localStorage.getItem('taxRate');
    const savedShipping = localStorage.getItem('shippingFee');
    const savedOrders = JSON.parse(localStorage.getItem('pendingOrders')) || [];

    if (savedTax) setTaxRate(savedTax);
    if (savedShipping) setShippingFee(savedShipping);
    setPendingOrders(savedOrders);
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem('taxRate', taxRate);
    localStorage.setItem('shippingFee', shippingFee);
    alert('Settings saved successfully!');
  };

  const handleOrderFulfill = (id) => {
    const updatedOrders = pendingOrders.filter(order => order.id !== id);
    setPendingOrders(updatedOrders);
    localStorage.setItem('pendingOrders', JSON.stringify(updatedOrders));
  };

  return (
    <Toggle>
    <div className="flex flex-col px-14 py-7 space-y-6 ">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>

      <div className="space-y-2">
        <label className="block font-medium">Tax Rate (%)</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
          className="border px-3 py-2 rounded w-50"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Shipping Fee ($)</label>
        <input
          type="number"
          value={shippingFee}
          onChange={(e) => setShippingFee(e.target.value)}
          className="border px-3 py-2 rounded w-50"
        />
      </div>

      <Button
        onClick={handleSaveSettings}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Settings
      </Button>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Pending Orders</h3>
        {pendingOrders.length === 0 ? (
          <p>No pending orders.</p>
        ) : (
          <ul className="space-y-2">
            {pendingOrders.map(order => (
              <li key={order.id} className="border p-3 rounded flex justify-between items-center">
                <span>Order #{order.id} - {order.customer}</span>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleOrderFulfill(order.id)}
                >
                  Mark as Fulfilled
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </ Toggle>
  );
}

export default Set;
