// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Shaba Furnitures. All rights reserved.</p>
          <p>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a> | 
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  