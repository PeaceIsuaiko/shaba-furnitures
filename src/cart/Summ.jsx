import React from 'react';

function Summ({ subTotalPrice, shipping, totalPrice }) {
  return (
    <div className="flex flex-col gap-6 px-5 py-6">
      <h2 className="font-bold">Order Summary</h2>
      <div className="flex flex-col">
        <p>Subtotal: ${subTotalPrice}</p>
        <p>Shipping: ${shipping}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <p className="text-yellow-800">Review your order before checking out!</p>
    </div>
  );
}

export default Summ;

