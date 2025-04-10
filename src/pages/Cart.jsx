import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Summ from '../components/Summ';
import Button from '../components/Button'
import {
  getLocalCart,
  removeProductFromLocalCart,
  increaseQuantity,
  decreaseQuantity,
} from '../utils/localCart';

function Cart() {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = getLocalCart();
    setCart(cartData);
    updateTotal(cartData);
  }, []);

  useEffect(() => {
    const total = subTotal + shipping;
    setTotalPrice(total);
  }, [subTotal, shipping]);
  

  const updateSubTotal = (cartData) => {
    const subTotal = cartData.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setSubTotal(subTotal);
  };

  const updateShipping = () => {
    setShipping(10);
  };
  
  
  const updateTotal = (cartData) => {
    updateSubTotal(cartData);
    updateShipping(cartData);
    const total = subTotal + shipping;
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
    alert('Checkout not implemented yet ');
  };

  return (
    <div>
      <Navbar className="flex" />
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="mb-4 p-4 border rounded">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-700">${product.price}</p>
                  <div className="flex gap-2 mt-2 text-white font-bold">
                    <button
                      className="bg-black px-2 rounded"
                      onClick={() => handleDecrease(product.id)}
                    >
                      -
                    </button>
                    <span className="px-2 text-yellow-800">
                      {product.quantity}
                    </span>
                    <button
                      className="bg-yellow-500 px-2 rounded"
                      onClick={() => handleIncrease(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="px-4 mb-8"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                   <svg 
            className="w-8 h-8 text-yellow-800" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d={product.id? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <Summ subTotalPrice={subTotal} shipping={shipping} totalPrice={totalPrice} />
              <Button
                onClick={handleCheckout}
                className="mt-6  hover:bg-yellow-600 text-black px-9 py-2 rounded"
              >
                Checkout
              </Button>
            </div>
          </div>
        );
      }
      
      export default Cart;
      
