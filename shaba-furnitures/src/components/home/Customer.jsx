const Customer = () => {
    return (
      <div className="container px-4 py-12 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8">What Our Customers Say</h2>
  
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Testimonial 1 */}
          <div className="bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
            <img src="/path-to-image1.png" alt="Customer 1" className="w-12 h-12 mb-4 rounded-full" />
            <h3 className="text-lg font-semibold text-white">John Doe</h3>
            <p className="text-gray-300 text-sm mt-2">
              "Get furniture tailored to your style and space. No one-size-fits-all!"
            </p>
          </div>
  
          {/* Testimonial 2 */}
          <div className="bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
            <img src="/path-to-image2.png" alt="Customer 2" className="w-12 h-12 mb-4 rounded-full" />
            <h3 className="text-lg font-semibold text-white">Jane Smith</h3>
            <p className="text-gray-300 text-sm mt-2">
              "We deliver your furniture quickly and safely—no long waiting times!"
            </p>
          </div>
  
          {/* Testimonial 3 */}
          <div className="bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
            <img src="/path-to-image3.png" alt="Customer 3" className="w-12 h-12 mb-4 rounded-full" />
            <h3 className="text-lg font-semibold text-white">Michael Brown</h3>
            <p className="text-gray-300 text-sm mt-2">
              "We use the highest quality materials for long-lasting furniture."
            </p>
          </div>
  
        </div>
  
        {/* Call to Action */}
        <div className="mt-10 flex flex-row items-center">
        <a 
            href="userproductcustomizationquizpage" 
            className="bg-yellow-500 text-black font-semibold px-5 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          >
            Find
          </a>
          <h2 className="text-xl font-semibold text-black ml-4"> Your Perfect Furniture Today</h2>
         
        </div>
      </div>
    );
  };
  
  export default Customer;
  