import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/shaba.png';
import Container from './Container';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  const navigate = useNavigate();

  const handleOpenSearch = () => {
    navigate('/product-search');
  };

  return (
    <footer className="bottom-0 sticky text-black bg-yellow-400   left-0 w-full">
      <Container className="max-w-6xl mx-auto  flex flex-col md:flex-row   gap-6">


      <div className='flex flex-row'>
       <div className="flex flex-col  md:items-start px-20">
          <img src={logo} alt="Shaba Logo" className="h-10 w-auto mb-4" />
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-row">
          <Button
            onClick={handleOpenSearch}
            className="bg-blue-500 hover:bg-blue-700 "
          >
            Find
          </Button>
          <p className="text-gray-400 text-center md:text-left py-3 px-4">
            Your Perfect Furniture Today!
          </p>
        </div>

       

        <div className='justify-end flex flex-col gap-6 justify-end px-20 '>
          <div className="flex space-x-4 ">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a>
          </div>

          <div className="text-center text-gray-500 text-sm ">
              &copy; 2025 Shaba Furnitures. All rights reserved.
          </div>
        </div>
       </div>
      </Container>
    </footer>
  );
};

export default Footer;
