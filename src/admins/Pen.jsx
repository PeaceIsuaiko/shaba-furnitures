import React, { useState, useEffect } from 'react';
import Toggle from "../components/Toggle";

function PendingOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const pending = storedOrders.filter(order => order.status === 'pending');
    setOrders(pending);
  }, []);

  return (
    <Toggle>
       <div className='flex flex-col px-14 py-7'>
        <h3>Pending Orders</h3>
        {orders.length === 0 ? (
          <p className='py-8'>No pending orders at the moment.</p>
        ) : (
          <ul className='py-12'>
            {orders.map(order => (
              <li key={order.id}>
                Order #{order.id} - {order.customerName} - {order.totalAmount}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Toggle>
  );
}

export default PendingOrders;
