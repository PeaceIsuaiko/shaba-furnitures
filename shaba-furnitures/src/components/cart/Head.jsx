import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gray-100 border-b">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="text-lg font-semibold text-blue-500 hover:underline flex items-center space-x-2"
        aria-label="Go back"
      >
        <span>⏪</span> 
        <span>Back</span>
      </button>

      {/* Page Title */}
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
    </div>
  );
};

export default Head;
