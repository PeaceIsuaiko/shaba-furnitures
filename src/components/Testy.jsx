import React from "react";

const Testy = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150", // Replace with actual customer image
      text: "Shaba Furnitures completely transformed my living room! The quality is amazing and the customer service was excellent. Highly recommend!",
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/150", // Replace with actual customer image
      text: "I love my new furniture! It was easy to find exactly what I needed at a price that fit my budget. Thank you, Shaba!",
    },
    {
      name: "Chris Johnson",
      image: "https://via.placeholder.com/150", // Replace with actual customer image
      text: "The best shopping experience! The furniture is top-notch and the delivery was fast. I'm so happy with my purchase!",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="text-lg font-medium text-gray-600 mb-4">"{testimonial.text}"</p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testy;
