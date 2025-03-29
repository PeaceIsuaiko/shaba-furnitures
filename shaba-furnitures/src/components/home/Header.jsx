import { useState } from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png";  
import firstback from "../../assets/firstback.jpeg";  

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for mobile menu

  return (
    <div
      className="relative bg-black bg-cover bg-center h-screen brightness-5 contrast-235"
      style={{ backgroundImage: `url(${firstback})` }} // Background Image
    >
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* LOGO - Just an image */}
          <img src={logo} alt="Brand Logo" className="h-40 w-50" />

          {/* HAMBURGER MENU (Mobile) */}
          <button
            className="text-white text-3xl md:hidden py-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* NAV MENU */}
          <nav
  className={`absolute top-full right-10 w-full md:static md:flex md:space-x-6 p-4 transition-all ${
    isOpen ? "block" : "hidden"
  } md:block flex justify-end pr-20`}
>
  <Link to="/" className="text-black block md:inline-block text-2xl md:text-3xl font-bold">
    Home
  </Link>
  <Link to="/product" className="text-pink block md:inline-block text-2xl md:text-3xl font-bold">
    Products
  </Link>
  <Link to="/cart" className="text-black block md:inline-block text-2xl md:text-3xl font-bold">
    Cart
  </Link>
</nav>


        </div>
      </header>

      {/* HERO SECTION */}
      <div className="h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
        Shaba Dey for You
        </h1>
        <p className="text-lg text-white mb-6">
        crafted with style, comfort, and quality
        </p>
        <a
          href="#shop"
          className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Header;
