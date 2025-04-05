import React from "react"; 
import Nav from "./Navbar" ;
import Button from "./Button"
import back1 from "../assets/images/back1.jpeg"; 

function Hero() {
 
  return (
    <div 
      className="bg-cover bg-no-repeat bg-center h-32" 
      style={{ backgroundImage: `url(${back1})` }}
    >
        <Nav />
        {/* Logo */}
        <div>
        <img src={logo} alt="Shaba Furnitures Logo" className="h-4" />
        </div>

      
        
       <div>
        <h2>Shaba Dey For You</h2>
        <p>crafted with style, comfort and quality</p>
       </div>

       <Button  Shop Now/>
     
    </div>
  );
}

export default Hero;
