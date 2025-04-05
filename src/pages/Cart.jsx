import React from 'react';
import Navbar from '../components/Navbar';
import BackB from '../components/BackB';
import Summ from '../components/Summ'
import Footer from '../components/Footer';

function Cart() {
  return (
    <div>
      <BackB />
      <Navbar />
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
      </div>
      <Summ />
      <Footer />
    </div>
  );
}

export default Cart;