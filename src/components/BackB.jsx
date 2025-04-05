// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

const BackB = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button 
      onClick={handleGoBack} 
      className="flex items-center text-blue-500 font-medium mb-4 hover:text-blue-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    
    </button>
  );
};

export default BackB;
