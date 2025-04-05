import React from 'react';

function Summ({ totalPrice }) {
  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        <p>Subtotal: ${totalPrice}</p>
        <p>Shipping: $0.00</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <p>Review your order summary</p>
    </div>
  );
}

export default Summ;