
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Summ from '../components/Summ';
import BackB from '../components/BackB';
import CartApi from '../api/CartApi';

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    CartApi.getCart()
      .then((response) => {
        setCart(response.data);
        const totalPrice = response.data.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(totalPrice);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRemoveProduct = (productId) => {
    CartApi.getCart()
      .then((response) => {
        const updatedCart = response.data.filter((product) => product.id !== productId);
        setCart(updatedCart);
        const totalPrice = updatedCart.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(totalPrice);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCheckout = () => {
    
  };

  return (
    <div>
      <BackB />
      <Navbar />
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <Summ totalPrice={totalPrice} />
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;