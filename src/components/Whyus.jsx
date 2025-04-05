import React from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa"; // Example icons from react-icons

const WhyUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Box 1 */}
          <div className="bg-white shadow-lg p-8 rounded-lg flex flex-col items-center justify-center">
            <FaHeart className="text-red-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quality Furniture
            </h3>
            <p className="text-gray-600">
              We provide high-quality, durable furniture that enhances your
              living space with comfort and style.
            </p>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white shadow-lg p-8 rounded-lg flex flex-col items-center justify-center">
            <FaThumbsUp className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Enjoy stylish and functional furniture at prices that fit your
              budget without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
