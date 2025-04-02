import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="text-3xl font-bold">Shaba Furnitures</Link>
        </div>

        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

     
        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          <Link to="/cart" className="hover:text-gray-400">Cart</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/register" className="hover:text-gray-400">Register</Link>
        </nav>

       
        <div className="flex items-center space-x-4">
          <SearchBar />
          <CartIcon />
        </div>
      </div>

    
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-black text-white py-4`}>
        <nav className="space-y-4">
          <Link to="/" className="block px-4 py-2">Home</Link>
          <Link to="/products" className="block px-4 py-2">Products</Link>
          <Link to="/cart" className="block px-4 py-2">Cart</Link>
          <Link to="/login" className="block px-4 py-2">Login</Link>
          <Link to="/register" className="block px-4 py-2">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
