import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/home/Home';
import Products from '../src/products/Products';
import ProductDetails from '../src/products/ProductDetails';
import Cart from '../src/cart/Cart';
import AdminBoard from '../src/admins/AdminBoard';
import UserBoard from '../src/users/UserBoard';
import Checkout from '../src/checkout/Checkout';
import OrderConfirmation from '../src/cart/OrderConfirmation';
import Private from './components/Private';
import ProductSearch from '../src/products/ProductSearch';
import Auth from '../src/auths/Auth'; // auth modal/page component
import Modal from './components/Modal'; // assume you have this modal
// OR just use <Auth /> directly for modal if modal is not a separate file

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('authenticated');
    if (user === 'true') {
      setAuthenticated(true);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleAuthSuccess = () => {
    localStorage.setItem('authenticated', 'true');
    setAuthenticated(true);
    setShowModal(false);
  };

  return (
    <BrowserRouter>
      {showModal && <Auth onAuthSuccess={handleAuthSuccess} />}

      <Routes>
        <Route
          path="/"
          element={
            <Private isAuthenticated={authenticated}>
              <Home />
            </Private>
          }
        />
        <Route
          path="/products"
          element={
            <Private isAuthenticated={authenticated}>
              <Products />
            </Private>
          }
        />
        <Route
          path="/auths"
          element={
            <Private isAuthenticated={authenticated}>
              <Auth />
            </Private>
          }
        />
        <Route
          path="/admins"
          element={
            <Private isAuthenticated={authenticated}>
              <AdminBoard />
            </Private>
          }
        />
        <Route
          path="/users"
          element={
            <Private isAuthenticated={authenticated}>
              <UserBoard />
            </Private>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Private isAuthenticated={authenticated}>
              <ProductDetails />
            </Private>
          }
        />
        <Route
          path="/cart"
          element={
            <Private isAuthenticated={authenticated}>
              <Cart />
            </Private>
          }
        />
        <Route
          path="/checkout"
          element={
            <Private isAuthenticated={authenticated}>
              <Checkout />
            </Private>
          }
        />
        <Route
          path="/order-confirmation"
          element={
            <Private isAuthenticated={authenticated}>
              <OrderConfirmation />
            </Private>
          }
        />
        <Route
          path="/product-search"
          element={
            <Private isAuthenticated={authenticated}>
              <ProductSearch />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
