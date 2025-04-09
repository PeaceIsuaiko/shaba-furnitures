
import React from "react";
import { useNavigate } from "react-router-dom"; 

const BackB = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <button 
      onClick={handleGoBack} 
      className=" text-yellow-500 font-medium mb-4 hover:text-blue-700 py-12 px-5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    
    </button>
  );
};

export default BackB;
