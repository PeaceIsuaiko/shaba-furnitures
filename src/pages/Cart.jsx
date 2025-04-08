import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Summ from '../components/Summ';
import BackB from '../components/BackB';
import {
  getLocalCart,
  removeProductFromLocalCart,
  increaseQuantity,
  decreaseQuantity,
} from '../utils/localCart';

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = getLocalCart();
    setCart(cartData);
    updateTotal(cartData);
  }, []);

  const updateTotal = (cartData) => {
    const total = cartData.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleRemoveProduct = (productId) => {
    const updatedCart = removeProductFromLocalCart(productId);
    setCart(updatedCart);
    updateTotal(updatedCart);
  };

  const handleIncrease = (productId) => {
    const updatedCart = increaseQuantity(productId);
    setCart(updatedCart);
    updateTotal(updatedCart);
  };

  const handleDecrease = (productId) => {
    const updatedCart = decreaseQuantity(productId);
    setCart(updatedCart);
    updateTotal(updatedCart);
  };

  const handleCheckout = () => {
    alert('Checkout not implemented yet 😅');
  };

  return (
    <div>
      <BackB />
      <Navbar />
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="mb-4 p-4 border rounded">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-700">${product.price} × {product.quantity}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-yellow-500 px-2 rounded text-black font-bold"
                      onClick={() => handleDecrease(product.id)}
                    >
                      -
                    </button>
                    <span className="px-2">{product.quantity}</span>
                    <button
                      className="bg-green-500 px-2 rounded text-white font-bold"
                      onClick={() => handleIncrease(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <Summ totalPrice={totalPrice} />
        <button
          onClick={handleCheckout}
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded"
        >
          Checkout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
