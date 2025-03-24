import React, { useState, useEffect } from "react";
import productData from "../data.json";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData); 
    }, []);

    return (
        <div className="container p-8 max-w-[800px] mx-auto">
           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-black p-2 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 flex items-center gap-4">
                    {/* Image on the left */}
                    <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded-lg" />
                  
                    {/* Content on the right */}
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-white">{product.title}</h2>
                        <p className="text-gray-300 text-sm">{product.price}</p>
                        <a href="#" className="bg-yellow-500 mx-auto text-black font-semibold px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-gray-900 mt-2 inline-block transition duration-300">
                          Add To Cart
                        </a>
                    </div>
                </div>
            ))}
           </div>
        </div>
    );
};

export default HomePage;
