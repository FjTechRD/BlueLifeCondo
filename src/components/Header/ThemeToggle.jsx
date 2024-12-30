import React from "react";

const ThemeToggle = () => {
  return (
    <div className="theme-toggle">
      <span className="theme-label">Light</span>
      <label className="toggle">
        <input type="checkbox" id="theme-switch" />
        <span className="slider"></span>
      </label>
      <span className="theme-label">Dark</span>
    </div>
  );
};

export default ThemeToggle;
