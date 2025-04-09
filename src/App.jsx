import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Reset from './pages/Reset';
import Private from './components/Private';
import ProductSearch from './pages/ProductSearch';
import AuthModal from './components/AuthModal';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('authenticated');
    if (user) {
      setAuthenticated(true);
    } else {
      setShowAuthModal(true);
    }
  }, []);

  const handleAuthSuccess = () => {
    localStorage.setItem('authenticated', true);
    setAuthenticated(true);
    setShowAuthModal(false);
  };

  return (
    <BrowserRouter>
      {showAuthModal && <AuthModal onAuthSuccess={handleAuthSuccess} />}

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
        <Route path="/reset-password" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
