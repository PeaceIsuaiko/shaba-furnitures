import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing search icon

const Search = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for mobile menu

  return (
    <div className="relative bg-black bg-cover bg-center h-screen brightness-5 contrast-235">
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Return Button */}
          <button className="text-white text-3xl p-2" onClick={() => window.history.back()}>
            ⏪
          </button>

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
            <a href="#home" className="text-black block md:inline-block text-2xl md:text-3xl font-bold">
              Home
            </a>
            <a href="#products" className="text-pink block md:inline-block text-2xl md:text-3xl font-bold">
              Products
            </a>
            <a href="#contact" className="text-black block md:inline-block text-2xl md:text-3xl font-bold">
              Cart
            </a>
          </nav>
        </div>
      </header>

      {/* Search Bar with Icon Inside */}
      <div className="relative max-w-md mx-auto mt-20">
        <input
          type="search"
          placeholder="Search for products..."
          className="w-full py-3 pl-5 pr-12 text-black rounded-full shadow-md focus:outline-none"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black">
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Search;
