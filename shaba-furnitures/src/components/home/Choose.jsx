const Choose = () => {
    return (
      <div className="container px-4 py-12 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us</h2>
  
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
            <p className="text-gray-300 text-sm">
              Get furniture tailored to your style and space. No one-size-fits-all!
            </p>
            <img src="/path-to-icon1.png" alt="Customization Icon" className="w-12 h-12 mb-4" />
          </div>
  
          {/* Feature 2 */}
          <div className="bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
            <p className="text-gray-300 text-sm">
              We deliver your furniture quickly and safely—no long waiting times!
            </p>
            <img src="/path-to-icon2.png" alt="Fast Delivery Icon" className="w-12 h-12 mb-4" />
          </div>
  
          {/* Feature 3 (Example) */}
          <div className="bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
            <p className="text-gray-300 text-sm">
              We use the highest quality materials for long-lasting furniture.
            </p>
            <img src="/path-to-icon3.png" alt="Quality Icon" className="w-12 h-12 mb-4" />
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Choose;
  