import React from "react";
import Container from "./Container";
import { FaUserCircle } from "react-icons/fa"; 
const Testy = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Shaba Furnitures completely transformed my living room! The quality is amazing and the customer service was excellent. Highly recommend!",
    },
    {
      name: "Jane Smith",
      text: "I love my new furniture! It was easy to find exactly what I needed at a price that fit my budget. Thank you, Shaba!",
    },
    {
      name: "Chris Johnson",
      text: "The best shopping experience! The furniture is top-notch and the delivery was fast. I'm so happy with my purchase!",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Container
              key={index}
              className="bg-yellow-400 shadow-lg p-6 rounded-lg flex flex-col items-center justify-center"
            >
              <FaUserCircle className="text-gray-400 w-24 h-24 mb-4" />
              <p className="text-lg font-medium text-gray-600 mb-4">"{testimonial.text}"</p>
              <h3 className="text-xl font-semibold text-yellow-800">{testimonial.name}</h3>
            </Container>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testy;
