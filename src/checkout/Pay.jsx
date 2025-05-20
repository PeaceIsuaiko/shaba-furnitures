import React, { useState } from 'react';

function Pay() {
  const [username, setUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = () => {
    if (!username || !paymentMethod) {
      setMessage("Please enter your name and select a payment method.");
      return;
    }

    const orderDetails = {
      username,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    // Save to localStorage or send to server here
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    setMessage(`Thanks ${username}, your payment via ${paymentMethod} has been initiated.`);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Enter Payment Details</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Your Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. Peace Stephen"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Select Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Choose --</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>

      <button
        onClick={handlePayment}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
      >
        Pay Now
      </button>

      {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
    </div>
  );
}

export default Pay;
