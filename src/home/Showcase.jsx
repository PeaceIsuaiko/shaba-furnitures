import React from "react";
import ProductCard from "../products/ProductCard"; 
import products from "../api/products.json"; 

const Showcase = () => {
 
  const firstTwoProducts = products.slice(0, 2);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Products</h2>
        <div className="grid grid-rows-1 sm:grid-cols-2 
        md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {firstTwoProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
