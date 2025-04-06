import React, { useState } from "react";  
import { Link } from "react-router-dom";
 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-cover bg-no-repeat bg-center h-32" 
    >
      <nav className="text-white  flex justify-between items-center relative">
      


        <div className={`absolute md:static top-1 right-0  text-white w-48 md:w-auto py-2 md:py-0 md:flex md:space-x-6 shadow-lg md:shadow-none rounded-lg md:rounded-none ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/" className="block px-4 py-2 md:px-0 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Home</Link>
          <Link to="/products" className="block px-4 py-2 md:px-0 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Products</Link>
          <Link to="/cart" className="block px-4 py-2 md:px-0 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Cart</Link>
        </div>

      
      
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="w-8 h-8 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

      </nav>
    </div>
  );
}

export default Navbar;
