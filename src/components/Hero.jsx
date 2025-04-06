import React from "react"; 
import Nav from "./Navbar";
import Button from "./Button";
import logo from "../assets/images/shaba.png";
import back1 from "../assets/images/back1.jpeg"; 

function Hero() {
  return (
    <div 
      className="bg-cover bg-no-repeat bg-center h-96 transparent-"  // Changed h-200 to h-96
      style={{ backgroundImage: `url(${back1})` }}
    >
      <div className="flex flex-row py-2">
        <img src={logo} alt="Shaba Furnitures Logo" className="h-12 w-auto px-20 my-10"  />
        <Nav/>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-white">Shaba Dey For You</h2>
        <p className="mt-2 text-lg  text-yellow-400 ">Crafted with style, comfort and quality</p>
      </div>

      <div className="flex px-20 mt-8 justify-end">
        <Button>Shop Now</Button>
      </div>
    </div>
  );
}

export default Hero;
