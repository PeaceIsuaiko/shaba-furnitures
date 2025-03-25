import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto text-center text-white">
      {/* Logo */}
      <div className="mb-6">
        <img src={logo} alt="Shaba Logo" className="w-32 mx-auto" />
      </div>

      {/* Socials */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-8 h-8 hover:opacity-80 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="w-8 h-8 hover:opacity-80 transition" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
          Privacy Policy
        </button>
        <p className="text-gray-400 text-sm mt-4">© 2025 Shaba. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
