
import React from 'react';
import logo from '../assets/images/shaba.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleOpenSearch = () => {
    navigate('/product-search')
  };

  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
       

        <div className="max-w-md">
         <Button 
          
            onClick={handleOpenSearch}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Find
          </ Button>
          <p className="text-gray-400 mb-4">Your Perfect Furniture Today!</p>
        </div>

        <div className="text-center md:text-left">
          <img src={logo} alt="Shaba Logo" className="h-10 mx-auto md:mx-0 mb-4" />
         
          <div className="text-gray-500 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mb-2">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
          <p className="text-xs text-gray-500 mt-2">&copy; 2025 Shaba Furnitures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
