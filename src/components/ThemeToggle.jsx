import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div>
      <label className="flex items-center">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="ml-2"
        />
      </label>
    </div>
  );
}

export default ThemeToggle;
