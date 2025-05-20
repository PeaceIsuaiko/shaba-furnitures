import React, { useState, useRef, useEffect } from "react";

function Toggle({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Close toggle if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative flex flex-col ${className}`} ref={toggleRef}>
      <button className="focus:outline-none" onClick={toggle}>
        <svg
          className="w-8 h-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // Close icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
            }
          />
        </svg>
      </button>

      {isOpen && (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 p-6 bg-white rounded-lg shadow-lg z-50">
    {children}
  </div>
      )}
    </div>
  );
}

export default Toggle;
