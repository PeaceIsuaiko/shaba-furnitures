
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
    <footer className="bg-white-200 text-white py-10 mt-10 static">
      <div className="max-w-6xl mx-auto px-6   items-start md:items-center gap-6">
       

        <div className="max-w-md flex flex-row bg-white-900">
         <Button 
          
            onClick={handleOpenSearch}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Find
          </ Button>
          <p className="text-gray-400 mb-4">Your Perfect Furniture Today!</p>
        </div>

        <div className="text-center md:text-left bg-yellow-500 py-10 flex flex-row">
         
         
          <div className="text-gray-500 text-sm">
            <img src={logo} alt="Shaba Logo" className="h-10 mx-auto md:mx-0 mb-4" /> 
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>

         <div>
         <div className="flex justify-center md:justify-start gap-4 mb-2">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
          <p className="text-xs text-gray-500 mt-2">&copy; 2025 Shaba Furnitures. All rights reserved.</p>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
